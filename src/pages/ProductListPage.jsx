import React from 'react'
import NavBar from '../components/NavBar'
import ProductListCard from '../components/productlist/ProductListCard'

const MainPage = () => {
  // useProductList()
  return (
    <>
      <div>
        <div>
          <NavBar/>
          <ProductListCard/>
        </div>
      </div>
    </>
  )
}

export default MainPage