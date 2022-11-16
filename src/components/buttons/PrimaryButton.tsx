import { ButtonHTMLAttributes, DetailedHTMLProps, FC } from 'react'

import { IWithChildren } from '@app/ts/react'
import { classNames } from '@app/utils'

type ButtonProps = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & IWithChildren

const PrimaryButton: FC<ButtonProps> = (props) => {
  return (
    <button
      type="button"
      className={classNames(
        props.className,
        'inline-flex items-center justify-center px-4 py-1 text-sm font-medium text-white border border-transparent rounded-md shadow-sm bg-primary hover:bg-primary-hover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-blue-500'
      )}
    >
      {props.children}
    </button>
  )
}

export default PrimaryButton
