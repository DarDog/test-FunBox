import React from 'react'
import { render, screen } from "@testing-library/react";
import App from '../components/App';
import '@testing-library/jest-dom'

describe('Компонент App', () => {
  it('Рендерится', () => {
    render(<App />);

    expect(screen.getByRole('list')).toBeInTheDocument();
    expect(screen.getByRole('form')).toBeInTheDocument();
    expect(screen.getByRole('textbox')).toBeInTheDocument();
    expect(screen.getByRole('main')).toBeInTheDocument()
  })
  it('snapshot', () => {
    const component = render(<App />);

    expect(component).toMatchSnapshot();
  });
})
