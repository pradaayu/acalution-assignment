import React, { useState, useRef, useCallback } from 'react'
import { Link } from 'react-router-dom'
import AddToCartButton from '../AddToCartButton'
import BookmarkButton from '../BookmarkButton'
import useProductList from './product-list.hooks'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Spinner from 'react-bootstrap/Spinner'
import MessageModal from '../MessageModal'

const ProductCard = () => {
  const [page, setPage] = useState(1)
  const observer = useRef()
  const {
    productList, productName,
    handleClickCart, handleClickBookmark,
    visibleModal, visibleModalBookmark,
    handleClose, handleCloseBookmark,
    visibleModalError, handleCloseError, 
    loading, error, loadMore, totalPage
  } = useProductList(page)
  const lastProductElementRef = useCallback(node => {
    // console.log('node', node)
    if (loading) return
    if (observer.current) observer.current.disconnect()
    observer.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && loadMore) {
        // console.log('visible')
        setPage(prevPage => prevPage + 1)
      }
    })
    if (node) observer.current.observe(node)
  }, [loading, loadMore]) 

  return (
    <>
      <Row className="justify-content-md-center">

        {productList.map((item, index) => {
          if (productList.length === index + 1) {
            return <Col ref={lastProductElementRef} value={item} key={index} md={4} sm={12} >
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
          } else {
            return  <Col value={item} key={index} md={4} sm={12} >
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
          }
        })}

        <div>
          {
            error &&
            <MessageModal
              visibleModal={visibleModalError}
              handleClose={handleCloseError}
              message="Cannot fetch data. Try again later."
              productName=""
              isSuccess={false}
            />
          }
        </div>

      </Row>

        {
          loading && 
          <Row className="text-center justify-content-center">
            <Spinner animation="grow"></Spinner>
            <Spinner animation="grow"></Spinner>
            <Spinner animation="grow"></Spinner>
          </Row>
        }

      {
        page === 1 && loadMore ?
        <Row className="text-center justify-content-center">
          <Button variant="flat">Load More</Button>
        </Row>
        :
        ''
      }

      <MessageModal
        visibleModal={visibleModalBookmark}
        handleClose={handleCloseBookmark}
        message="is bookmarked"
        productName={productName}
        isSuccess={true}
      />
      <MessageModal
        visibleModal={visibleModal}
        handleClose={handleClose}
        message="is added to cart"
        productName={productName}
        isSuccess={true}
      />
    </>
  )
}

export default ProductCard