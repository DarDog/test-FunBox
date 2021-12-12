import React from 'react'
import { render } from "@testing-library/react";
import MyMap from '../components/MyMap';
import '@testing-library/jest-dom'
import { YMaps } from "react-yandex-maps";

const points = [
  {
    _id: 0,
    order: 0,
    coords: [0, 0],
    name: 'point0',
  },
  {
    _id: 1,
    order: 1,
    coords: [1, 1],
    name: 'point1',
  },
  {
    _id: 2,
    order: 2,
    coords: [2, 2],
    name: 'point2',
  },
  {
    _id: 3,
    order: 3,
    coords: [3, 3],
    name: 'point3',
  },
  {
    _id: 4,
    order: 4,
    coords: [4, 4],
    name: 'point4',
  },
  {
    _id: 5,
    order: 5,
    coords: [5, 5],
    name: 'point5',
  }
];

describe('Компонент Map', () => {
  it('Snapshot', () => {
    const component = render(
      <YMaps
        query={ {
          ns: 'use-load-option',
          load: 'Map,Placemark,control.ZoomControl,geoObject.addon.balloon'
        } }
      >
        <MyMap points={ points }/>
      </YMaps>
    )

    expect(component).toMatchSnapshot();
  });
})

