import { deviceDetect, isIE } from 'react-device-detect'

import React from 'react'

interface IProps {
  ie: boolean
  showInfo?: boolean
  debug?: boolean
  children: React.ReactElement
}

const BrowserCheck = ({ showInfo = false, ie, children, debug }: IProps): React.ReactElement | null => {
  let showIE = true
  if (ie && !debug) {
    showIE = isIE
  }
  if (showIE) {
    return (
      <>
        {children}
        {showInfo && <pre>{JSON.stringify(deviceDetect(undefined), null, ' ')}</pre>}
      </>
    )
  } else {
    return null
  }
}

export default BrowserCheck
