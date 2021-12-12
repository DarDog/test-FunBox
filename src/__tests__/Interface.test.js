import React from 'react'
import { render, screen } from "@testing-library/react";
import Interface from '../components/interface/Interface';
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
];
const coords = [0, 0]
const popupIsOpen = false

const onAddPoint = jest.fn()
const onDeletePoint = jest.fn()
const onChangePoints = jest.fn()

describe('Компонент Interface', () => {
  it('Рендерится', () => {
    render(<Interface
      points={ points }
      onAddPoint={ onAddPoint }
      onDeletePoint={ onDeletePoint }
      onChangePoints={ onChangePoints }
      coords={ coords }
      popupIsOpen={ popupIsOpen }
    />);

    expect(screen.getByRole('list')).toBeInTheDocument();
    expect(screen.getByRole('form')).toBeInTheDocument();
    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });
  it('Не падает без данных', () => {
    render(<Interface />)
    expect(screen.queryByRole('list')).toBeNull();
    expect(screen.getByRole('form')).toBeInTheDocument();
    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });
  it('snapshot', () => {
    const component =  render(<Interface
      points={ points }
      onAddPoint={ onAddPoint }
      onDeletePoint={ onDeletePoint }
      onChangePoints={ onChangePoints }
      coords={ coords }
      popupIsOpen={ popupIsOpen }
    />);

    expect(component).toMatchSnapshot();
  })
})
