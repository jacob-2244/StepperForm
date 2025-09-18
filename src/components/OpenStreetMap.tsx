'use client';

import React, { useState,  useEffect } from 'react';
import { MapContainer, TileLayer, Marker, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// 1. Define types for state
interface LocationState {
  loaded: boolean;
  coordinates: {
    lat: number | null;
    lng: number | null;
  };
  error?: boolean;
}

// 2. Define the custom icon
const customIcon = L.icon({
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
});

// 3. Define a custom component to handle map movement and render the marker
function LocationMarker({ location }: { location: LocationState }) {
  const map = useMap();

  useEffect(() => {
    if (location.loaded && !location.error && location.coordinates.lat !== null && location.coordinates.lng !== null) {
      // Fly to the user's location
      map.flyTo([location.coordinates.lat, location.coordinates.lng], 13); // Changed zoom to a more focused level
    }
  }, [location, map]);

  return location.loaded && !location.error && location.coordinates.lat !== null && location.coordinates.lng !== null ? (
    <Marker position={[location.coordinates.lat, location.coordinates.lng]} icon={customIcon} />
  ) : null;
}

const OpenStreetMap: React.FC = () => {
  const [center] = useState<[number, number]>([-4.043477, 39.668205]);
  const [location, setLocation] = useState<LocationState>({
    loaded: false,
    coordinates: { lat: null, lng: null },
  });
  const ZOOM_LEVEL = 9;

  // 4. Removed the unnecessary mapRef as useMap is a better approach for this use case

  useEffect(() => {
    const fetchLocation = () => {
      if (!navigator.geolocation) {
        setLocation((prevState) => ({
          ...prevState,
          loaded: true,
          error: true,
        }));
        return;
      }

      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            loaded: true,
            coordinates: {
              lat: position.coords.latitude,
              lng: position.coords.longitude,
            },
          });
        },
        () => {
          setLocation((prevState) => ({
            ...prevState,
            loaded: true,
            error: true,
          }));
        }
      );
    };

    fetchLocation();
  }, []);

  return (
    <div className='container mx-auto p-4'>
      <h1 className='text-center text-xl mt-5 font-bold'>OpenStreetMap Embedded</h1>
      <div className='mt-4'>
        {location.loaded ? (
          <MapContainer
            center={location.coordinates.lat && location.coordinates.lng ? [location.coordinates.lat, location.coordinates.lng] : center}
            zoom={ZOOM_LEVEL}
            style={{ height: '500px', width: '100%' }}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
            />
            <LocationMarker location={location} />
          </MapContainer>
        ) : (
          <div className='h-[500px] flex items-center justify-center bg-gray-100 text-lg text-gray-600 rounded-lg'>
            Getting your location...
          </div>
        )}
      </div>
    </div>
  );
};

export default OpenStreetMap;



