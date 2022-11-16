import { AppContext, lightBoxVisibleAction } from 'state/context/appContext'

import DateBadge from 'components/badges/dateBadge'
import MediaBtn from 'components/buttons/mediaBtn'
import React from 'react'
import ResumeRow from './ResumeRow'
import WebLink from '@app/components/WebLink'
import portfolioImages from 'config/portfolioImages'
import { sitePaths } from '@app/models/paths'

const WorkExperience: React.FC<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>> = (props) => {
  const { dispatch } = React.useContext(AppContext)
  const handleOpenGallery = (photoData: string[]): void => {
    dispatch(lightBoxVisibleAction(true, photoData))
  }
  const { ...restProps } = props
  return (
    <div {...restProps}>
      <h1 className="mb-5 text-3xl">Work Experience</h1>

      <h3 className="mb-4 text-2xl ">Internet Projects</h3>
      <ul className="mx-5 list-disc list-outside">
        <li className="mb-3">
          <ResumeRow>
            <b className="font-semibold">Coach Me</b>
            <DateBadge>Oct 2020 - Feb 2021</DateBadge>
          </ResumeRow>
          <p className="mt-2 ml-1">
            Internal IBM application, built with Node.js and React front end. The project used Javascript, React, Redux, Node, Typescript, TailwindCSS, Jest testing, CSS and SASS.
          </p>
          <p>This web application was built for internal IBM employees to mentor fellow IBM employees.</p>
        </li>
        <li className="mb-3">
          <ResumeRow>
            <b className="font-semibold">Badge Me - Digital Credentials</b>
            <DateBadge>Jun 2019 - Dec 2019</DateBadge>
          </ResumeRow>
          <p className="mt-2 ml-1">
            Internal IBM application, built with Node.js microservice architecture and React front end. The project used Javascript, React, Redux, Node, Typescript, Jest testing, CSS and SASS. This
            project used multiple microservices to build a scalable web application for IBM employees to manage digital credentials.
          </p>
        </li>
        <li className="mb-3">
          <ResumeRow>
            <b className="font-semibold">
              <WebLink target="_blank" rel="noopener noreferrer" href="https://www.tripstreamer.com/">
                www.tripstreamer.com
              </WebLink>
            </b>
            &nbsp; <DateBadge>Apr 2016 - Present</DateBadge>
          </ResumeRow>
          <p className="mt-2 ml-1">
            Currently bootstrapping my own project for a travel application. Programmed in Node.js and MongoDB. It will have an API, Web application in React.js and iPhone/iPad applications.
          </p>
        </li>
        <li className="mb-3">
          <ResumeRow>
            <b className="font-semibold">
              <WebLink target="_blank" rel="noopener noreferrer" href="https://www.autolife.ca/">
                www.autolife.ca
              </WebLink>
            </b>
            <DateBadge>Jan 2018 - Apr 2018</DateBadge>
          </ResumeRow>
          {/*<span id="gallery-focalpoint" className="hidden-print gallerybtn label label-default pull-right"><i className="fa fa-picture-o" aria-hidden="true"></i> gallery</span>*/}
          <p className="mt-2 ml-1">New automotive website for GNR8R Marketing Group Inc. The site was build using Javascript, React, Redux, Bootstrap and SASS</p>
        </li>
        <li className="mb-3">
          <ResumeRow>
            <b className="font-semibold">
              <WebLink target="_blank" rel="noopener noreferrer" href="https://www.ontarioflowers.com/">
                www.ontarioflowers.com
              </WebLink>
            </b>
            <DateBadge>Dec 2017</DateBadge>
          </ResumeRow>
          {/*<span id="gallery-focalpoint" className="hidden-print gallerybtn label label-default pull-right"><i className="fa fa-picture-o" aria-hidden="true"></i> gallery</span>*/}
          <p className="mt-2 ml-1">New redesign for Ontarioflowers website. Using CSS, SASS, Twitter Bootstrap CSS framework.</p>
        </li>
        <li className="mb-3">
          <ResumeRow>
            <b className="font-semibold">
              <WebLink target="_blank" rel="noopener noreferrer" href="https://www.alwind.com/">
                www.alwind.com
              </WebLink>
            </b>
            <DateBadge>Sep 2017</DateBadge>
          </ResumeRow>

          {/*<span id="gallery-focalpoint" className="hidden-print gallerybtn label label-default pull-right"><i className="fa fa-picture-o" aria-hidden="true"></i> gallery</span>*/}
          <p className="mt-2 ml-1">New Website for Alwind Industries ltd. The site was build using Node, Grunt, React, Bootstrap and MongoDB</p>
        </li>
        <li className="mb-3">
          <ResumeRow>
            <b className="font-semibold">Bayview Vendor Support website</b>
            <DateBadge>Sep 2017</DateBadge>
          </ResumeRow>
          {/*<span id="gallery-focalpoint" className="hidden-print gallerybtn label label-default pull-right"><i className="fa fa-picture-o" aria-hidden="true"></i> gallery</span>*/}
          <p className="mt-2 ml-1">
            PHP website application that allows clients of Bayview Flowers to place orders for products based on availability. The app used PHP, MySQL, Git, Jquery, Bootstrap AND JSON
          </p>
        </li>
        <li className="mb-">
          <ResumeRow>
            <b className="font-semibold">Manulife Customer Portal</b>
            <DateBadge>May 2017 - Aug 2017</DateBadge>
          </ResumeRow>
          {/*<span id="gallery-focalpoint" className="hidden-print gallerybtn label label-default pull-right"><i className="fa fa-picture-o" aria-hidden="true"></i> gallery</span>*/}
          <p className="mt-2 ml-1">Worked with IBM to build a React front end customer portal. The app used React, Redux, Git, JSON, Bootstrap and REST</p>
        </li>
        <li className="mb-3">
          <ResumeRow>
            <b className="font-semibold">IBM FocalPoint</b>
            <DateBadge>Nov 2016 - Mar 2017</DateBadge>
          </ResumeRow>
          {/*<span id="gallery-focalpoint" className="hidden-print gallerybtn label label-default pull-right"><i className="fa fa-picture-o" aria-hidden="true"></i> gallery</span>*/}
          <p className="mt-2 ml-1">Worked with IBM labs to build a call management application. The app used AngularJs, Grunt, Bootstrap, JSON, XML, REST and Java</p>
        </li>
        <li className="mb-3">
          <ResumeRow>
            <b className="font-semibold">Yangu/Let&apos;s go there</b>
            <DateBadge>Sep 2015- Dec 2015</DateBadge>
          </ResumeRow>
          <p className="mt-2 ml-1">Programming and consulting for a Travel startup.</p>
        </li>
        <li className="mb-3">
          <ResumeRow>
            <b className="font-semibold">Flight Centre SMART</b>
            <DateBadge>Mar 2014 - Apr 2015</DateBadge>
          </ResumeRow>
          <p className="mt-2 ml-1">
            Developed a new a CMS tool for Flight Centre Travel Group to manage their social media campaigns. For each campaign an app is created with assets stored on AWS S3 using the AWS SDK. Pages
            can be created using a WYSIWYG style page editor made with Angular.js. The site was developed using Laravel PHP framework, Angular.js, Twitter Bootstrap CSS framework
          </p>
          <p className="mt-2 hidden-print">
            <MediaBtn youtube="https://youtu.be/CnN8iMoJH-A" className="mr-3" />
            <MediaBtn gallery={portfolioImages.smartData} onGalleryClick={handleOpenGallery} />
          </p>
        </li>
        <li className="mb-3">
          <ResumeRow>
            <b className="font-semibold">
              <a href="http://www.cfhi-fcass.ca/OurImpact/map">CFHI Impact Map</a>
            </b>
            <DateBadge>Feb 2014</DateBadge>
          </ResumeRow>
          <p className="mt-2 ml-1">
            Mini site for CFHI (Canadian Foundation for Healthcare Improvement). Created a tool to map/sort location markers and an admin tool to help place markers and add new locations to the
            database. Uses Angular, Google Maps API, PHP, JSON, MySQL.
          </p>
          <p className="mt-2 hidden-print">
            <MediaBtn gallery={portfolioImages.cfhiData} onGalleryClick={handleOpenGallery} />
          </p>
        </li>
        <li className="mb-3">
          <ResumeRow>
            <b className="font-semibold">
              <a href="http://www.brandsinmotion.ca">www.brandsinmotion.ca</a>
            </b>
            <DateBadge>Feb 2014</DateBadge>
          </ResumeRow>
          <p className="mt-2 ml-1">
            Programmed site in PHP using Codeigniter Framework. Google Maps API was used to display and search store locations on the map. Designed responsive and multilingual for English and French.
          </p>
          <p className="mt-2 hidden-print">
            <MediaBtn gallery={portfolioImages.brandsinmotionData} onGalleryClick={handleOpenGallery} />
          </p>
        </li>
        <li className="mb-3">
          <ResumeRow>
            <b className="font-semibold">Innocean Canada Extranet Application</b>
            <DateBadge>Dec 2013 - Jan 2014</DateBadge>
          </ResumeRow>
          <p className="mt-2 ml-1">
            Built an extranet web application for Innocean Canada. The project was built with PHP, MySQL and the Codeigniter and Twitter Bootstrap framework. The application has an administration tool
            to manage users, files and permissions.
          </p>
          <p className="mt-2 hidden-print">
            <MediaBtn gallery={portfolioImages.innoceanData} onGalleryClick={handleOpenGallery} />
          </p>
        </li>
        <li className="mb-3">
          <ResumeRow>
            <b className="font-semibold">OFG Supply</b>
            <DateBadge>Sep 2013 - Dec 2013</DateBadge>
          </ResumeRow>
          <p className="mt-2 ml-1">PHP site made for Ontario Flower Growers. It was a supply site for their client Lowe&apos;s to manage orders. Jquery, Laravel, PHP, MySQL</p>
          <p className="mt-2 hidden-print">
            <MediaBtn gallery={portfolioImages.ofgsupplyData} onGalleryClick={handleOpenGallery} />
          </p>
        </li>
        <li className="mb-3">
          <ResumeRow>
            <b className="font-semibold">Canada’s Produce Place</b>
            <DateBadge>Apr 2013 - Sep 2013</DateBadge>
          </ResumeRow>
          <p className="mt-2 ml-1">
            PHP site made for Ontario Flower Growers. The project was built with PHP, Codeigniter and MySQL. A custom designed CMS was made for editing growers, news content and other admin functions
            to help the client manage the content of the site
          </p>
          <p className="mt-2 hidden-print">
            <MediaBtn gallery={portfolioImages.producePlaceData} onGalleryClick={handleOpenGallery} />
          </p>
        </li>
        <li className="mb-3">
          <ResumeRow>
            <b className="font-semibold">Let it Snow</b>
            <DateBadge>Feb 2013</DateBadge>
          </ResumeRow>
          <p className="mt-2 ml-1">
            Developed a new campaign for Data Group’s client Calgary Health Trust. The site was developed using Codeigniter PHP framework, Twitter Bootstrap CSS framework and Adobe Flash
          </p>
        </li>
        <li className="mb-3">
          <ResumeRow>
            <b className="font-semibold">Flight Centre Contests</b>
          </ResumeRow>
          <p className="mt-2 ml-1">Facebook pages for social media contests.</p>
        </li>
        <li className="mb-3">
          <ResumeRow>
            <b className="font-semibold">Sears Microsites</b>
          </ResumeRow>
          <p className="mt-2 ml-1">Numerous PHP contest micro sites for M Marketing’s client Sears.</p>
        </li>
        <li className="mb-3">
          <ResumeRow>
            <b className="font-semibold">Infiniti Contest Microsites</b>
          </ResumeRow>
          <p className="mt-2 ml-1">M Marketing client contest micro sites for Infiniti made in PHP. English and French</p>
        </li>
        <li className="mb-3">
          <ResumeRow>
            <b className="font-semibold">Canadian Diabetes Association Virtual Clothesline</b>
          </ResumeRow>
          <div className="mt-2 ml-1">
            <p>Charity Site for Canadian Diabetes Association. PHP, Jquery, Flash. English and French</p>
            <p className="mt-2 hidden-print">
              <MediaBtn gallery={portfolioImages.clotheslineData} onGalleryClick={handleOpenGallery} />
            </p>
          </div>
        </li>
        <li className="mb-3">
          <ResumeRow>
            <b className="font-semibold">Deck your Dorm</b>
          </ResumeRow>
          <p className="mt-2 ml-1">PHP mini site for Sears. PHP, Jquery, Flash. English and French</p>
        </li>
        <li className="mb-3">
          <ResumeRow>
            <b className="font-semibold">Nissan Grey Cup contest</b>
          </ResumeRow>
          <p className="mt-2 ml-1">PHP mini site for M Marketing&apos;s client Nissan. PHP, JQuery, MySQL</p>
        </li>
        <li className="mb-3">
          <ResumeRow>
            <b className="font-semibold">Harlequin Celebrates</b>
          </ResumeRow>
          <div className="mt-2 ml-1">
            <p>PHP mini site for M Marketing&apos;s client Harlequin Publishing. PHP, Codeigniter, JQuery, MySQL, Flash, Actionscript, XML</p>
            <p className="mt-2 hidden-print">
              <MediaBtn gallery={portfolioImages.harlequin} onGalleryClick={handleOpenGallery} />
            </p>
          </div>
        </li>
        <li className="mb-3">
          <ResumeRow>
            <b className="font-semibold">Amex Card Compare</b>
          </ResumeRow>
          <div className="mt-2 ml-1">
            <p>Card comparison tool for Amex website. Client Ogilvy. PHP, JQuery, MySQL</p>
            <p className="mt-2 hidden-print">
              <MediaBtn gallery={portfolioImages.amex} onGalleryClick={handleOpenGallery} />
            </p>
          </div>
        </li>
        <li className="mb-3">
          <ResumeRow>
            <b className="font-semibold">Moneris Offer Site</b>
          </ResumeRow>
          <div className="mt-2 ml-1">
            <p>Project was built for M Marketing Inc. client Moneris. It has a responsive design for mobile devices and desktop. The site is available in English and French.</p>
            <p className="mt-2 hidden-print">
              <MediaBtn gallery={portfolioImages.monerisData} onGalleryClick={handleOpenGallery} />
            </p>
          </div>
        </li>
        <li className="mb-3">
          <ResumeRow>
            <b className="font-semibold">Sears Hanna Montana</b>
          </ResumeRow>
          <div className="mt-2 ml-1">
            <p>PHP mini site for Sears. Client M Marketing.</p>
          </div>
        </li>
        <li className="mb-3">
          <ResumeRow>
            <b className="font-semibold">Westgate Honda Kiosk</b>
          </ResumeRow>
          <div className="mt-2 ml-1">
            <p>Flash/PHP mini site made for Data Group. The mini site was made as a contest for Westgate dealership to drive traffic.</p>
          </div>
        </li>
        <li className="mb-3">
          <ResumeRow>
            <b className="font-semibold">www.ontarioflowergrowers.ca</b> <span className="text-sm">(previous design)</span>
          </ResumeRow>
          <div className="mt-2 ml-1">
            <p>
              Site is made up of 4 portals and a custom programmed CMS tool for client to manage web site users and content. Ontario growers can add products and set availability for products within
              the Grower’s portal. Registered buyers can purchase grower’s products and search and view profiles and products. ASP.net 2.0, JQuery, MsSQL
            </p>
            <p className="mt-2 hidden-print">
              <MediaBtn gallery={portfolioImages.ofgData} onGalleryClick={handleOpenGallery} />
            </p>
          </div>
        </li>
        <li className="mb-3">
          <ResumeRow>
            <b className="font-semibold">OFG Management Tool</b>
          </ResumeRow>
          <div className="mt-2 ml-1">
            <p>CMS tool for Ontario Flower Grower employees to manage the web site, users products and content. Admin tool also synced with AS400 IBM database nightly. ASP.net 2.0, JQuery, MsSQL</p>
            <p className="mt-2 hidden-print">
              <MediaBtn gallery={portfolioImages.ofgadminData} onGalleryClick={handleOpenGallery} />
            </p>
          </div>
        </li>
        <li className="mb-3">
          <ResumeRow>
            <b className="font-semibold">Rogers Mentoring Program</b>
          </ResumeRow>
          <div className="mt-2 ml-1">
            <p>
              Programmed in C#. This was a forms based web application that employees would have access to from the company intranet. Filling in the form the employees would apply for a special
              rewards program. Administrators and Managers would get email updates to the employees application status. The main part of the application required building a complete admin tool for the
              administrator to manage applicants and track the status of responses from managers.
            </p>
          </div>
        </li>
        <li className="mb-3">
          <ResumeRow>
            <b className="font-semibold">Bellworld Event Management System</b>
          </ResumeRow>
          <div className="mt-2 ml-1">
            <p>
              Created an event management system for Bellworld administrators to login and check current events in their region. They can use the web calendar to select events and print the details of
              the event. Administrators can edit event details and send email notices to other event managers. Programmed in C#
            </p>
            <p className="mt-2 hidden-print">
              <MediaBtn gallery={portfolioImages.bellworld} onGalleryClick={handleOpenGallery} />
            </p>
          </div>
        </li>
        <li className="mb-3">
          <ResumeRow>
            <b className="font-semibold">www.redwoodelearning.com</b> <span className="text-sm">(previous design)</span>
          </ResumeRow>
          <div className="mt-2 ml-1">
            <p>Created login and registration forms for password protected areas of the site. Programmed in C#</p>
          </div>
        </li>
        <li className="mb-3">
          <ResumeRow>
            <b className="font-semibold">www.virtuallyperfectgolf.com</b> <span className="text-sm">(offline)</span>
          </ResumeRow>
          <div className="mt-2 ml-1">
            <p>
              Created an online administration tool for Virtually Perfect Golf (VPG) to edit user accounts for the VPG E-commerce system. Programmed in Java in Java and JSP using Jbuilder. The web
              application is deployed using Macromedia jRun. Administration pages were programmed in C# (ASP.net). The eCommerce system is password protected and only franchisors to the VPG systems
              can purchase time for their system.
            </p>
          </div>
        </li>
        <li className="mb-3">
          <ResumeRow>
            <b className="font-semibold">
              <a href="http://www.alwind.com">www.alwind.com</a>
            </b>
          </ResumeRow>
          <div className="mt-2 ml-1">
            <p>
              Created site design and backend programming. Programmed with ASP and Microsoft Access. Created protected administration pages for sales people to update news items and product
              information. Created a registration system for registered users to gain access to Autocad File downloads and PDF product specification sheets
            </p>
          </div>
        </li>
        <li className="mb-3">
          <ResumeRow>
            <b className="font-semibold">www.resourcemedia.com</b>
          </ResumeRow>
          <div className="mt-2 ml-1">
            <p>
              Responsible for site design and backend programming. Site was programmed using C#. Site used various new ASP.net features. I also created custom C# controls for the login sections and
              top navigation bars. Designed and programmed all Flash elements for the site. I also created an Microsoft Access application to help with site content updates. This application was
              linked to sql server but provided the user with forms for easy data entry of site updates
            </p>
            <p className="mt-2 hidden-print">
              <MediaBtn gallery={portfolioImages.resourcemedia} onGalleryClick={handleOpenGallery} />
            </p>
          </div>
        </li>
        <li className="mb-3">
          <ResumeRow>
            <b className="font-semibold">www.ENVYTV.com</b> <span className="text-sm">(offline)</span>
          </ResumeRow>
          <div className="mt-2 ml-1">
            <p>
              I designed the site as well as programmed all the backend database connections and scripts. The site also includes an administration section for editors to create newsletters online and
              send them to registered users. Other site features include registration, login areas for registered users. Streaming media using windows media. Web programming using ASP, Javascript,
              CSS, SQL server and windows media encoder.
            </p>
            <p className="mt-2 hidden-print">
              <MediaBtn gallery={portfolioImages.envy} onGalleryClick={handleOpenGallery} />
            </p>
          </div>
        </li>
        <li className="mb-3">
          <ResumeRow>
            <b className="font-semibold">www.themoneyworld.com</b> <span className="text-sm">(offline)</span>
          </ResumeRow>
          <div className="mt-2 ml-1">
            <p>Responsible for designing overall look of site. Flash movies and video integration. Streaming video section was scripted with ASP</p>
          </div>
        </li>
        <li className="mb-3">
          <ResumeRow>
            <b className="font-semibold">
              <a href={sitePaths.matrixdigital}>www.matrixdigital.com</a>
            </b>
          </ResumeRow>
          <div className="mt-2 ml-1">
            <p>My own personal company site. It&apos;s gone through a lot of changes from ASP to PHP, then to Wordpress and now it&apos;s built with React and Node/Express</p>
          </div>
        </li>
      </ul>

      <div className="pageBreak">&nbsp;</div>
      <h3 className="mb-4 text-2xl">Multimedia Projects</h3>
      <ul className="mx-5 list-disc list-outside">
        <li className="mb-3">
          <b className="text-base font-semibold">Ashley Madison Flash Chat - March 2010</b>
          <p>Programmed for Avid Life Media. Developed a Flash chat application for the Ashley Madison Website. Chat application worked with JSON and Javascript.</p>
          <p className="mt-2 hidden-print">
            <MediaBtn gallery={portfolioImages.ashleyData} onGalleryClick={handleOpenGallery} />
          </p>
        </li>
        <li className="mb-3">
          <b className="font-semibold">Pole Dance a Friend</b>
          <p>Site for Avid Life Media. It used PHP, Flash.</p>
          <p className="mt-2 hidden-print">
            <MediaBtn gallery={portfolioImages.poledanceData} onGalleryClick={handleOpenGallery} />
          </p>
        </li>
        <li className="mb-3">
          <b className="font-semibold">Goodwrench Banners </b> <DateBadge>Feb 2009</DateBadge>
          Various English/French Flash banners for GM Goodwrench.
        </li>
        <li className="mb-3">
          <b className="font-semibold">Maclaren McCann Olympic games banners</b> <DateBadge>Apr 2009</DateBadge>
        </li>
        <li className="mb-3">
          <b className="font-semibold">Kelseys Webfeat Flash mini site</b> <DateBadge>Apr 2009</DateBadge>
        </li>
        <li className="mb-3">
          <b className="font-semibold">Buick Lacrosse </b> 2009 - Maclaren Mcann Flash mini site Project for GM
        </li>
        <li className="mb-3">
          <b className="font-semibold">Brewsomegood</b> 2009 - A large Flash application that required a lot of Actionscript changes for Ogilvy&apos;s client Maxwell House
        </li>
        <li className="mb-3">
          <b className="font-semibold">HP Canada IT Transformation</b> <DateBadge>2009</DateBadge> A large Flash eLearning application made for WebFeat&apos;s client HP.
        </li>
        <li className="mb-3">
          <b className="font-semibold">Click Media</b> <DateBadge>2009</DateBadge>Flash Flex consulting
        </li>
        <li className="mb-3">
          <b className="font-semibold">Nestle Smarties</b> Jun 2008 - Flash mini site
        </li>
        <li className="mb-3">
          <b className="font-semibold">Weekenders USA</b> - Created a multimedia CD-ROM in Macromedia Director that helped sales people learn the process of selling the Weekenders product line to
          customers
        </li>
        <li className="mb-3">
          <b className="font-semibold">Boston Scientific</b> - Created a multimedia CD-ROM in Macromedia Director that contained a simple menu system to play mpeg files of a client&apos;s testimonial
        </li>
        <li className="mb-3">
          <b className="font-semibold">Manulife MIX</b> - CD-ROM and Roadshow presentation. Presentation was designed in Powerpoint so that sales staff could add their own content for their region.
          The presentation had areas with voiceovers which were synchronized to bullet points, Flash opening animation and MPEG movie testimonials. English and French CD-ROM versions.
        </li>
        <li className="mb-3">
          <b className="font-semibold">TacFast</b> - Built with Macromedia Director and Macromedia&apos;s new Shockwave 3D technology. The project required 3D visualization of carpet assembled carpet
          pieces. The user can select from over 15 different 3D patterns and using the color and pattern tools create a unique look for any room in a homebuilder&apos;s floor plan. This project also
          required database connectivity for login and saving customer data.
        </li>
        <li className="mb-3">
          <b className="font-semibold">Virtually Perfect Golf (Team lead)</b>
          <p>
            Built with Macromedia Director. The project required external video capture, mixer and camera control. Communication with ASP to a central database server. Scripting control of Flash and
            Quicktime assets. Teachers can build lessons and drills and the program can operate in auto teacher mode to run lessons automatically
          </p>
          <p className="mt-2 hidden-print">
            <MediaBtn gallery={portfolioImages.vpgData} onGalleryClick={handleOpenGallery} />
          </p>
        </li>
        <li className="mb-3">
          <b className="font-semibold">Vaughan Corporate Centre CD-ROM</b> - Built with Macromedia Director. The project required media to be updatable by the user via a password protected ftp site.
          Other features included integrated Flash vector maps that could be scaled with slider bars and view panning
        </li>
        <li className="mb-3">
          <b className="font-semibold">Centennial Optical</b> - Built with Macromedia Director. This project was designed using the V12 database engine with product database designed with Microsoft
          Access. The user can perform searches on over 600 products contained in the database by 5 different search criteria and receive a thumbnail view of the found items. Clicking a found item
          displays product information and allows the user to add that item to the order form which can later be printed and sent to Centennial Optical to be processed
        </li>
        <li className="mb-3">
          <b className="font-semibold">Bank of Montreal Crossword</b>
          <p>Flash Crossword puzzle and puzzle generator made in Flash and XML for BMO&apos;s intranet.</p>
          <p className="mt-2 hidden-print">
            <MediaBtn gallery={portfolioImages.crossword} onGalleryClick={handleOpenGallery} />
          </p>
        </li>
        <li className="mb-3">
          <b className="font-semibold">Bank of Montreal</b>
          <p>e-Learning Flash CD-ROM based application</p>
          <p className="mt-2 hidden-print">
            <MediaBtn gallery={portfolioImages.optimizer} onGalleryClick={handleOpenGallery} />
          </p>
        </li>
        <li className="mb-3">
          <b className="font-semibold">UBS</b> - Built with Macromedia Director 8. This project was designed using the V12 database engine. The user can perform searches on over 180 mutual funds
          contained in the database. The CD-ROM contains an investment calculator and all reports are able to be saved and printed
        </li>
        <li className="mb-3">
          <b className="font-semibold">Biomech Graphics Inc.</b> - Web site design and Shockwave animations
        </li>
        <li className="mb-3">
          <b className="font-semibold">Commix Communications</b> - Multimedia consulting. Flash and Director
        </li>
        <li className="mb-3">
          <b className="font-semibold">Corpworld</b> - Presentations for Goldcorp and Trilon
        </li>
        <li className="mb-3">
          <b className="font-semibold">Creative Direction Group</b> - Various Corporate presentations (Barrick, Altarex, GoldCorp and CIBC)
        </li>
        <li className="mb-3">
          <b className="font-semibold">Dymaxium Business Tools</b> - laptop presentation and interface design
        </li>
        <li className="mb-3">
          <b className="font-semibold">Entrevision Inc.</b>- Shockwave, Flash (IBM and Lotus)
        </li>
        <li className="mb-3">
          <b className="font-semibold">ES3</b> - Flash MX presentation for screensaver and sales presentations (Bell Canada, Sympatico, MSN, TumbleBooks, Musicmatch)
        </li>
        <li className="mb-3">
          <b className="font-semibold">Invisions</b> - Lingo programming (UBS, Rogers and Virtually Perfect Golf)
        </li>
        <li className="mb-3">
          <b className="font-semibold">Isis Communications</b> - Flash animation and production
        </li>
        <li className="mb-3">
          <b className="font-semibold">Knowledge Systems Inc.</b> - Video effects (Pioneer)
        </li>
        <li className="mb-3">
          <b className="font-semibold">Livewire Communications</b> - Director presentations (Four Seasons Resorts and Magna)
        </li>
        <li className="mb-3">
          <b className="font-semibold">Lumina Corporate Communications</b> - PowerPoint presentation (Bell)
        </li>
        <li className="mb-3">
          <b className="font-semibold">MacLaren McCann</b> – Flash Programming/ Flash Banners (GM Canada, Nestle, Rogers)
        </li>
        <li>
          <b className="font-semibold">Mariposa Communications</b> - Various Corporate and laptop presentations (CIBC, Canada Trust, Glaxo Wellcome, Toronto Dominion Bank, Kraft and Ontario Lottery
          Corp)
        </li>
        <li>
          <b className="font-semibold">McInerney and Company</b> - Various IPO roadshow presentations (Nesbitt Burns, Wood Gundy, BCE)
        </li>
        <li className="mb-3">
          <b className="font-semibold">Mile 24 Solutions</b> - Powerpoint and Flash MX presentations (Firefly Locator Inc.)
        </li>
        <li>
          <b className="font-semibold">Moneyworld Media Inc.</b> - Web design and Flash 5 movies
        </li>
        <li>
          <b className="font-semibold">Motoretta</b> – Powerpoint design
        </li>
        <li>
          <b className="font-semibold">Mosaic Group</b> - Various Corporate presentations (Pharmacia, Minute Maid, TD Bank)
        </li>
        <li className="mb-3">
          <b className="font-semibold">Pixel Bureau</b> - Director presentation and After Effects animations
        </li>
        <li className="mb-3">
          <b className="font-semibold">Re:Source Media</b> - Presentation design and PowerPoint slides (Chapters , Lifebridge, Thomas Cook and Nelvana Inc.)
        </li>
        <li className="mb-3">
          <b className="font-semibold">Vista Communications</b> - Presentation design and PowerPoint slides (Pladium and AMEX)
        </li>
        <li className="mb-3">
          <b className="font-semibold">Voltage Communications</b> - Consulting and Director production / programming
        </li>
      </ul>
      <h2 className="mt-6 mb-5 text-3xl">Full Time Positions</h2>

      <div className="mb-3">
        <ResumeRow>
          <div>
            <span className="text-base font-semibold ">Matrix Digital Solutions Inc.</span>
            <p className="text-sm font-semibold ">Founder, CEO, Internet Designer and Developer</p>
          </div>
          <DateBadge>April 1, 1997 - Present</DateBadge>
        </ResumeRow>
        <p className="mt-1 ml-2">
          Established Matrix Digital Solutions in the summer of 1997. MATRIX Digital Solutions Inc. has been designing and programming leading edge new media applications for clients and their
          customers worldwide. With an enviable reputation for designing successful leading edge projects which exceed all client expectations.
        </p>
      </div>
      <div className="mb-3">
        <ResumeRow>
          <div>
            <span className="text-base font-semibold ">Neal McInerney Investor Relations</span>
            <p className="text-sm font-semibold ">Multimedia Designer and Developer</p>
          </div>
          <DateBadge>May 5, 1996 - April 1, 1997</DateBadge>
        </ResumeRow>
        <p className="mt-1 ml-2">
          Multimedia Designer - General duties included: interface design, production of hard copy, editing video, cutting CD-ROMs, programming in lingo, editing text and graphics, file management and
          archival, operation and set-up of corporate presentations{' '}
        </p>
      </div>
      <div className="mb-3">
        <ResumeRow>
          <div>
            <span className="text-base font-semibold ">Digital Media Studios</span>
            <p className="text-sm font-semibold ">Multimedia Developer</p>
          </div>
          <DateBadge>March 12, 1995 - May 1, 1996</DateBadge>
        </ResumeRow>
        <p className="mt-1 ml-2">
          Multimedia Production - General duties included: placing animations and sound effects, interface design, testing and troubleshooting, programming in Lingo, editing text, sounds and graphics
          using various applications. Other duties included: file backup and management as well as training new employees
        </p>
      </div>
    </div>
  )
}

export default WorkExperience
