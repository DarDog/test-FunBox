import React from 'react';
import { Map, Placemark } from 'react-yandex-maps';

const MapComponent = () => {
  return (
    <article className="container map__container">
      <Map
        className={"map"}
        defaultState={{
          center: [55.75, 37.57],
          zoom: 10,
          controls: ['zoomControl'],
        }}
      >
        <Placemark
          defaultGeometry={[55.75, 37.57]}
          properties={{
            balloonContentBody: 'This is balloon loaded by the Yandex.Maps API module system',
          }}
        />
      </Map>
    </article>
  );
}

export default MapComponent
