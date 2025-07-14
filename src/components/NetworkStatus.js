// src/components/NetworkStatus.js
import React, { useEffect, useState } from 'react';
import './styles/NetworkStatus.css';

export default function NetworkStatus() {
  const [type, setType] = useState(navigator.connection?.effectiveType || 'unknown');

  useEffect(() => {
    const connection = navigator.connection;

    if (connection) {
      const update = () => setType(connection.effectiveType);
      connection.addEventListener('change', update);
      return () => connection.removeEventListener('change', update);
    }
  }, []);

  return (
    <div className="network-status">
      <strong>📶 Network:</strong> {type}
      {['2g', 'slow-2g'].includes(type) && (
        <span className="warning">⚠️ Slow connection. Live tracking may lag.</span>
      )}
    </div>
  );
}
