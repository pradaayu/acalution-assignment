import {useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'
import { BASE_URL } from '../../constants'
// https://zax5j10412.execute-api.ap-southeast-1.amazonaws.com/dev/api/product/list?page=${currentPage}
// https://zax5j10412.execute-api.ap-southeast-1.amazonaws.com/dev/api/product/${id}

const useProductList = () => {
  const [productList, setProductList] = useState([]);
  console.log('product list', productList)

  const history = useHistory()

  useEffect(() => {
    getProductList(1)
  }, [])
  const getProductList = async (page) => {
    const res = await axios.get(`${BASE_URL}/list?page=${page}`)
    if (res.status === 200) {
      const products = res.data.value.products
      setProductList(products)
    } else alert('cannot fetch data')
  }
  const handleClickProduct = (id) =>{ 
    let path = `/product/${id}`
    history.push(path)
  }
  return {
    productList, handleClickProduct
  }
}

export default useProductList