import React from 'react'

const Interests: React.FC<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>> = (props) => {
  const { ...restProps } = props
  return (
    <div {...restProps}>
      <h1 className="mb-1 text-3xl">Interests</h1>
      {/*<p className="mb-5 text-gray-700 font-size-lg">Senior Full Stack Application Developer</p>*/}
      <p>Swimming, Travelling, Investing, Photography, Soccer, Volleyball, Fishing, Scuba diving, Boating</p>
    </div>
  )
}

export default Interests
