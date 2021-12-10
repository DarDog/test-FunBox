import React from 'react';
import Point from "./Point";

const Points = ({ points, ...props }) => {
  return (
    <article className="container">
      <ul className="list list__points">
        {
          points.map(point => {
            return <Point
              key={ point._id }
              point={ point }
              onDelete={ props.onDelete }
            />
          })
        }
      </ul>
    </article>
  );
}

export default Points;
