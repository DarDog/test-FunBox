import React from 'react';

const Point = ({ point, ...props }) => {
  const handleClick = () => {
    props.onDelete(point._id)
  }

  return (
    <li className="list__item point">{point.name}
    <button className={"point__delete-button"} onClick={handleClick} />
    </li>
  );
}

export default Point
