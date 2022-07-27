import { useState } from 'react'
import './App.css'
import Component from './Component';

function App({ value }) {

  const [count, setCount] = useState(value);

  const add = () => setCount((count) => count + 1);
  const substract = () => setCount((count) => count - 1);
  const reset = () => setCount(value);

  return (
    <>
      <h1>Counter App</h1>
      <h2>{count}</h2>
      <button onClick={add}>+1</button>
      <button onClick={substract}>-1</button>
      <button aria-label='btn-reset' onClick={reset}>Reset</button>
    </>
  )
}

export default App
