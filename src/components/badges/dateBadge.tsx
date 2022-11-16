import React, { ReactChildren, ReactElement } from 'react'

interface IProps {
  children: string | ReactChildren
}

const DateBadge = ({ children }: IProps): ReactElement => {
  return (
    <span className="px-2 py-1 text-sm bg-white rounded-lg">
      <>{children}</>
    </span>
  )
}

export default DateBadge
