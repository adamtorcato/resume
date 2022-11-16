import React from 'react'

const Introduction: React.FC<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>> = (props) => {
  const { ...restProps } = props
  return (
    <div {...restProps}>
      <h1 className="mb-5 text-3xl">Introduction</h1>
      <p className="mb-5 text-lg text-gray-700">Senior Full Stack Application Developer</p>
      <p className="mb-5">
        My name is Richard Torcato. For over 30 years I have been working with some of Canada&apos;s largest corporate institutions and leading edge marketing companies building internet and
        interactive applications.
      </p>
      <p className="mb-5">
        I&apos;m a freelance fullstack developer that has a very strong in depth knowledge of Javascript, Node.js, React.js Redux, Typescript, JQuery, Angular, PHP, Laravel, CSS, Bootstrap MySQL,
        MongoDB and Docker.
      </p>
      <p className="mb-5">
        I&apos;ve worked with many teams, but I am also able to work independently and can take a project from concept to production. I&apos;m interested in working with exciting companies,
        challenging contracts and career opportunities.
      </p>
    </div>
  )
}

export default Introduction
