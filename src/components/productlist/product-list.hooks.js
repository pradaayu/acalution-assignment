import {useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'
import { BASE_URL } from '../../constants'
// https://zax5j10412.execute-api.ap-southeast-1.amazonaws.com/dev/api/product/list?page=${currentPage}
// https://zax5j10412.execute-api.ap-southeast-1.amazonaws.com/dev/api/product/${id}

const useProductList = () => {
  const [productList, setProductList] = useState([])
  const [visibleModal, setVisibleModal] = useState(false)
  const [visibleModalBookmark, setVisibleModalBookmark] = useState(false)
  const [productName, setProductName] = useState('')
  const handleClose = () => setVisibleModal(false)
  const handleOpen = () => setVisibleModal(true)
  const handleCloseBookmark = () => setVisibleModalBookmark(false)
  const handleOpenBookmark = () => setVisibleModalBookmark(true)
  console.log('product list', productList)

  const history = useHistory()

  useEffect(() => {
    getProductList(4)
  }, [])
  const getProductList = async (page) => {
    const res = await axios.get(`${BASE_URL}/list?page=${page}`)
    if (res.status === 200) {
      const products = res.data.value.products
      setProductList(products)
    } else alert('cannot fetch data')
  }
  const handleClickCart = (name, e) => {
    console.log('cart button is clicked', name)
    e.preventDefault()
    setProductName(name)
    handleOpen()
  }
  const handleClickBookmark = (name, e) => {
    console.log('button is clicked', 'yay')
    e.preventDefault()
    setProductName(name)
    handleOpenBookmark()
  }
  return {
    productList, handleClickCart, visibleModal, handleClose, visibleModalBookmark, handleClickBookmark, handleCloseBookmark, productName
  }
}

export default useProductList