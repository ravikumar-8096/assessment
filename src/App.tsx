import React, { useState, useEffect } from 'react';
import './App.css';

export default function App() {

  const [value, setValue] = useState<number | undefined | any>();
  const [value2, setHeight] = useState<number>();
  const [value3, setWidth] = useState<number>();

  const [item1, setItem1] = useState<Array<number>>([]);
  const [area, setarea] = useState<number>();


  const handleOnchage = (e: any) => {
    setValue(e.target.value);
  };

  const handleOnchangeWidth = (e: any) => {
    setHeight(e.target.value);
  };

  const handleOnchageHeight = (e: any) => {
    setWidth(e.target.value);
  };

  let items: any;
  let arr: Array<number> = [];

  useEffect(() => {
    let i = 0;
    while (i < value) {
      i++;
      let val: any = i + ', '
      arr.push(val);
      setItem1(arr);
    }

    if (value2 && value3) {
      setarea(value2 * value3);
    }
  }, [value, value3]);

  return (
    <div className='container'>
      <h3>Enter number to print sequence</h3>
      <input type='number' data-testid="numberToprint" onChange={handleOnchage} value={value} aria-label="number-input" />
      <br />
      <span >{'Numbers :'}</span>
      {value && item1.map((item: any) => (
        <span data-testid="numbersVal">{item}</span>
      ))}
      <br />
      <form>
        <h3>Enter height and width</h3>
        <span>{'Height :'}</span> <input type='number' data-testid="height" onChange={handleOnchangeWidth} aria-label="height-input"/>
        <span>{'Width :'}</span> <input type='number' data-testid="width" onChange={handleOnchageHeight} aria-label="width-input"/>
      </form>
      <br />
      <span>{'Area :'}</span>
      <span data-testid="area">{area}</span>
    </div>
  );
}
