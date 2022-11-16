import styled from '@emotion/styled'
import tw from 'twin.macro'
import { zIndex } from '@app/config/appStyles'

const Container = styled.div`
  background-color: #161c2d;
  display: block;
  z-index: ${zIndex.footer};
  flex: 1;
  color: #abbcd5;
  a,
  a:visited {
    color: #abbcd5;
    transition: color 0.3s ease-in;
  }
  a:hover {
    color: white;
  }
  ${tw`border-t-2 border-white`}
`

const FooterBox = styled.div`
  h3 {
    color: white;
    font-size: 1.2em;
    font-weight: bold;
    text-transform: capitalize;
  }
  ul {
    padding: 0.5rem 0 0;
    li {
      margin: 1rem 0 0;
      line-height: 1rem;
      svg {
        padding-bottom: 0.3rem;
        margin-right: 1rem;
      }
    }
    button {
      border: transparent !important;
      padding: 0;
      margin: 0;
      background: none;
      text-decoration: none;
      color: #abbcd5 !important;
      font-size: inherit;
      font-weight: inherit;
      transition: color 0.3s ease-in;
      &:hover {
        color: white !important;
        text-decoration: underline;
      }
    }
  }
`

const Footer = {
  Container,
  FooterBox,
}

export default Footer
