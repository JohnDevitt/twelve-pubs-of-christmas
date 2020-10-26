import React, { useState, useEffect } from "react";
import SnowStorm from "react-snowstorm";
import { useHistory } from "react-router-dom";
import "antd/dist/antd.css";
import "./overrides.less";
import SetupForm from "./SetupForm";
import { Grid, Row, Col, notification } from "antd";
import Panel from "./Panel";
import Map from "./Map";

const { useBreakpoint } = Grid;

const App = () => {
  const [formData, setFormData] = useState(null);
  const [places, setPlaces] = useState([]);
  const [loading, setLoading] = useState(true);
  const history = useHistory();
  const screens = useBreakpoint();

  useEffect(() => {
    if (history.location.pathname !== "/") {
      const encodedData = history.location.pathname.substring(1);
      const { formData, places } = JSON.parse(atob(encodedData));
      setFormData(formData);
      setPlaces(places);
      console.log(formData, places);
    }
    setLoading(false);
  }, [history.location.pathname]);

  const addPlaceToList = (place) => {
    setPlaces([...places, place]);
  };

  const removePlaceFromList = (index) => {
    const placeListClone = [...places];
    placeListClone.splice(index, 1);
    setPlaces(placeListClone);
  };

  const generateLink = () => {
    const urlString = btoa(JSON.stringify({ formData, places }));
    history.push(`${urlString}`);
    notification.open({
      message: "Link Created!",
      description:
        "The link in the address bar is now sharable! Copy it and send it around to share your pub crawl",
    });
  };

  if (loading) return null;

  return screens.md ? (
    <>
      <SetupForm visible={!formData} setFormData={setFormData} />
      <Row style={{ height: "100%" }}>
        <Col span={8}>
          <Panel
            formData={formData}
            addPlaceToList={addPlaceToList}
            removePlaceFromList={removePlaceFromList}
            places={places}
            generateLink={generateLink}
          />
        </Col>
        <Col span={16}>
          <SnowStorm flakesMax={1024} />
          <Map places={places} />
        </Col>
      </Row>
    </>
  ) : (
    <>
      <SetupForm visible={!formData} setFormData={setFormData} />
      <Row>
        <Col span={24} style={{ padding: 8, height: 350 }}>
          <SnowStorm flakesMax={1024} />
          <Map places={places} />
        </Col>
        <Col span={24}>
          <Panel
            formData={formData}
            addPlaceToList={addPlaceToList}
            removePlaceFromList={removePlaceFromList}
            places={places}
            generateLink={generateLink}
          />
        </Col>
      </Row>
    </>
  );
};

export default App;
