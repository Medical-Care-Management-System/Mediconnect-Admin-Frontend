import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const SimpleMap = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="w-full h-96 mb-4">
        <MapContainer center={[7.8731, 80.7718]} zoom={7} scrollWheelZoom={false} className="w-full h-full">
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
        </MapContainer>
      </div>
    </div>
  );
};

export default SimpleMap;
