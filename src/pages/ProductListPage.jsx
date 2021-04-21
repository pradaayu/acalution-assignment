import React from 'react'
import NavBar from '../components/NavBar'
import ProductListCard from '../components/productlist/ProductListCard'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const MainPage = () => {
  // useProductList()
  return (
    <>
      <div>
        <div>
          <NavBar/>
          <Row style={{justifyContent: 'center', marginTop: '92px'}}>
            <Col md={9}>
              <ProductListCard/>
            </Col>
          </Row>
        </div>
      </div>
    </>
  )
}

export default MainPage