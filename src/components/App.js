import React from 'react';
import Interface from "./interface/Interface";
import MapComponent from "./Map";
import { YMaps } from "react-yandex-maps";

const App = () => {
  return (
    <YMaps
      query={{
        ns: 'use-load-option',
        load:
          'Map,Placemark,control.ZoomControl,geoObject.addon.balloon',
      }}
    >
      <div className={ 'root' }>
        <main className={ 'page' }>
          <Interface/>
          <MapComponent/>
        </main>
      </div>
    </YMaps>
  );
}

export default App;
