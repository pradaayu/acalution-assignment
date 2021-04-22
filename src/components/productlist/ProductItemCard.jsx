import React from 'react'
import { Link } from 'react-router-dom'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import AddToCartButton from '../AddToCartButton'
import BookmarkButton from '../BookmarkButton'
import MessageModal from '../MessageModal'
import useModal from '../compability/modal.hooks'

const ProductItemCard = (item) => {
  const {
    productName,
    handleClickCart, handleClickBookmark,
    visibleModal, visibleModalBookmark,
    handleClose, handleCloseBookmark
  } = useModal()
  return (
      <Link to={`product/${item.item.id}`}>
        <Row className="mb-5">
          <Col className="justify-content-md-center" md={3}>
            <div>
              <img style={{minWidth: '80px'}} className="img-fluid" src={item.image} alt="bottle"/>
            </div>
          </Col>
          <Col>
            <div style={{height: '160px'}}>
              <div style={{height: '120px', overflow: 'hidden'}}>
                <div className="h5" style={{color: '#842529'}}>{item.name} {item.vintageYear !== 0 ? item.vintageYear : ''}</div>
                <div style={{color: '#313131'}}>{item.type} | {item.grapeVarietes}</div>
                <div style={{color: '#313131'}}>{item.vintageYear === 0 ? 'Non Vintage' : ''}</div>
                <div style={{color: '#313131'}}>{item.country}, {item.region}</div>
              </div>
              <Row className="mt-2" style={{height: '55px'}}>
                <Col md={7} className="text-left">
                  <div style={{color: '#242424'}} className="h5">S${item.price}</div>
                </Col>
                  {
                    item.qty <= 5 ?
                    <div className='text-center py-1 mt-n3'
                      style={{
                        backgroundColor: '#CC962C', color: 'white',
                        borderRadius: '50%', fontSize: '12px', height: '50px', width: '50px'
                      }}
                    >
                      <span>{item.qty}<br/>Left</span>
                    </div>
                      : ''
                  }
              </Row>
            </div>
            <Row className="ml-1">
              {/* <AddToCartButton handleClickButton={(e) => handleClickCart(item.name, e)} textSize="12px"/>                    
              <BookmarkButton handleClickButton={(e) => handleClickBookmark(item.name, e)}/> */}
            </Row>
          </Col>
        </Row>
      </Link>
  )
}

export default ProductItemCard