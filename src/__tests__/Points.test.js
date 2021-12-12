import React from 'react'
import { render, screen } from "@testing-library/react";
import Points from '../components/interface/Points';
import '@testing-library/jest-dom'

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
]

describe('Points component', () => {
  it('Компонент Points создает список точек', () => {
    render(<Points points={ points }/>)
    expect(screen.getByRole('list')).toBeInTheDocument();
  });
  it('Компонент Points не ломается без данных', () => {
    render(<Points/>)
    expect(screen.queryByRole('list')).toBeNull();
  });
  it('snapshot компонента Points', () => {
    const list = render(<Points points={points}/>)
    expect(list).toMatchSnapshot();
  });
});
