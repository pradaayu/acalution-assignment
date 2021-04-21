import React from 'react'
import Button from 'react-bootstrap/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from '@fortawesome/free-solid-svg-icons'

const BookmarkButton = ({handleClickButton}) => {
  return (
    <Button
      onClick={handleClickButton}
      variant="flat"
    >
      <FontAwesomeIcon icon={faBookmark} color="#CC962C" size="2x"/>
    </Button>

  )
}

export default BookmarkButton