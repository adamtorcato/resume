import React from 'react'
import { attachments } from '@app/models/attachments'

const viewForIE: React.FC = () => {
  return (
    <div style={{ background: '#f5f5f5' }}>
      <div>
        <h1 className="mt-9">Richard Torcato - Resume</h1>
        <p className="lead">Sorry this website does not support your browser.</p>

        <div>
          You can still view Richard Torcato&apos;s resume by downloading these files here:
          <ul style={{ paddingTop: '10px' }}>
            <li>
              <a href={attachments[0].href} target="_blank" rel="noopener noreferrer">
                Resume in Adobe PDF format
              </a>
            </li>
            <li>
              <a href={attachments[1].href} target="_blank" rel="noopener noreferrer">
                Resume in Microsoft WORD format
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default viewForIE
