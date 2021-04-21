import { useEffect, useState } from 'react'
import axios from 'axios'
import { BASE_URL } from '../../constants'
import { useParams } from 'react-router-dom'

const useProductDetail = () => {
  const { id } = useParams()
  const [productDetail, setProductDetail] = useState({})
  console.log('product detail', productDetail)
  useEffect(() => {
    getProductDetail(id)
  }, [])

  const getProductDetail = async (id) => {
    const res = await axios.get(`${BASE_URL}/${id}`)
    const productDetail = res.data
    setProductDetail(productDetail.value)
    // console.log('product detail', productDetail)
  }
  return {
    productDetail
  }
}

export default useProductDetail