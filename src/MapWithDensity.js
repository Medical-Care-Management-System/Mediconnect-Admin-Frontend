import React, { useRef } from "react";
import { MapContainer, TileLayer, GeoJSON } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { toPng } from "html-to-image";

const sriLankaGeoJson = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      properties: { name: "Colombo", density: 3000 },
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [79.853, 6.934],
            [79.863, 6.934],
            [79.863, 6.944],
            [79.853, 6.944],
            [79.853, 6.934],
          ],
        ],
      },
    },
    // You can add more GeoJSON features for other regions here
  ],
};

const getColor = (density) => {
  return density > 2500
    ? "#800026" // Dark red for density > 2500
    : density > 2000
    ? "#BD0026" // Red for density > 2000
    : density > 1500
    ? "#E31A1C" // Lighter red for density > 1500
    : "#FFEDA0"; // Very light color for lower densities
};

const MapWithDensity = () => {
  const mapRef = useRef();

  const onEachFeature = (feature, layer) => {
    const { density } = feature.properties;
    layer.setStyle({
      fillColor: getColor(density),
      weight: 2,
      opacity: 1,
      color: "black", // Border color for better visibility
      dashArray: "3",
      fillOpacity: 0.7,
    });
    layer.bindPopup(`${feature.properties.name}: ${density} people/km²`);
  };

  const downloadMap = () => {
    if (mapRef.current) {
      toPng(mapRef.current)
        .then((dataUrl) => {
          const link = document.createElement("a");
          link.download = "srilanka-population-density.png";
          link.href = dataUrl;
          link.click();
        })
        .catch((err) => {
          console.error("Could not generate map image", err);
        });
    }
  };

  return (
    <div className="flex flex-col items-center">
      <div ref={mapRef} className="w-full h-96 mb-4">
        <MapContainer center={[7.8731, 80.7718]} zoom={7} scrollWheelZoom={false} className="w-full h-full">
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <GeoJSON data={sriLankaGeoJson} onEachFeature={onEachFeature} />
        </MapContainer>
      </div>
      <button
        onClick={downloadMap}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition duration-200"
      >
        Download Map
      </button>
    </div>
  );
};

export default MapWithDensity;
