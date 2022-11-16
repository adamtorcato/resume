import { ReactElement } from 'react'

export interface IReactChildren {
  children?: ReactElement | ReactElement[] | JSX.Element | JSX.Element[] | null
}

export interface IWithChildren {
  children: IReactChildren
}

export enum ComponentVisibleStates {
  disabled = 'disabled',
  hidden = 'hidden',
  none = 'none',
  visible = 'visible',
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type IDispatch = any
