


// "use client";

// import React, { useEffect, useState } from "react";



// type Props = {
//   address: string;
// };

// export default function OpenStreetMap2({ address }: Props) {
//     console.log("address",address)
//   const [coords, setCoords] = useState<{ lat: number; lon: number } | null>(
//     null
//   );
//   const [error, setError] = useState<string | null>(null);
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     if (!address || address.trim().length < 3) return;

//     const fetchCoords = async () => {
//       setLoading(true);
//       try {
//         const res = await fetch(
//           `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(
//             address
//           )}`
//         );
//         const data = await res.json();

//         if (data.length === 0) {
//           setError("Address not found");
//           setCoords(null);
//         } else {
//           setCoords({
//             lat: parseFloat(data[0].lat),
//             lon: parseFloat(data[0].lon),
//           });
//           setError(null);
//         }
//       } catch (err) {
//         setError("Failed to load map");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchCoords();
//   }, [address]);

//   return (
//     <div className="w-full h-80 border rounded overflow-hidden">
//       {loading && <p className="text-gray-500 p-2">Loading map...</p>}
//       {error && <p className="text-red-500 p-2">{error}</p>}
//       {!error && coords && (
//         <iframe
//           title="OpenStreetMap"
//           width="100%"
//           height="100%"
//           style={{ border: 0 }}
//           src={`https://www.openstreetmap.org/export/embed.html?bbox=${
//             coords.lon - 0.01
//           },${coords.lat - 0.01},${coords.lon + 0.01},${coords.lat + 0.01}&layer=mapnik&marker=${
//             coords.lat
//           },${coords.lon}`}
//           allowFullScreen
//         />
//       )}
//     </div>
//   );
// }








































// "use client";

// import React, { useEffect, useState } from "react";
// import { MapContainer, TileLayer, Marker, useMap } from 'react-leaflet'

// type Props = {
//   address: string;
// };

// export default function OpenStreetMap2({ address }: Props) {
//   console.log("address entered", address);
//   const [coords, setCoords] = useState<{ lat: number; lon: number } | null>(null);
//   const [error, setError] = useState<string | null>(null);
//   const [loading, setLoading] = useState(false);
//   const [foundAddress, setFoundAddress] = useState<string>("");

//   useEffect(() => {
//     if (!address || address.trim().length < 3) return;

//     const fetchCoords = async () => {
//       setLoading(true);
//       setError(null);
      
//       try {
//         // Add a small delay to avoid rate limiting
//         await new Promise(resolve => setTimeout(resolve, 500));
        
//         const res = await fetch(
//           `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(
//             address
//           )}&limit=1&addressdetails=1`,
//           {
//             headers: {
//               'User-Agent': 'YourAppName/1.0' // Good practice to set a user agent
//             }
//           }
//         );
        
//         if (!res.ok) {
//           throw new Error('Network response was not ok');
//         }
        
//         const data = await res.json();

//         if (data.length === 0) {
//           setError("Address not found. Please check the address details.");
//           setCoords(null);
//           setFoundAddress("");
//         } else {
//           const result = data[0];
//           setCoords({
//             lat: parseFloat(result.lat),
//             lon: parseFloat(result.lon),
//           });
//           setFoundAddress(result.display_name || address);
//           setError(null);
//         }
//       } catch (err) {
//         console.error("Geocoding error:", err);
//         setError("Failed to load map. Please try again.");
//         setCoords(null);
//         setFoundAddress("");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchCoords();
//   }, [address]);

//   if (loading) {
//     return (
//       <div className="w-full h-80 border rounded overflow-hidden flex items-center justify-center bg-gray-50">
//         <div className="text-center">
//           <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500 mx-auto mb-2"></div>
//           <p className="text-gray-500">Loading map...</p>
//         </div>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="w-full h-80 border rounded overflow-hidden flex items-center justify-center bg-red-50">
//         <div className="text-center p-4">
//           <p className="text-red-500 mb-2">{error}</p>
//           <p className="text-sm text-gray-600">Searched for: {address}</p>
//         </div>
//       </div>
//     );
//   }

//   if (!coords) {
//     return (
//       <div className="w-full h-80 border rounded overflow-hidden flex items-center justify-center bg-gray-50">
//         <p className="text-gray-500">Enter an address to see the map</p>
//       </div>
//     );
//   }

//   return (
    
//     <div className="w-full">
//     <MapContainer
    
    
//     >      <div className="mb-2 p-2 bg-green-50 border border-green-200 rounded">
//         <p className="text-sm text-green-700">
//           <strong>Found:</strong> {foundAddress}
//         </p>
//       </div>
//       <div className="w-full h-80 border rounded overflow-hidden">
//         <iframe
//           title="OpenStreetMap"
//           width="100%"
//           height="100%"
//           style={{ border: 0 }}
//           src={`https://www.openstreetmap.org/export/embed.html?bbox=${
//             coords.lon - 0.01
//           },${coords.lat - 0.01},${coords.lon + 0.01},${coords.lat + 0.01}&layer=mapnik&marker=${
//             coords.lat
//           },${coords.lon}`}
//           allowFullScreen
//         />
//       </div>
//       </MapContainer>

//     </div>
//   );
// }










"use client";

import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

const customIcon = L.icon({
  iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  iconRetinaUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
});

// A helper component to update the map view
function ChangeView({ center, zoom }: { center: [number, number]; zoom: number }) {
  const map = useMap();
  map.setView(center, zoom);
  return null;
}

type Props = {
  address: string;
};

export default function OpenStreetMap2({ address }: Props) {
  console.log("address",address)
  const [coords, setCoords] = useState<{ lat: number; lon: number } | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [foundAddress, setFoundAddress] = useState<string>("");

  useEffect(() => {
    if (!address || address.trim().length < 3) {
      setCoords(null);
      return;
    }

    const fetchCoords = async () => {
      setLoading(true);
      setError(null);
      
      try {
        const res = await fetch(
          `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(address)}&limit=1&addressdetails=1`,
          {
            headers: {
              'User-Agent': 'YourAppName/1.0',
            },
          }
        );
        
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        
        const data = await res.json();

        if (data.length === 0) {
          setError("Address not found. Please check the address details.");
          setCoords(null);
          setFoundAddress("");
        } else {
          const result = data[0];
          setCoords({
            lat: parseFloat(result.lat),
            lon: parseFloat(result.lon),
          });
          setFoundAddress(result.display_name || address);
          setError(null);
        }
      } catch (err) {
        console.error("Geocoding error:", err);
        setError("Failed to load map. Please try again.");
        setCoords(null);
        setFoundAddress("");
      } finally {
        setLoading(false);
      }
    };

    const handler = setTimeout(() => {
      fetchCoords();
    }, 500); // Debounce API call

    return () => clearTimeout(handler);
  }, [address]);

  // Initial map state
  const defaultPosition = [30.3753, 69.3451]; // Default center (e.g., Pakistan)
  const defaultZoom = 6;
  const mapPosition = coords ? [coords.lat, coords.lon] as [number, number] : defaultPosition as [number, number];
  const mapZoom = coords ? 15 : defaultZoom; // Zoom in for specific addresses

  if (!coords) {
    return (
      <div className="w-full h-80 border rounded overflow-hidden flex items-center justify-center bg-gray-50">
        {loading ? (
          <div className="text-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500 mx-auto mb-2"></div>
            <p className="text-gray-500">Loading map...</p>
          </div>
        ) : error ? (
          <div className="text-center p-4">
            <p className="text-red-500 mb-2">{error}</p>
            <p className="text-sm text-gray-600">Searched for: {address}</p>
          </div>
        ) : (
          <p className="text-gray-500">Enter an address to see the map</p>
        )}
      </div>
    );
  }

  return (
    <div className="w-full">
      {foundAddress && (
        <div className="mb-2 p-2 bg-green-50 border border-green-200 rounded">
          <p className="text-sm text-green-700">
            <strong>Found:</strong> {foundAddress}
          </p>
        </div>
      )}
      <div className="w-full h-80 border rounded overflow-hidden">
        <MapContainer
          center={mapPosition}
          zoom={mapZoom}
          scrollWheelZoom={false}
          className="w-full h-full"
        >
          <ChangeView center={mapPosition} zoom={mapZoom} />
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {coords && (
            <Marker position={[coords.lat, coords.lon]} icon={customIcon} />
          )}
        </MapContainer>
      </div>
    </div>
  );
}
