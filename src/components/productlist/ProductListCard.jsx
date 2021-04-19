import React from 'react'
import AddToCartButton from '../AddToCartButton'
import useProductList from './product-list.hooks'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const ProductCard = () => {
  const { productList, handleClickProduct } = useProductList()

  return (
    <div>
      <Row className="justify-content-md-center">
        {productList.map((item, index) => (
          <Col md={4} value={item} key={index}>
            <div>
              <img style={{width: '50%'}} src={item.image} alt="bottle"/>
            </div>
            <h6>{item.name} {item.vintageYear !== 0 ? item.vintageYear : 'Non-Vintage'}</h6>
            <div>{item.country} | {item.region}</div>
            <div>{item.grapeVarieties}</div>
            <div>S${item.price}</div>
            <div style={{display: 'flex'}}>
              <AddToCartButton productData={item}/>
              <button type="button">Save</button>
            </div>
          </Col>
        ))}
      </Row>
    </div>
//     alcohol: "13.5"
// bottleSize: "750"
// country: "France"
// grapeVarietes: "Cabernet Franc, Cabernet Sauvignon, Tannat"
// id: "263579"
// image: "https://portal.wine.delivery/media/catalog/product/2/6/263579_alain_brumont_chateau_bouscasse_2014.jpg"
// name: "Alain Brumont Château Bouscassé"
// price: 70
// producer: "Alain Brumont"
// qty: 0
// region: "Madiran"
// type: "Red Wine"
// vintageYear: "2014"
  )
}

export default ProductCard