import React from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import Srilanka from '@react-map/srilanka';

const SriLankaMap = () => {
  return (
    <MapContainer center={[7.8731, 80.7718]} zoom={7} style={{ height: "100vh", width: "100%" }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors"
      />
      <Srilanka />
    </MapContainer>
  );
};

export default SriLankaMap;
