import React, { useState } from 'react';
import PointInput from "./PointInput";
import Points from "./Points";

const Interface = () => {
  const [points, setPoints] = useState([]);

  const handleAddNewPoint = newPoint => {
    setPoints([...points, newPoint])
  }

  const handleDeletePoint = id => {
    setPoints(state =>
      state.filter(point =>
        point._id === id ? point.remove : point))
  }

  console.log(points)

  return (
    <section className={ 'interface' }>
      <PointInput
        addNewPoint={ handleAddNewPoint }
      />
      <Points
        points={ points }
        onDelete={ handleDeletePoint }
      />
    </section>
  );
}

export default Interface;
