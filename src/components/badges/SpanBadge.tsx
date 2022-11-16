import { DetailedHTMLProps, FC, HTMLAttributes } from 'react'

import { IWithChildren } from '@app/ts/react'
import { classNames } from '@app/utils'

const SpanBadge: FC<DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement> & IWithChildren> = (props) => {
  const divProps = props
  // divProps.children = {}
  const spanClassName = props.className ?? ''
  return (
    <span className={classNames('text-blue-900 rounded-lg bg-blue-200', spanClassName)} {...divProps}>
      {/* <div className="flex-shrink-0">
            <InformationCircleIcon className="w-5 h-5 text-blue-400" aria-hidden="true" />
          </div> */}
      {props.children}
    </span>
  )
}

export default SpanBadge
