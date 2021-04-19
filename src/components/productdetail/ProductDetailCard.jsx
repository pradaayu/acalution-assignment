import React from 'react'
import { useEffect } from 'react'
import { Col } from 'react-bootstrap'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'
import useProductDetail from './product-detail.hooks'

const ProductDetailCard = ({id}) => {
  // const { productDetail } = useProductDetail(id)
  useEffect(() => {
    useProductDetail(268281)
  }, [])

  return (
    <>
      <Row>
        <Col md={3}>
          <img style={{width: '50%'}} src="https://portal.wine.delivery/media/catalog/product//2/6/267322_gran_predicat_2014_2.jpg"/>
        </Col>
        <Col>
          <div>Gran Predicat</div>
          <div>Carigan, Grenache 2014</div>
          <Row>
            <Col>S$ 45.00</Col>
            <Col>
              <Button>Add to Cart</Button>
            </Col>
          </Row>
          <Row>
            <Col>
              <div>Region</div>
              <div>France, Bordeaux</div>
            </Col>
            <Col>
              <div>Producer</div>
              <div>Grifoll Declara</div>
            </Col>
            <Col>
              <div>Bottle</div>
              <div>750ml</div>
            </Col>
            <Col>
              <div>Alcohol</div>
              <div>14%</div>
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  )
}

export default ProductDetailCard