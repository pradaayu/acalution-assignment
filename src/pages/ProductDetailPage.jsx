import React from 'react'
import { useParams } from 'react-router-dom'
import ProductDetailCard from '../components/productdetail/ProductDetailCard'
import NavBar from '../components/NavBar'

const ProductDetailPage = () => {
  const { id } = useParams()
  return (
    <>
      <NavBar/>
      <div style={{justifyContent: 'center', marginTop: '142px'}}>
        <ProductDetailCard id={id}/>
      </div>
    </>
  )
}

export default ProductDetailPage