import React from 'react'
import AddToCartButton from '../AddToCartButton'
import BookmarkButton from '../BookmarkButton'
import { Col } from 'react-bootstrap'
import Row from 'react-bootstrap/Row'
import Card from 'react-bootstrap/Card'
import useProductDetail from './product-detail.hooks'
import useProductList from '../productlist/product-list.hooks'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWineBottle } from '@fortawesome/free-solid-svg-icons'
import MessageModal from '../MessageModal'

const ProductDetailCard = ({id}) => {
  const { productDetail } = useProductDetail(id)
  const {
    productName, loading, error,
    handleClickCart, handleClickBookmark,
    visibleModal, visibleModalBookmark,
    handleClose, handleCloseBookmark,
    visibleModalError, handleCloseError
  } = useProductList()

  const quantity = () => {
    if (productDetail.qty <= 5 && productDetail.qty > 0) {
      return <>
        <FontAwesomeIcon icon={faWineBottle} color="#CC962C" size="2x"/>
        <div style={{fontSize: '12px'}}>
          {`${productDetail.qty} BOTTLES LEFT`}
        </div>
      </>
    } else if (productDetail.qty === 0) {
      return <>
        <FontAwesomeIcon icon={faWineBottle} color="#CC962C" size="2x"/>
        <div style={{fontSize: '12px'}}>
          OUT OF STOCK
        </div>  
      </>
    } else return ''
  }

  return (
    <Card>
      <Row className="p-3 mx-5">
        <Col className="text-center align-middle" md={3} lg={3}>
          <img style={{width: '60%'}} src={productDetail.image}/>
        </Col>
        <Col md={9} lg={9}>
          <div className="h3">{productDetail.name}</div>
          <div className="h5">
            {productDetail.grapeVarieties}, {productDetail.vintageYear === 0 ? '' : productDetail.vintageYear}
          </div>
          <div className="my-4">
            { quantity() }
          </div>
          <Row className="mb-4">
            <Col>
              <div className="h5">
                S$ {productDetail.price}
              </div>
            </Col>
            <Col>
              <Row>
                <AddToCartButton handleClickButton={(e) => handleClickCart(productDetail.name, e)} textSize="12px"/>
                <BookmarkButton handleClickButton={(e) => handleClickBookmark(productDetail.name, e)}/>
              </Row>
            </Col>
          </Row>
          <Card>
            <Row className="mb-4">
              <Col>
                <div style={{color: '#CC962C'}}>Region</div>
                <div>{productDetail.country}, {productDetail.region}</div>
              </Col>
              <Col>
                <div style={{color: '#CC962C'}}>Producer</div>
                <div>{productDetail.producer}</div>
              </Col>
              <Col>
                <div style={{color: '#CC962C'}}>Bottle</div>
                <div>{productDetail.bottleSize}ml</div>
              </Col>
              <Col>
                <div style={{color: '#CC962C'}}>Alcohol</div>
                <div>{productDetail.alcohol}%</div>
              </Col>
            </Row>
          </Card>
          <div className="mb-4">
            <div style={{color: '#CC962C'}}>Description</div>
            <div>{productDetail.description}</div>
          </div>
          <div>
            <div style={{color: '#CC962C'}}>Tasting Notes</div>
            <div>{productDetail.tastingNotes}</div>
          </div>
        </Col>
      </Row>
      <MessageModal
        visibleModal={visibleModal}
        handleClose={handleClose}
        message="is added to cart"
        productName={productName}
        isSuccess={true}
      />
      <MessageModal
        visibleModal={visibleModalBookmark}
        handleClose={handleCloseBookmark}
        message="is bookmarked"
        productName={productName}
        isSuccess={true}
      />
    </Card>
  )
}

export default ProductDetailCard