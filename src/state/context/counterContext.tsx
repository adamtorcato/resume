import React from 'react'

type State = { count: number }

interface IReactContext<i> {
  dispatch: ({ type }: { type: string }) => void
  state: i
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type ContextActionType = { type: string; payload: any }

const initialState: State = {
  count: 101,
}

const CounterContext = React.createContext({} as IReactContext<State>)

export enum ActionTypes {
  increment = 'increment',
  decrement = 'decrement',
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type ReducerType<s> = (state: s, action: any) => any

const reducer = (state: State, action: ContextActionType): State => {
  switch (action.type) {
    case ActionTypes.increment:
      return { ...state, count: state.count + 1 }
    case ActionTypes.decrement:
      return { ...state, count: state.count - 1 }
    default:
      return state
  }
}

interface IProps {
  children: React.ReactElement
}
const CounterProvider = ({ children }: IProps): React.ReactElement => {
  const [state, dispatch] = React.useReducer<ReducerType<State>>(reducer, initialState)
  const value = React.useMemo(() => ({ state, dispatch }), [state, dispatch])
  return <CounterContext.Provider value={value}>{children}</CounterContext.Provider>
}
export { CounterContext, CounterProvider }
