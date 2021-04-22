import React, { useState } from 'react'
import ModalContext from './modal.context'

export const ModalProvider = ({children}) => {
  const [visibleModal, setVisibleModal] = useState(false)
  const [visibleModalBookmark, setVisibleModalBookmark] = useState(false)
  const [productName, setProductName] = useState('')
  const [countItem, setCountItem] = useState(0)
  const handleClose = () => setVisibleModal(false)
  const handleOpen = () => setVisibleModal(true)
  const handleCloseBookmark = () => setVisibleModalBookmark(false)
  const handleOpenBookmark = () => setVisibleModalBookmark(true)
  const handleClickCart = (name, e) => {
    e.preventDefault()
    setProductName(name)
    handleOpen()
    setCountItem(countItem + 1)
  }
  const handleClickBookmark = (name, e) => {
    e.preventDefault()
    setProductName(name)
    handleOpenBookmark()
  }
  return (
      <ModalContext.Provider
        value={{
          handleClickCart, visibleModal, handleClose, visibleModalBookmark,
          handleClickBookmark, handleCloseBookmark, productName, countItem
        }}>
        {children}
      </ModalContext.Provider>
  )
}

export default ModalProvider