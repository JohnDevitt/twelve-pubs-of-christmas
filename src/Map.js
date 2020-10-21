import React from "react";
import { Map, Polyline, Marker } from "google-maps-react";
import "antd/dist/antd.css";

const MapContainer = ({ places }) => (
  <Map
    google={window.google}
    initialCenter={{
      lat: 53.35014,
      lng: -6.266155,
    }}
    zoom={14}
  >
    {places.map((place) => (
      <Marker position={place.coordinates} />
    ))}
    <Polyline
      path={places.map((place) => place.coordinates)}
      strokeColor="#0000FF"
      strokeOpacity={0.8}
      strokeWeight={2}
    />
  </Map>
);

export default MapContainer;
