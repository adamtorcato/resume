import styled from '@emotion/styled'

export const styleVars = {
  pagePadTop: '2em',
  pagePadBottom: '2em',
}

const ResumeContainer = styled.div`
  display: flex;
  padding: ${styleVars.pagePadTop} 2rem ${styleVars.pagePadBottom};
  justify-content: flex-start;
  height: 100%;
  @media screen and (min-width: $medium) {
    justify-content: center;
    padding-left: 0;
    padding-right: 0;
  }
`

export default ResumeContainer
