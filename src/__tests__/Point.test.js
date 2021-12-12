import React from 'react'
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Point from '../components/interface/Point';
import '@testing-library/jest-dom'

const point = {
  _id: 0,
  order: 0,
  coords: [0, 0],
  name: 'point0',
};

const onDelete = jest.fn();


describe('Компонент Point', () => {
  it('Компонент рендерится', () => {
    render(<Point point={point} onDelete={onDelete} />);

    expect(screen.getByText(/point/)).toBeInTheDocument();
  });
  it('Компонент не падает без данных', () => {
    render(<Point/>);
    expect(screen.queryByRole('button')).toBeNull();
  });
  it('В компоненте срабатывает функция onDelete', () => {
    render(<Point point={point} onDelete={onDelete} />);

    userEvent.click(screen.getByRole('button'));
    expect(onDelete).toBeCalled();
  })
  it('Snapshot компонента', () => {
    const component = render(<Point point={point} onDelete={onDelete} />);
    expect(component).toMatchSnapshot();
  })
})
