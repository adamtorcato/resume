import siteConfig, { metaTagData } from '@app/config'
import { withAppPath } from '@app/utils'

import React from 'react'

// import SEO from '@app/components/AppHeaderTags'

// import { navigate } from 'gatsby'
// import { sitePaths } from '@app/config/paths'

const App = (): React.ReactElement | null => {
  if (process.env.NODE_ENV !== 'development') {
    if (typeof window !== 'undefined') {
      // navigate(sitePaths.errors.error404)
    }
    return null
  } else {
    return (
      <>
        <div style={{ padding: '5rem' }}>
          <h1>Site Check - {process.env.NODE_ENV}</h1>
          <div>
            <h3>Site Config</h3>
            <pre>{JSON.stringify(siteConfig, null, 2)}</pre>
            <hr />
            <h3>Meta Tags</h3>
            <pre>{JSON.stringify(metaTagData, null, 2)}</pre>
            <hr />
            <h3>Fav Icons</h3>
            <div className="flex-wrap d-flex">
              <div className="p-4">
                <h4>Shortcut Icon</h4>
                <img src={withAppPath(metaTagData.shortcutIcon)} alt="" />
              </div>

              <div className="p-4">
                <h4>Apple Touch</h4>
                <img src={withAppPath(metaTagData.icons.appleTouch)} alt="" />
              </div>
              <div className="p-4">
                <h4>Apple 16</h4>
                <img src={withAppPath(metaTagData.icons.icon16)} alt="" />
              </div>
              <div className="p-4">
                <h4>Apple 32</h4>
                <img src={withAppPath(metaTagData.icons.icon32)} alt="" />
              </div>
              <div className="p-4">
                <h4>Apple 32</h4>
                <img src={withAppPath(metaTagData.icons.icon32)} alt="" />
              </div>
              <div className="p-4">
                <h4>Mask Icon (safari-pinned-tab)</h4>
                <img src={metaTagData.maskIcon} alt="" />
              </div>
              <div className="p-4">
                <h4>Social Image</h4>
                <img src={metaTagData.siteImage} alt="" />
              </div>
              <div className="p-4">
                <h4>Twitter Image</h4>
                <img src={withAppPath(metaTagData.twitter.image)} alt="" />
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
}
export default App
