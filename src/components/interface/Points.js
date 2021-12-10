import React from 'react';
import Point from "./Point";

const Points = () => {
  return (
    <article className="container">
      <ul className="list list__points">
        <Point />
        <Point />
        <Point />
      </ul>
    </article>
  );
}

export default Points;
