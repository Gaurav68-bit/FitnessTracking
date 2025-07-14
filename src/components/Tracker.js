// src/components/Tracker.js
import React from 'react';
import './styles/Tracker.css';
import useGeolocation from './useGeolocation';
import { GoogleMap, Marker, useLoadScript } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '300px',
  margin: '20px 0'
};

const center = {
  lat: 0,
  lng: 0,
};

export default function Tracker() {
  const { position, error } = useGeolocation();
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY, 
  });

  return (
    <div className="tracker">
      <h2>🏃 Live Tracker</h2>
      {error && <p style={{ color: 'white' }}>Error: {error.message}</p>}

      {isLoaded ? (
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={
            position
              ? {
                  lat: position.coords.latitude,
                  lng: position.coords.longitude,
                }
              : center
          }
          zoom={15}
        >
          {position && (
            <Marker
              position={{
                lat: position.coords.latitude,
                lng: position.coords.longitude,
              }}
            />
          )}
        </GoogleMap>
      ) : (
        <div>🗺️ Loading Map...</div>
      )}

      {position && (
        <p>
          📍 Lat: {position.coords.latitude.toFixed(5)} | Long:{' '}
          {position.coords.longitude.toFixed(5)}
        </p>
      )}
    </div>
  );
}
