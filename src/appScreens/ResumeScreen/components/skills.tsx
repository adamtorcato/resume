import React from 'react'
// import { css } from '@emotion/react'
// const listStyle = css`
//   /* display: block;
//   list-style-type: disc; */
//   margin-block-start: 1em;
//   margin-block-end: 1em;
//   margin-inline-start: 0px;
//   margin-inline-end: 0px;
//   padding-inline-start: 40px;
// `
const Skills: React.FC<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>> = (props) => {
  const { ...restProps } = props
  return (
    <div {...restProps}>
      <h1 className="mb-5 text-3xl">Skills</h1>
      <div className="mb-5">
        <h3 className="mb-5 text-lg text-gray-700">Personal Skills</h3>
        <ul className="mx-5 list-disc list-outside">
          <li className="mb-1">All programs and programming languages are self taught</li>
          <li className="mb-1">Self-starter, rapid learner and capable of working on several projects at once</li>
          <li className="mb-1">Have worked directly for corporate clients including some of Canada&apos;s largest marketing agencies</li>
          <li className="mb-1">Excellent communication, analytical, and problem solving abilities</li>
          <li className="mb-1">Fully equipped home studio</li>
          <li className="mb-1">Established Matrix Digital Solutions in the summer of 1997 </li>
          <li className="mb-1">Created Biz-e a Filemaker application for small business invoicing platform </li>
          <li className="mb-1">Currently learning Swift/SwiftUI and always updating my skills in the latest frameworks and technologies</li>
          <li className="mb-1">Programmed custom content/website management systems</li>
          <li className="mb-1">Programmed custom e-learning applications and a VR golf training application</li>
        </ul>
      </div>
      <div className="mb-5">
        <h3 className="mb-5 text-lg text-gray-700">Technical Skills</h3>
        <ul className="mx-5 list-disc list-outside">
          <li className="mb-1">Strong practical and theoretical foundation in object oriented programming</li>
          <li className="mb-1">Excellent understanding of HTML, JSON, AJAX, XML, ASP, PHP, ASP.net, Node.js, CSS</li>
          <li className="mb-1">Experience building microservice API&apos;s with Node.js and Express.js</li>
          <li className="mb-1">Javascript frameworks React.js, Redux, Angular.js, Jquery, Axios, and GatsbyJS</li>
          <li className="mb-1">Have built applications with React, Redux, Redux Saga, Typescript and Apollo GraphQL</li>
          <li className="mb-1">Software Engineering in Javascript, Node.js, PHP, ASP and ASP.net</li>
          <li className="mb-1">Experience in setting up and maintaining a web server on AWS, Digitalocean (Docker, Nginx, IIS, FTP, SQL, MySQL, Apache server and related hosting responsibilities)</li>
          <li className="mb-1">Experience setting up and deploying and configuring my own servers on DigitalOcean/AWS for Node, Wordpress applications</li>
          <li className="mb-1">Knowledge of Docker and building containers for development and deployment. Have built my own docker files for MERN stack running on Digital Ocean</li>
          <li className="mb-1">Laravel and Codeigniter PHP framework experience</li>
          <li className="mb-1">Have styled many web applications with CSS, CSS in Javascript with Styled components and have worked with SASS and LESS to compile CSS</li>
          <li className="mb-1">Have built many CSS responsive websites</li>
          <li className="mb-1">Database Engineering for MySQL, MongoDB, MSSQL, Filemaker, MS Access</li>
          <li className="mb-1">Experience creating REST/Webservices for Node.js,PHP and ASP.net</li>
          <li className="mb-1">Have worked with many popular internet APIs including: Facebook API, Twitter API, Google Maps API</li>
          <li className="mb-1">Worked on many multilingual projects</li>
          <li className="mb-1">Experience with with Git, Gulp, Bower, Vagrant, Docker, Webpack, NPM and Yarn</li>
          <li className="mb-1">Have created large relational databases with stored procedures </li>
          <li className="mb-1">Experience with programming ASP.net web applications with C# and Visual Studio .NET</li>
          <li className="mb-1">
            Have used Actionscript extensively with XML and backend integration, creating Flash components, Flash Video, Flex, Flash Web Services, Actionscript classes and shared libraries.
          </li>
          <li className="mb-1">Helped to produce three commercially released CD-ROMs distributed by Corel</li>
          <li className="mb-1">Wordpress CMS experience. Including customizing themes and plugins</li>
          <li className="mb-1">Experience with staging large corporate presentations</li>
          <li className="mb-1">Strong in depth knowledge of Macromedia Director, Lingo</li>
        </ul>
      </div>
      <div className="mb-5">
        <h3 className="mb-5 text-lg text-gray-700">Creative Skills</h3>
        <ul className="mx-5 list-disc list-outside">
          <li className="mb-1">Excels in creating Sketch, Illustrator and Photoshop designs to layout designs/concepts for web applications</li>
          <li className="mb-1">Familiar with many leading creative editing applications including Sketch and Adobe Photoshop</li>
          <li className="mb-1">Video compositing and editing experience (Premiere, Final Cut Pro and After Effects)</li>
          <li className="mb-1">Ability to create streaming and downloadable video media formats (Real, QuickTime, MPEG, Flash FLV)</li>
          <li className="mb-1">Designed many corporate presentations for IPO roadshows and other corporate events using Flash, Powerpoint and Director</li>
          <li className="mb-1">Strong technical and creative photographic skills</li>
          <li className="mb-1">Familiar with medium and large format cameras (2 1/4, 4x5 and 8x10 formats)</li>
        </ul>
      </div>
    </div>
  )
}

export default Skills
