import React, { useState } from "react";
import { List, Button } from "antd";
import PlacesAutocomplete from "react-places-autocomplete";
import { geocodeByAddress, getLatLng } from "react-places-autocomplete";
import { Route } from "react-router-dom";
import moment from "moment";

import {
  Container,
  PubCrawlInfo,
  PubListItem,
  AutoCompleteContainer,
  AutoCompleteSearchInput,
  AutoCompleteItem,
  AutoCompleteList,
  PubInfo,
  PubTitle,
  PubAddress,
  StyledCloseOutlined,
} from "./styles";

import StyledButton from "../Button";

import { Headline, HeadlineSubtitle, Title } from "../Typography";

const Panel = ({
  formData,
  addPlaceToList,
  removePlaceFromList,
  places,
  generateLink,
}) => {
  const [address, setAddress] = useState("");

  const handleSelect = async (address) => {
    const results = await geocodeByAddress(address);
    const coordinates = await getLatLng(results[0]);
    addPlaceToList({ address, coordinates });
  };

  return (
    <Container>
      <div>
        <PubCrawlInfo>
          <Headline level={1}>{formData ? formData.title : ""}</Headline>
          <HeadlineSubtitle level={2}>
            {formData
              ? `${moment(formData.crawlTimeAndDate).format(
                  "ddd. DD MMM, HH:mm"
                )}`
              : ""}
          </HeadlineSubtitle>
        </PubCrawlInfo>
        <Route exact path="/">
          <AutoCompleteContainer>
            <PlacesAutocomplete
              value={address}
              onChange={setAddress}
              onSelect={handleSelect}
            >
              {({
                getInputProps,
                suggestions,
                getSuggestionItemProps,
                loading,
              }) => (
                <div>
                  <AutoCompleteSearchInput
                    {...getInputProps({
                      placeholder: "Search for your pub here",
                    })}
                  />
                  <AutoCompleteList>
                    {loading && <div>Loading...</div>}
                    {suggestions.map((suggestion) => {
                      const className = suggestion.active
                        ? "suggestion-item--active"
                        : "suggestion-item";
                      // inline style for demonstration purpose
                      const style = suggestion.active
                        ? { backgroundColor: "#fafafa", cursor: "pointer" }
                        : { backgroundColor: "#ffffff", cursor: "pointer" };
                      return (
                        <AutoCompleteItem
                          key={suggestion.id}
                          {...getSuggestionItemProps(suggestion, {
                            className,
                            style,
                          })}
                        >
                          <span>{suggestion.description}</span>
                        </AutoCompleteItem>
                      );
                    })}
                  </AutoCompleteList>
                </div>
              )}
            </PlacesAutocomplete>
          </AutoCompleteContainer>
        </Route>
        {places.length > 0 && (
          <PubInfo>
            <div>
              <Title>The Route</Title>
            </div>
            <List
              size="large"
              dataSource={places}
              renderItem={(place, index) => {
                const [placeName, ...placeAddress] = place.address.split(",");
                return (
                  <PubListItem
                    key={`${place.coordinates.lat}-${place.coordinates.lng}`}
                  >
                    <Headline>{index + 1}</Headline>
                    <PubInfo>
                      <PubTitle>{placeName}</PubTitle>
                      <PubAddress>{placeAddress.join(", ")}</PubAddress>
                    </PubInfo>
                    <Route exact path="/">
                      <Button
                        type="link"
                        icon={<StyledCloseOutlined />}
                        onClick={() => removePlaceFromList(index)}
                      />
                    </Route>
                  </PubListItem>
                );
              }}
            />
          </PubInfo>
        )}
      </div>
      <div style={{ padding: 16, width: "100%" }}>
        <Route exact path="/">
          <StyledButton
            type="primary"
            size="large"
            onClick={generateLink}
            style={{ width: "100%" }}
          >
            Get Link
          </StyledButton>
        </Route>
        <Route exact path="/:id">
          <StyledButton
            type="primary"
            size="large"
            onClick={generateLink}
            href="/"
            style={{ width: "100%" }}
          >
            New pub crawl
          </StyledButton>
        </Route>
      </div>
    </Container>
  );
};

export default Panel;
