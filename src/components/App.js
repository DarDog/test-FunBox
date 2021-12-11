import React, { useState } from 'react';
import Interface from "./interface/Interface";
import MyMap from "./Map";
import { YMaps } from "react-yandex-maps";

const App = () => {
  const [points, setPoints] = useState([]);
  const [coords, setCoords] = useState([55.76, 37.64])

  const handleAddNewPoint = newPoint => {
    setPoints([...points, newPoint])
  }

  const handleDeletePoint = id => {
    setPoints(state =>
      state.filter(point =>
        point._id === id ? point.remove : point))
  }

  const handleUpdatePointsCoords = (newPoint) => {
    setPoints((state) => state.map((p) => p._id === newPoint._id ? newPoint : p));
  }

  return (
    <YMaps
      query={ {
        ns: 'use-load-option',
        load: 'Map,Placemark,control.ZoomControl,geoObject.addon.balloon'
      } }
    >
      <div className={ 'root' }>
        <main className={ 'page' }>
          <Interface
            points={ points }
            onAddPoint={ handleAddNewPoint }
            onDeletePoint={ handleDeletePoint }
            onChangePoints={ setPoints }
            coords={ coords }
          />
          <MyMap
            points={ points }
            coords={ coords }
            setCoords={ setCoords }
            onCoordsChange={ handleUpdatePointsCoords }
          />
        </main>
      </div>
    </YMaps>
  );
}

export default App;
