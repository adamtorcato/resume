import React from 'react'
import { classNames } from '@app/utils'
import styled from '@emotion/styled'
import { zIndex } from '@app/config/appStyles'

const Overlay = styled.div`
  display: none;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  position: fixed;
  transition: opacity 0.3s ease-in;
  background: rgba(5, 10, 20, 0.7);
  opacity: 0;
  z-index: ${zIndex.appOverlay};
  &.active {
    display: block;
    cursor: pointer;
    opacity: 1;
    animation: fade 500ms;
  }
`
interface IProps {
  onClick: (e: React.MouseEvent) => void
  active: boolean
}
const AppOverlay: React.FC<IProps> = ({ onClick, active }) => (
  <Overlay onClick={onClick} className={classNames(`print:hidden, ${active && 'active'}`)}>
    &nbsp;
  </Overlay>
)

export default AppOverlay
