import React from 'react';
import ReactDOM from 'react-dom/client';
import { MapsApp } from './MapsApp.tsx';
import mapboxgl from 'mapbox-gl';
 
mapboxgl.accessToken = 'pk.eyJ1IjoiZmFjYWxkZXZlbG9wbWVudCIsImEiOiJjbHFiM3EzeTAxb3ZkMmtzOTk4ajJiOXpoIn0.KmrivGrkERQO81Gbmd2y3w';

mapboxgl.accessToken = 'pk.eyJ1IjoiZmFjYWxkZXZlbG9wbWVudCIsImEiOiJjbHFiM3EzeTAxb3ZkMmtzOTk4ajJiOXpoIn0.KmrivGrkERQO81Gbmd2y3w';
if (!navigator.geolocation) {
  alert('Tu navegador no soporta geolocalización');
  throw new Error('Tu navegador no soporta geolocalización');
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <MapsApp />
  </React.StrictMode>,
)
