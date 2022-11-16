import 'twin.macro'

import React, { ReactElement } from 'react'

import { classNames } from '@app/utils'
import { css } from '@emotion/react'

const BurgerBtnStyle = css`
  border-top: 2px solid white;
  height: 25px;
  width: 30px;
  color: white;
  box-sizing: border-box;
  position: relative;
  cursor: pointer;
  transition: all 0.3s ease-in;
  outline: none;
  &:before {
    content: '';
    display: block;
    position: absolute;
    height: 2px;
    width: 100%;
    left: 0;
    background: white;
    top: 10px;
    transition: all 0.3s ease-in;
  }
  &:after {
    content: '';
    display: block;
    position: absolute;
    height: 2px;
    width: 100%;
    left: 0;
    background: white;
    bottom: 0;
    transition: all 0.3s ease-in;
  }
  &.active {
    border-color: transparent;
    &:before {
      transform: rotate(45deg);
      width: 33px;
      left: -2px;
    }
    &:after {
      transform: rotate(135deg);
      bottom: 11px;
      width: 33px;
      left: -2px;
    }
  }
`

interface IProps {
  isActive: boolean
  handleAction: (e: React.MouseEvent | React.KeyboardEvent) => void
}
const BurgerBtn = ({ handleAction, isActive = false }: IProps): ReactElement => {
  return (
    <button tabIndex={-1} css={BurgerBtnStyle} className={classNames(isActive && 'active')} onClick={handleAction} onKeyDown={handleAction}>
      &nbsp;
    </button>
  )
}

export default BurgerBtn
