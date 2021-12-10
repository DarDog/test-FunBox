import React, { useState } from 'react';
import PointInput from "./PointInput";
import Points from "./Points";

const Interface = () => {
  const [points, setPoints] = useState([]);

  const handleAddNewPoint = newPoint => {
    setPoints([...points, newPoint])
  }

  return (
    <section className={'interface'}>
      <PointInput
        addNewPoint={handleAddNewPoint}
        pointsLength={points.length}
      />
      <Points points={points} />
    </section>
  );
}

export default Interface;
