import React from 'react'
import appConfig from '@app/config'

export const isBrowser = typeof window !== `undefined`

export const sleep = (ms: number): Promise<unknown> => {
  const promise = new Promise((resolve) => setTimeout(resolve, ms))
  return promise
}
export const asyncPrint = async (): Promise<void> => {
  await sleep(10000)
  window.print()
}
//import { asyncPrint } from "utils"

export const handlePrint = async (e: React.MouseEvent): Promise<void> => {
  e.preventDefault()
  window.print()
  // await asyncPrint()
}

export const createContextAction = <T>(type: string, initialPayload: T): unknown => ({
  type,
  action: (payload: T = initialPayload) => ({ type, payload }),
})

export const classNames = (...classes: string[]): string => {
  return classes.filter(Boolean).join(' ')
}

export const withAppPath = (item: string): string => {
  return appConfig.BASEPATH + item
}
