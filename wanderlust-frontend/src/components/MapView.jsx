import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const MapView = () => {
  const places = [
    { name: "Goa", pos: [15.2993, 74.1240] },
    { name: "Delhi", pos: [28.7041, 77.1025] },
    { name: "Kerala", pos: [10.8505, 76.2711] },
  ];

  return (
    <MapContainer center={[20.5937, 78.9629]} zoom={5} className="h-[400px] w-full">
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {places.map((p, i) => (
        <Marker key={i} position={p.pos}>
          <Popup>{p.name}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default MapView;