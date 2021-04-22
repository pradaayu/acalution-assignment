import {useEffect, useState } from 'react'
import axios from 'axios'
import { BASE_URL } from '../../constants'
// https://zax5j10412.execute-api.ap-southeast-1.amazonaws.com/dev/api/product/list?page=${currentPage}
// https://zax5j10412.execute-api.ap-southeast-1.amazonaws.com/dev/api/product/${id}

const useProductList = (page) => {
  const [productList, setProductList] = useState([])
  const [totalPage, setTotalPage] = useState(0)
  const [visibleModal, setVisibleModal] = useState(false)
  const [visibleModalBookmark, setVisibleModalBookmark] = useState(false)
  const [visibleModalError, setVisibleModalError] = useState(false)
  const [productName, setProductName] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const [loadMore, setLoadMore] = useState(false)
  const handleClose = () => setVisibleModal(false)
  const handleOpen = () => setVisibleModal(true)
  const handleCloseBookmark = () => setVisibleModalBookmark(false)
  const handleOpenBookmark = () => setVisibleModalBookmark(true)
  const handleCloseError = () => setVisibleModalError(false)
  console.log('product list', productList)

  useEffect(() => {
    getProductList(page)
  }, [page])
  const getProductList = async (page) => {
    setLoading(true)
    setError(false)
    try {
      const params = {
        page: page,
      }
      const res = await axios.get(`${BASE_URL}/list?page=${params.page}`)
      if (res.status === 200) {
        console.log('result', res)
        const products = res.data.value.products
        setTotalPage(Math.ceil(res.data.value.totalCount / 20))
        setProductList(prevProductList => {
          return [...prevProductList, ...products]
        })
        setLoadMore(page !== totalPage) // check if there's still data to load
        setLoading(false)
      }
    } catch (error) {
      alert('cannot fetch data', error)
      setError(true)
      setVisibleModalError(true)
    }
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
    productList, handleClickCart, visibleModal, handleClose, visibleModalBookmark,
    handleClickBookmark, handleCloseBookmark, productName, handleCloseError,
    loading, error, loadMore, totalPage
  }
}

export default useProductList