import React from 'react';
import Interface from "./interface/Interface";
import MapComponent from "./Map";
import { YMaps } from "react-yandex-maps";

const App = () => {
  return (
    <YMaps>
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
