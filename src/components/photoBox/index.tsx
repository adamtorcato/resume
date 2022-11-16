import 'react-image-lightbox/style.css'

import { AppContext, lightBoxSetIndexAction, lightBoxVisibleAction } from '@app/state/context/appContext'

import Lightbox from 'react-image-lightbox'
import React from 'react'
import { withAppPath } from '@app/utils'

const PhotoBox = (): React.ReactElement => {
  const { state, dispatch } = React.useContext(AppContext)
  const images = state.lightBoxPhotos
  const photoIndex = state.lightBoxPhotoIndex
  const nextImage = images.length > 1 ? images[(photoIndex + 1) % images.length] : undefined
  const prevImage = images.length > 1 ? images[(photoIndex + images.length - 1) % images.length] : undefined

  const handleCloseRequest = (): void => {
    dispatch(lightBoxVisibleAction(false))
  }
  const handlePrevRequest = (): void => {
    dispatch(lightBoxSetIndexAction((photoIndex + images.length - 1) % images.length))
  }
  const handleNextRequest = (): void => {
    dispatch(lightBoxSetIndexAction((photoIndex + 1) % images.length))
  }

  return (
    <>
      {state.lightBoxVisible && (
        <Lightbox
          mainSrc={withAppPath(images[photoIndex])}
          enableZoom={false}
          nextSrc={nextImage}
          prevSrc={prevImage}
          onCloseRequest={handleCloseRequest}
          onMovePrevRequest={handlePrevRequest}
          onMoveNextRequest={handleNextRequest}
        />
      )}
    </>
  )
}

export default PhotoBox
