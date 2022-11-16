import React, { FC } from 'react'

const NoCookies: FC<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>> = (props) => {
  return (
    <div id="noCookies" {...props} style={{ display: 'none' }}>
      <div className="container" style={{ paddingTop: '100px' }}>
        <div className="row">
          <div className="panel panel-danger">
            <div className="panel-heading">
              <h3 className="panel-title">Cookies must be enabled!</h3>
            </div>
            <div className="panel-body">This site requires cookies! Please enable cookies in your browser and refresh this page.</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NoCookies
