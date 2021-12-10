import React, { useState } from 'react';
import Interface from "./interface/Interface";
import Map from "./Map";

const App = () => {
  const [points, setPoints] = useState([]);

  const handleAddNewPoint = newPoint => {
    setPoints([...points, newPoint])
  }

  const handleDeletePoint = id => {
    setPoints(state =>
      state.filter(point =>
        point._id === id ? point.remove : point))
  }

  return (
      <div className={ 'root' }>
        <main className={ 'page' }>
          <Interface
            points={ points }
            onAddPoint={ handleAddNewPoint }
            onDeletePoint={ handleDeletePoint }
            onChangePoints={ setPoints }
          />
          <Map
            points={ points }
          />
        </main>
      </div>
  );
}

export default App;
