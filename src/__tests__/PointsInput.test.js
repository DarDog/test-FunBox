import React from 'react'
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import PointInput from '../components/interface/PointInput';
import '@testing-library/jest-dom'

const coords = [0, 0];
const onAdd = jest.fn();

describe('PointsInput component', () => {
  it('Компонент PointsInput рендерется', () => {
    render(<PointInput coords={coords} onAdd={onAdd} />)
    expect(screen.getByRole('textbox')).toBeInTheDocument();
    expect(screen.getByRole('form')).toBeInTheDocument();
  });
  it('Компонент PointsInput рендерется без coords', () => {
    render(<PointInput onAdd={onAdd} />)
    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });
  it('В компонент PointsInput обрабатывается функция onAdd', function () {
    render(<PointInput coords={coords} onAdd={onAdd} />);

    userEvent.type(screen.getByRole('textbox'), 'asd{enter}');

    expect(onAdd).toHaveBeenCalled();
  });
  it('Snapshot компонента PointsInput', () => {
    const component = render(<PointInput coords={coords} onAdd={onAdd} />)
    expect(component).toMatchSnapshot();
  })
})
