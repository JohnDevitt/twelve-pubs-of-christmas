import React, { useState, useEffect } from "react";
import SnowStorm from "react-snowstorm";
import { useHistory } from "react-router-dom";
import "antd/dist/antd.css";
import SetupForm from "./SetupForm";
import { Layout, notification } from "antd";
import Panel from "./Panel";
import Map from "./Map";

const App = () => {
  const [formData, setFormData] = useState(null);
  const [places, setPlaces] = useState([]);
  const [loading, setLoading] = useState(true);
  const history = useHistory();

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

  return (
    <>
      <SetupForm visible={!formData} setFormData={setFormData} />
      <Layout style={{ height: "100%" }}>
        <Layout.Sider width="30%">
          <Panel
            formData={formData}
            addPlaceToList={addPlaceToList}
            removePlaceFromList={removePlaceFromList}
            places={places}
            generateLink={generateLink}
          />
        </Layout.Sider>
        <Layout.Content>
          <SnowStorm flakesMax={264} />
          <Map places={places} />
        </Layout.Content>
      </Layout>
    </>
  );
};

export default App;
