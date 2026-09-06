import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from '../features/counterSlice';

const Counter = () => {
  const counter = useSelector((state) => state.counter.value)
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Counter: { counter }</h2>
      <button onClick={()=> dispatch(increment())}>Increament</button>
      <button onClick={()=> dispatch(decrement())}>Increament</button>
    </div>
  )
}

export default Counter