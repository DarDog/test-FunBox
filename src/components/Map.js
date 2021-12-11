import React, { useState } from 'react';
import { Map, Placemark, Polyline } from "react-yandex-maps";

const MyMap = ({ coords, ...props }) => {
  const [mapInstanceRef, setMapInstanceRef] = useState(null);

  const getCurrentCoords = () => {
    props.setCoords(mapInstanceRef.getCenter())
  }

  return (
    <Map
      state={ {
        center: coords,
        zoom: 10,
        controls: ['zoomControl']
      } }
      modules={ ['control.ZoomControl',] }
      instanceRef={ map => setMapInstanceRef(map) }
      className={ 'map__container map container' }
      onBoundsChange={ getCurrentCoords }
    >
      {
        props.points.map(point => {
          return (
            <Placemark
              key={ point._id }
              defaultGeometry={ point.coords }
              options={ {
                draggable: true
              } }
              properties={ {
                balloonContent: point.name
              } }
              onDragEnd={
                evt => {
                  point.coords = evt.get('target').geometry.getCoordinates()
                  props.onCoordsChange(point)
                }
              }
            />
          )
        })
      }
      <Polyline
        geometry={
          props.points.map(point => {
            return (
              point.coords
            )
          })
        }
      />
    </Map>
  );
}

export default MyMap
