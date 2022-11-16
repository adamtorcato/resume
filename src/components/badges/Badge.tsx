import { DetailedHTMLProps, FC, HTMLAttributes } from 'react'

import { IWithChildren } from '@app/ts/react'
import { classNames } from '@app/utils'

const Badge: FC<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> & IWithChildren> = (props) => {
  const divProps = props
  // divProps.children = {}
  const divClassName = props.className ?? ''
  return (
    <>
      <div className={classNames('flex justify-center text-blue-900 flex-0 rounded-lg bg-blue-200', divClassName)} {...divProps}>
        {/* <div className="flex-shrink-0">
            <InformationCircleIcon className="w-5 h-5 text-blue-400" aria-hidden="true" />
          </div> */}
        {props.children}
      </div>
    </>
  )
}

export default Badge
