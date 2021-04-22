import {useEffect, useState } from 'react'
import axios from 'axios'
import { BASE_URL } from '../../constants'
// https://zax5j10412.execute-api.ap-southeast-1.amazonaws.com/dev/api/product/list?page=${currentPage}
// https://zax5j10412.execute-api.ap-southeast-1.amazonaws.com/dev/api/product/${id}

const useProductList = (page) => {
  const [productList, setProductList] = useState([])
  const [totalPage, setTotalPage] = useState(0)
  const [visibleModalError, setVisibleModalError] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  const [loadMore, setLoadMore] = useState(false)
  const handleCloseError = () => setVisibleModalError(false)
  // console.log('product list', productList)

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
        const products = res.data.value.products
        setTotalPage(Math.ceil(res.data.value.totalCount / 20))
        setProductList(prevProductList => {
          return [...prevProductList, ...products]
        })
        setLoadMore(page !== totalPage) // check if there's still data to load
        setLoading(false)
      }
    } catch (error) {
      setError(true)
      setErrorMessage(error)
      setVisibleModalError(true)
      setLoading(false)
    }
  }
  return {
    productList,handleCloseError, visibleModalError,
    errorMessage, loading, error, loadMore, totalPage
  }
}

export default useProductList