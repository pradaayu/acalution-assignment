import { useEffect, useState } from 'react'
import axios from 'axios'
import { BASE_URL } from '../../constants'

const useProductDetail = () => {
  const [productDetail, setProductDetail] = useState({})
  console.log('product detail', productDetail)
  useEffect(() => {
    getProductDetail(268281)
  }, [])

  const getProductDetail = async (id) => {
    const res = await axios.get(`${BASE_URL}/${id}`)
    const productDetail = res
    setProductDetail(productDetail.value)
    // console.log('product detail', productDetail)
  }
  return {
    productDetail
  }
}

export default useProductDetail