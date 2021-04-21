import React from 'react'
import { Link } from 'react-router-dom'
import AddToCartButton from '../AddToCartButton'
import BookmarkButton from '../BookmarkButton'
import useProductList from './product-list.hooks'
import Toast from 'react-bootstrap/Toast'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import MessageModal from '../MessageModal'

const ProductCard = () => {
  const {
    productList, handleClickCart, visibleModal, handleClose, visibleModalBookmark, handleClickBookmark, handleCloseBookmark, productName
  } = useProductList()

  return (
    <div>
      <Row className="justify-content-md-center">
        {productList.map((item, index) => (
          <Col md={4} sm={12} value={item} key={index}>
            <Link to={`product/${item.id}`}>
              <Row className="mb-5">
                <Col className="justify-content-md-center" md={3}>
                  <div>
                    <img style={{minWidth: '80px'}} className="img-fluid" src={item.image} alt="bottle"/>
                  </div>
                </Col>
                <Col>
                  <div style={{height: '150px'}}>
                    <div style={{height: '120px', overflow: 'hidden'}}>
                      <div className="h5" style={{color: '#842529'}}>{item.name} {item.vintageYear !== 0 ? item.vintageYear : ''}</div>
                      <div>{item.type} | {item.grapeVarietes}</div>
                      <div>{item.vintageYear === 0 ? 'Non Vintage' : ''}</div>
                      <div>{item.country}, {item.region}</div>
                    </div>
                    <div className="h5">S${item.price}</div>
                  </div>
                  <Row className="ml-1">
                    <AddToCartButton handleClickButton={(e) => handleClickCart(item.name, e)} textSize="12px"/>                    
                    <BookmarkButton handleClickButton={(e) => handleClickBookmark(item.name, e)}/>
                  </Row>
                </Col>
              </Row>
            </Link>
          </Col>
        ))}
      </Row>
      <MessageModal
        visibleModal={visibleModalBookmark}
        handleClose={handleCloseBookmark}
        message="is bookmarked"
        productName={productName}
      />
      <MessageModal
        visibleModal={visibleModal}
        handleClose={handleClose}
        message="is added to cart"
        productName={productName}
      />
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