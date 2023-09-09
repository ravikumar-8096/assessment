import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';


describe("<App />", () => {

  test('render email input', () => {
    render(<App />);

    const inputEl = screen.getByTestId("numberToprint");
    expect(inputEl).toBeInTheDocument();
    expect(inputEl).toHaveAttribute("type", "number");

    const width = screen.getByTestId("width");
    expect(width).toBeInTheDocument();
    expect(width).toHaveAttribute("type", "number");

    const height = screen.getByTestId("height");
    expect(height).toBeInTheDocument();
    expect(height).toHaveAttribute("type", "number");
  });

  it('tests the onChange event for sequence of numbers', () => {
    render(<App />)
    const input = screen.getByLabelText('number-input')
    let sampleNumbers = '1,2,3,4,5';
    const value = 5;
    fireEvent.change(input, {
      target: {
        value
      }
    })
    expect(input).toHaveValue(5) // the state has been updated.
    expect(screen.getAllByTestId("numbersVal")).toHaveLength(5)
  })

  it('tests the onChange event height input of Area', () => {
    render(<App />)
    const input = screen.getByLabelText('height-input')
    const value =4;
    fireEvent.change(input, {
      target: {
        value
      }
    })
    expect(input).toHaveValue(4) // the state has been updated.
  })

  it('tests the onChange event width input of Area', () => {
    render(<App />)
    const input = screen.getByLabelText('width-input')
    const value =4;
    fireEvent.change(input, {
      target: {
        value
      }
    })
    expect(input).toHaveValue(4) // the state has been updated.
  })
})