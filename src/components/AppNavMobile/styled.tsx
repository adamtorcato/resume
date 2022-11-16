import { screens, zIndex } from '@app/config/appStyles'

import { css } from '@emotion/react'
import styled from '@emotion/styled'

const navMobile = css`
  position: fixed;
  display: block;
  left: 0;
  margin-top: 90px;
  padding: 2rem;
  color: black;
  background-color: #f3f7fa;
  border-radius: 0 0 0.375rem 0;
  box-shadow: 0 1.5rem 4rem rgba(22, 28, 45, 0.15);
  overflow-y: auto;
  transition: all 0.5s ease;
  z-index: ${zIndex.appMobileNav}; //$zNavMobile;
  height: 100vh; // auto
  touch-action: 'pan-y';
  width: 100%;
  max-width: 500px;
  /* padding: 2rem 0 140px; */
  transform: translateX(-100%);
  &.active {
    transform: translateX(0);
    /* background-color: red; */
  }

  @media screen and (min-width: ${screens.sm}) {
    max-width: 400px;
  }

  a,
  .btn-text {
    text-align: center;
    @media screen and (min-width: ${screens.sm}) {
      text-align: left;
    }
  }

  .navmobile-icon {
    text-align: center;
    margin-right: 1rem;
  }
  .navMobile-ul {
    padding: 0;
    margin: 0;
  }
  .navMobile-ul li {
    list-style: none;
  }
  .navMobile-ul li.active > a {
    color: #ffffff;
  }
  .navMobile-ul a {
    border-bottom: none !important;
    padding: 7px 0;
    display: block;
    // color: #ccc;
    color: rgba(255, 255, 255, 0.5);
  }
  .navMobile-ul a:hover {
    color: white;
  }
  .navMobile-ul .sub-ddown {
    position: relative;
  }
  .navMobile-ul .sub-ddown:after {
    // font-family: 'themify';
    // speak: none;
    font-style: normal;
    font-weight: normal;
    font-variant: normal;
    text-transform: none;
    line-height: 1;
    position: absolute;
    right: 0;
    margin-top: 2px;
    content: '\e64b';
  }
  .navMobile-ul .sub-menu {
    //display: none;
    padding-left: 20px;
  }
  .navMobile-ul .sub-menu li {
    list-style: none;
  }
`
const navLinks = styled.div`
  svg {
    display: none;
    @media screen and (max-width: 320) {
      display: inline-block;
    }
  }
}`

export default {
  navMobile,
  navLinks,
}
