import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import type { latLng } from "../type";
import React from "react";

function ChangeView({ center }: { center: [number, number] }) {
  const map = useMap();
  React.useEffect(() => {
    map.setView(center);
  }, [map, center]);
  return null;
}

const customIcon = L.icon({
  iconUrl: "/icon-location.svg",
  iconSize: [30, 40],
  iconAnchor: [20, 50],
  popupAnchor: [0, -45],
});

export default function Map({ lat, lng }: latLng) {
  const centerDefault: [number, number] = [51.505, -0.09];
  const center: [number, number] = lat && lng ? [lat, lng] : centerDefault;
  return (
    <MapContainer
      center={center}
      zoom={13}
      style={{ height: "65vh", width: "100%" }}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <ChangeView center={center} />
      {lat && lng && (
        <Marker position={center} icon={customIcon}>
          <Popup>
            {" "}
            IP Location: <br /> {lat}, {lng}{" "}
          </Popup>
        </Marker>
      )}
    </MapContainer>
  );
}
