// src/components/useGeolocation.js
import { useState, useEffect } from 'react';

export default function useGeolocation() {
  const [position, setPosition] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!navigator.geolocation) {
      setError(new Error('Geolocation is not supported.'));
      return;
    }

    const watcher = navigator.geolocation.watchPosition(
      (pos) => setPosition(pos),
      (err) => setError(err),
      { enableHighAccuracy: true, maximumAge: 10000, timeout: 5000 }
    );

    return () => navigator.geolocation.clearWatch(watcher);
  }, []);

  return { position, error };
}
