import { ActionTypes, CounterContext } from 'state/context/counterContext'
import React, { ReactElement, useContext } from 'react'

const Counter = (): ReactElement => {
  const { state, dispatch } = useContext(CounterContext)
  const handleAdd = (): void => {
    dispatch({ type: ActionTypes.increment })
  }
  const handleSubtract = (): void => {
    dispatch({ type: ActionTypes.decrement })
  }
  return (
    <>
      <div>Counter {state.count}</div>
      <button onClick={handleAdd}>+</button>
      <button onClick={handleSubtract}>-</button>
    </>
  )
}

export default Counter
