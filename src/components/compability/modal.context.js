import { createContext } from 'react'

const ModalContext = createContext({
    // isShowing: false,
    // openDialog: () => null,
    // closeDialog: () => null
    handleClickCart: () => null,
    handleClickBookmark: () => null,
    handleCloseBookmark: () => null,
    handleClose: () => null,
    visibleModal: false,
    visibleModalBookmark: false,
    productName: '',
    countItem: 0
})

export default ModalContext