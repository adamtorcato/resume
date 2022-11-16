import React, { ReactElement } from 'react'

import HomeButton from '@app/components/buttons/homeBtn'
import { css } from '@emotion/react'

const styles = css`
  /* .errorCode { */
  font-size: 4rem;
  font-weight: bolder;
  @media (min-width: 576px) {
    font-size: 7rem;
  }
  /* } */
`
//style={{ minHeight: 'calc(100vh/2)' }}
export default function index(): ReactElement {
  return (
    <div className="p-5 text-center">
      <h1 css={styles}>404</h1>
      <p className="mt-4 lead ">The page you&apos;re looking for is not found.</p>
      <hr />
      <p>
        Make sure the address is correct.
        <br />
        If you think this is a mistake,
        <a href="mailto:rtorcato@me.com" className="ml-1">
          contact us
        </a>
        .
      </p>
      <p className="block mt-5">
        <HomeButton text="Take me Home" />
      </p>
    </div>
  )
}
