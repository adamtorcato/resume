import React from 'react'
import appStyles from '@app/config/appStyles'
import { css } from '@emotion/react'
import tw from 'twin.macro'

interface IProps {
  youtube?: string
  gallery?: string[]
  className?: string
  onGalleryClick?: (galleryData: string[]) => void
}
const btnStyle = css`
  padding: '.2rem 1rem';
  color: ${appStyles.colors.primary.DEFAULT};
  border: 1px solid ${appStyles.colors.primary.DEFAULT};
  border-width: 1;
  font-size: 0.9rem;
  padding: 0.2rem 1rem;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  flex: 1 1 100%;
  min-width: 110px;
  :hover {
    color: #fff;
    background-color: ${appStyles.colors.primary.DEFAULT};
  }
  ${tw`rounded-xl`}
`

const MediaBtn = (props: IProps): React.ReactElement => {
  const className = `btn btn-outline-primary ${props.className ? props.className : ''}`
  const handleBtnClick = (): void => {
    if (props.onGalleryClick && props.gallery) {
      props.onGalleryClick(props.gallery)
    }
  }
  if (props.youtube) {
    return (
      <a href={props.youtube} target="_blank" rel="noopener noreferrer" className={className} css={btnStyle}>
        <i className="mr-2 fa fa-youtube-play" aria-hidden="true"></i> Video
      </a>
    )
  } else if (props.gallery) {
    return (
      <button className={className} css={btnStyle} onClick={handleBtnClick}>
        <i className="mr-2 fa fa-picture-o" aria-hidden="true"></i> Photos
      </button>
    )
  }
  return <div>ERROR nothing set for button</div>
}

export default MediaBtn
