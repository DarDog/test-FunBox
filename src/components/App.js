import React, { useState } from 'react';
import Interface from "./interface/Interface";
import MyMap from "./MyMap";
import { YMaps } from "react-yandex-maps";

const App = () => {
  const [points, setPoints] = useState([]);
  const [coords, setCoords] = useState([55.76, 37.64]);
  const [popupIsOpen, setPopupIsOpen] = useState(false);

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

  const handlePopupButtonClick = () => {
    setPopupIsOpen(!popupIsOpen)
    console.log('click')
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
            popupIsOpen={ popupIsOpen }
          />
          <MyMap
            points={ points }
            coords={ coords }
            setCoords={ setCoords }
            onCoordsChange={ handleUpdatePointsCoords }
          />
          <div className={ `popup ${popupIsOpen && 'popup_open'}` }/>
          <button onClick={handlePopupButtonClick} className={`button popup__button ${popupIsOpen && 'popup__button_active'}`} type={'button'} />
        </main>
      </div>
    </YMaps>
  );
}

export default App;
