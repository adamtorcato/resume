import DateBadge from '@app/components/badges/dateBadge'
import React from 'react'
import ResumeRow from './ResumeRow'

const Education: React.FC<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>> = (props) => {
  const { ...restProps } = props
  return (
    <div {...restProps}>
      <h1 className="mb-5 text-3xl">Education</h1>
      <div className="mb-3">
        <ResumeRow>
          <span className="font-bold">Alias Animator 5.0 (night courses)</span>
          <DateBadge>Oct. 1, 1995</DateBadge>
        </ResumeRow>
        <p className="mt-2 ml-1">Information Technology and Design Center</p>
      </div>
      <div className="mb-3">
        <ResumeRow>
          <span className="text-base font-bold">Photoshop 3.0, Director and Lingo (night courses)</span>
          <DateBadge>Mar. 12, 1995</DateBadge>
        </ResumeRow>
        <p className="mt-2 ml-1">Digital Media Studios</p>
      </div>
      <div className="mb-3">
        <ResumeRow>
          <span className="text-base font-bold">Creative Photography Diploma</span>
          <DateBadge>May 1, 1994</DateBadge>
        </ResumeRow>
        <p className="mt-2 ml-1">Humber College</p>
      </div>
      <div className="mb-3">
        <ResumeRow>
          <span className="text-base font-bold">High School (O.S.S.D)</span>
          <DateBadge>1989 - 1992</DateBadge>
        </ResumeRow>
        <p className="mt-2 ml-1">Sacred Heart C.H.S</p>
      </div>
    </div>
  )
}

export default Education
