import { ButtonHTMLAttributes, DetailedHTMLProps, FC } from 'react'

import { IWithChildren } from '@app/ts/react'
import { classNames } from '@app/utils'

type ButtonProps = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & IWithChildren

const GhostButton: FC<ButtonProps> = (props) => {
  const { children, className, ...restProps } = props
  return (
    <button
      type="button"
      {...restProps}
      className={classNames(
        className,
        'px-2 py-1 text-sm  text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-blue-500'
      )}
    >
      {children}
    </button>
  )
}

export default GhostButton
