import React, {useRef, useEffect} from 'react';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import useMap from '../../../../hooks/use-map';
import { address, DetailsIcon } from 'const';

const customIcon = leaflet.icon({
  iconUrl: DetailsIcon.Url,
  iconSize: [DetailsIcon.Width, DetailsIcon.Height],
  iconAnchor: [DetailsIcon.Width/2, DetailsIcon.Height],
});


function Map() {
  const mapRef = useRef(null);
  const map = useMap(mapRef, address);

  useEffect(() => {
    if (map) {
        leaflet
          .marker({
            lat: address.lat,
            lng: address.lng,
          }, {
            icon: customIcon,
          })
          .addTo(map);
      }
    }, [map, address]);

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
