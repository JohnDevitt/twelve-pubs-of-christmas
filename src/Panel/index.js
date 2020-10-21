import React, { useState } from "react";
import { List, Button } from "antd";
import PlacesAutocomplete from "react-places-autocomplete";
import { geocodeByAddress, getLatLng } from "react-places-autocomplete";
import { CloseOutlined } from "@ant-design/icons";
import { Route } from "react-router-dom";
import moment from "moment";

import {
  Container,
  PubCrawlTitle,
  PubCrawlTime,
  PubCrawlInfo,
  PubListItem,
  AutoCompleteContainer,
  AutoCompleteSearchInput,
  AutoCompleteItem,
  AutoCompleteList,
  PubInfo,
  PubTitle,
  PubAddress,
  PubListTitle,
} from "./styles";

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
          <PubCrawlTitle level={1}>
            {formData ? formData.title : ""}
          </PubCrawlTitle>
          <PubCrawlTime level={2}>
            {formData
              ? `${moment(formData.crawlTimeAndDate).format(
                  "ddd. DD MMM, HH:mm"
                )}`
              : ""}
          </PubCrawlTime>
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
            <PubListTitle>The Pubs</PubListTitle>
            <List
              size="large"
              dataSource={places}
              renderItem={(place, index) => {
                const [placeName, ...placeAddress] = place.address.split(",");
                return (
                  <PubListItem
                    key={`${place.coordinates.lat}-${place.coordinates.lng}`}
                  >
                    <PubCrawlTitle>{index + 1}</PubCrawlTitle>
                    <PubInfo>
                      <PubTitle>{placeName}</PubTitle>
                      <PubAddress>{placeAddress.join(", ")}</PubAddress>
                    </PubInfo>
                    <Route exact path="/">
                      <Button
                        type="link"
                        icon={<CloseOutlined />}
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
      <Route exact path="/">
        <Button type="primary" size="large" onClick={generateLink}>
          Get Link
        </Button>
      </Route>
      <Route exact path="/:id">
        <Button type="primary" size="large" onClick={generateLink} href="/">
          New pub crawl
        </Button>
      </Route>
    </Container>
  );
};

export default Panel;
