import React from 'react'
import ProductDetailCard from '../components/productdetail/ProductDetailCard'
import NavBar from '../components/NavBar'

const ProductDetailPage = () => {
  return (
    <>
      <NavBar/>
      <div style={{justifyContent: 'center', marginTop: '142px'}}>
        <ProductDetailCard/>
      </div>
    </>
  )
}

export default ProductDetailPage