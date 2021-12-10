import React from 'react';

const Point = ({ point }) => {
  return (
    <li className="list__item point">{point.name}<button className={"point__delete-button"} /></li>
  );
}

export default Point
