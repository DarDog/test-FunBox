import React from 'react';
import { Map } from 'react-yandex-maps';

const MapComponent = () => {

  return (
    <article className="container map__container">
      <Map className={"map"} defaultState={ { center: [55.75, 37.57], zoom: 9 } }/>
    </article>
  );
}

export default MapComponent
