import React, {useState} from 'react';
import Point from "./Point";

const Points = ({ points, ...props }) => {
  const [draggablePoint, setDraggablePoint] = useState({});

  const handleDragStart = (evt, point) => {
        setDraggablePoint(point)
  }

  const handleDragEnd = (evt) => {
    evt.target.classList.remove('list__item_hovered_true')
  }

  const handleOverDrag = (evt) => {
    evt.preventDefault();
    evt.target.classList.add('list__item_hovered_true')
  }

  const handleDrop = (evt, point) => {
    evt.preventDefault();
    props.onOrderChange(points.map(p => {
      if (p._id === point._id) {
        return {...p, order: draggablePoint.order}
      }
      if (p._id === draggablePoint._id) {
        return {...p, order: point.order}
      }
      return p
    }))
    evt.target.classList.remove('list__item_hovered_true')
  }

  const sortPoints = (a, b) => {
    return a.order - b.order
  }

  return (
    <article className="container">
      <ul className="list list__points">
        {
          points.sort(sortPoints).map(point => {
            return <Point
              key={ point._id }
              point={ point }
              onDelete={ props.onDelete }
              start={ handleDragStart }
              end={ handleDragEnd }
              over={ handleOverDrag }
              drop={ handleDrop }
            />
          })
        }
      </ul>
    </article>
  );
}

export default Points;
