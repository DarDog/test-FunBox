import React from 'react';
import PointInput from "./PointInput";
import Points from "./Points";

const Interface = (props) => {
  return (
    <section className={ `interface ${props.popupIsOpen && 'interface_visibility_visible' }` }>
      <PointInput
        onAdd={ props.onAddPoint }
        coords={ props.coords }
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
