import { useEffect, useState } from 'react'
import axios from 'axios'
import { BASE_URL } from '../../constants'
import { useParams } from 'react-router-dom'

const useProductDetail = () => {
  const { id } = useParams()
  const [productDetail, setProductDetail] = useState({})
  const [loading, setLoading] = useState(false)
  const [visibleModalError, setVisibleModalError] = useState(false)
  const [error, setError] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  const handleCloseError = () => setVisibleModalError(false)
  useEffect(() => {
    getProductDetail(id)
  }, [id])

  const getProductDetail = async (id) => {
    setLoading(true)
    try {
      const res = await axios.get(`${BASE_URL}/${id}`)
      if (res.status === 200) {
      const productDetail = res.data
      setProductDetail(productDetail.value)
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
    productDetail, loading, error, errorMessage, visibleModalError, handleCloseError
  }
}

export default useProductDetail