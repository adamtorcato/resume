import { IWithChildren } from '@app/ts/react'
import React from 'react'

const ResumeRow: React.FC<IWithChildren> = ({ children }) => {
  return <div className="flex items-center justify-between px-2 py-1 bg-gray-100 rounded-xl">{children}</div>
}

export default ResumeRow
