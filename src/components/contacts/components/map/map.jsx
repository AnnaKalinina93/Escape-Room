import React, {useRef, useEffect} from 'react';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import useMap from '../../../../hooks/use-map';
import { cityLocation, URL_MARKER } from 'const';

const customIcon = leaflet.icon({
  iconUrl: URL_MARKER,
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});


function Map() {
  const mapRef = useRef(null);
  const map = useMap(mapRef, cityLocation);

  useEffect(() => {
    if (map) {
        leaflet
          .marker({
            lat: cityLocation.lat,
            lng: cityLocation.lng,
          }, {
            icon: customIcon,
          })
          .addTo(map);
      }
    }, [map]);

  return (
    <div
      ref={mapRef}
    >
    </div>
  );
}

export default Map;
