import React, {useRef, useEffect} from 'react';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import useMap from '../../../../hooks/use-map';
import { cityLocation, URL_MARKER } from 'const';

const ICON_WIDTH = 46;
const ICON_HEIGHT = 60;

const customIcon = leaflet.icon({
  iconUrl: URL_MARKER,
  iconSize: [ICON_WIDTH, ICON_HEIGHT],
  iconAnchor: [ICON_WIDTH/2, ICON_HEIGHT],
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
    }, [map, cityLocation]);

  return (
    <div
    style={{
      width: 649,
      height: 336}}
      ref={mapRef}
    >
    </div>
  );
}

export default Map;
