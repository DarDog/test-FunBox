import React from 'react';
import PointInput from "./PointInput";
import Points from "./Points";

const Interface = (props) => {
  return (
    <section className={ 'interface' }>
      <PointInput
        onAdd={ props.onAddPoint }
      />
      <Points
        points={ props.points }
        onDelete={ props.onDeletePoint }
        onOrderChange={ props.onChangePoints }
      />
    </section>
  );
}

export default Interface;
