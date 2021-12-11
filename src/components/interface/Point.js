import React from 'react';

const Point = ({ point, ...props }) => {
  const handleClick = () => {
    props.onDelete(point._id)
  }

  return (
    <li
      className="list__item point"
      draggable={true}
      onDragStart={evt => props.start(evt, point)}
      onDragLeave={evt => props.end(evt)}
      onDragEnd={evt => props.end(evt)}
      onDragOver={evt => props.over(evt)}
      onDrop={evt => props.drop(evt, point)}
    >{point.name}
    <button className={"point__delete-button"} onClick={handleClick} />
    </li>
  );
}

export default Point
