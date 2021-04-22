import { useState } from 'react'

const useModal = () => {
  const [visibleModal, setVisibleModal] = useState(false)
  const [visibleModalBookmark, setVisibleModalBookmark] = useState(false)
  const [productName, setProductName] = useState('')
  const handleClose = () => setVisibleModal(false)
  const handleOpen = () => setVisibleModal(true)
  const handleCloseBookmark = () => setVisibleModalBookmark(false)
  const handleOpenBookmark = () => setVisibleModalBookmark(true)
  const handleClickCart = (name, e) => {
    e.preventDefault()
    setProductName(name)
    handleOpen()
  }
  const handleClickBookmark = (name, e) => {
    e.preventDefault()
    setProductName(name)
    handleOpenBookmark()
  }
  return {
    handleClickCart, visibleModal, handleClose, visibleModalBookmark,
    handleClickBookmark, handleCloseBookmark, productName
  }
}

export default useModal