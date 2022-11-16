import React from 'react'
/*import { createContextAction } from 'utils/react'
import { useLocalStorage } from 'react-use'
*/

type State = {
  mobileMenuVisible: boolean
  appOverLayVisible: boolean
  lightBoxVisible: false
  lightBoxPhotoIndex: number
  lightBoxPhotos: string[]
  isDark: boolean
  setIsDark: React.Dispatch<React.SetStateAction<boolean>>
  footerVisible: boolean
  navSubMenuVisible: string | null
}
type ContextActionType<i> = { type: string; payload?: i }

interface IReactContext<i> {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  dispatch: ({ type }: ContextActionType<any>) => void
  state: i
}

const AppContext = React.createContext({} as IReactContext<State>)

export enum ActionTypes {
  mobileMenuVisible = 'mobileMenuVisible',
  mobileMenuVisibleTrue = 'mobileMenuVisibleTrue',
  mobileMenuVisibleFalse = 'mobileMenuVisibleFalse',
  lightBoxVisible = 'lightBoxVisible',
  lightBoxPhotoIndex = 'lightBoxPhotoIndex',
  appOverLayVisible = 'appOverLayVisible',
  footerVisible = 'footerVisible',
  navSubMenuVisible = 'navSubMenuVisible',
}

interface IAction {
  type: string
  payload?: unknown
}
/*
interface ILightBoxVisibleActionPayload {
  visible: boolean
  data?: string[]
}*/

export const navSubMenuVisibleAction = (subMenuID: string | null): IAction => {
  return {
    type: ActionTypes.navSubMenuVisible,
    payload: subMenuID,
  }
}

export const mobileMenuVisibleAction = (visible: boolean): IAction => {
  return {
    type: ActionTypes.mobileMenuVisible,
    payload: visible,
  }
}

export const footerVisibleAction = (visible: boolean): IAction => {
  return {
    type: ActionTypes.footerVisible,
    payload: visible,
  }
}

export const appOverlayVisibleAction = (visible: boolean): IAction => {
  return {
    type: ActionTypes.appOverLayVisible,
    payload: visible,
  }
}

export const lightBoxVisibleAction = (visible: boolean, images: string[] = []): IAction => {
  return {
    type: ActionTypes.lightBoxVisible,
    payload: { visible, data: images },
  }
}

export const lightBoxSetIndexAction = (index = 0): IAction => {
  return {
    type: ActionTypes.lightBoxPhotoIndex,
    payload: { index },
  }
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type ReducerType<s> = (state: s, action: any) => any

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const reducer = (state: State, action: ContextActionType<any>): State => {
  // alert('action' + action.type + ' payload' + action.payload)
  let gallery: string[] = []
  switch (action.type) {
    case ActionTypes.mobileMenuVisible:
      return { ...state, mobileMenuVisible: action.payload, appOverLayVisible: action.payload }
    /*case ActionTypes.mobileMenuVisibleTrue:
      return { ...state, mobileMenuVisible: true, appOverLayVisible: true }
    case ActionTypes.mobileMenuVisibleFalse:
      return { ...state, mobileMenuVisible: false, appOverLayVisible: false }
      */
    case ActionTypes.navSubMenuVisible:
      return { ...state, navSubMenuVisible: action.payload }
    case ActionTypes.appOverLayVisible:
      return { ...state, appOverLayVisible: action.payload }
    case ActionTypes.footerVisible:
      return { ...state, footerVisible: action.payload }
    case ActionTypes.lightBoxVisible:
      if (action.payload.visible) {
        gallery = action.payload.data
      }
      return {
        ...state,
        lightBoxVisible: action.payload.visible,
        lightBoxPhotos: gallery,
        lightBoxPhotoIndex: 0,
      }
    case ActionTypes.lightBoxPhotoIndex:
      return { ...state, lightBoxPhotoIndex: action.payload.index }
    default:
      return state
  }
}

interface IProps {
  children: React.ReactElement
}
const AppProvider = ({ children }: IProps): React.ReactElement => {
  const [isDark, setIsDark] = React.useState(false)
  const initialState: State = {
    mobileMenuVisible: false,
    lightBoxVisible: false,
    lightBoxPhotoIndex: 0,
    lightBoxPhotos: [],
    appOverLayVisible: false,
    isDark,
    setIsDark,
    footerVisible: false,
    navSubMenuVisible: null,
  }
  const [state, dispatch] = React.useReducer<ReducerType<State>>(reducer, initialState)
  const value = React.useMemo(() => ({ state, dispatch }), [state, dispatch])
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}
export { AppContext, AppProvider }
