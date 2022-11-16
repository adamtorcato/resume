import { Global, css } from '@emotion/react'
import tw, { GlobalStyles as BaseStyles, theme } from 'twin.macro'
const customStyles = css`
  #__next {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    ${tw`h-full bg-gray-100`}
  }

  body {
    margin: 0; //required for sticky
    padding: 0; //required for sticky
    ${tw`h-full`} /*
    background: ${theme`colors.white`};
    -webkit-tap-highlight-color: ${theme`colors.blue.500`};
    ${tw`antialiased`} */
    color: #161c2d
  }
  @media print {
    .print:hidden {
      display: none !important;
    }
    .print-show {
      display: block !important;
    }
  }
  /* a {
    cursor: pointer;
    color: #0076ff;
    text-decoration: none;
    transition: all 0.2s ease;
    border-bottom: 1px solid black;
    :hover {
      border-bottom: 1px solid #0076ff;
    }
  } */
`

// const customStyles = css`
//   body {
//     -webkit-tap-highlight-color: ${theme`colors.purple.500`};
//     ${tw`antialiased`}
//   }
//   html,
//   body {
//     padding: 3rem 1rem;
//     margin: 0;
//     /* background: gray; */
//     min-height: 100%;
//     font-family: Helvetica, Arial, sans-serif;
//     font-size: 24px;
//   }
// `

const GlobalStyles = (): JSX.Element => (
  <>
    <BaseStyles />
    <Global styles={customStyles} />
  </>
)

export default GlobalStyles
