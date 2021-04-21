import React from 'react'
import AddToCartButton from '../AddToCartButton'
import BookmarkButton from '../BookmarkButton'
import { useEffect } from 'react'
import { Col } from 'react-bootstrap'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'
import useProductDetail from './product-detail.hooks'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWineBottle } from '@fortawesome/free-solid-svg-icons'

const ProductDetailCard = ({id}) => {
  const { productDetail } = useProductDetail(id)

  return (
    <>
      <Row className="p-3 mx-5">
        <Col className="text-center" md={3} lg={3}>
          <img style={{width: '50%'}} src={productDetail.image}/>
        </Col>
        <Col md={9} lg={9}>
          <div className="h3">{productDetail.name}</div>
          <div className="h5">
            {productDetail.grapeVarieties}, {productDetail.vintageYear === 0 ? '' : productDetail.vintageYear}
          </div>
          <div className="text-right">
            <FontAwesomeIcon icon={productDetail.qty <= 5 ? faWineBottle : ''} color="#CC962C" size="2x"/>
            <div>
              {productDetail.qty <= 5 ? `${productDetail.qty} BOTTLES LEFT` : ''}
            </div>
          </div>
          <Row>
            <Col>
              <div className="h5">
                S$ {productDetail.price}
              </div>
            </Col>
            <Col>
              <Row>
                <Col>
                  <AddToCartButton/>
                </Col>
                <Col>
                  <BookmarkButton/>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row>
            <Col>
              <div>Region</div>
              <div>{productDetail.country}, {productDetail.region}</div>
            </Col>
            <Col>
              <div>Producer</div>
              <div>{productDetail.producer}</div>
            </Col>
            <Col>
              <div>Bottle</div>
              <div>{productDetail.bottleSize}ml</div>
            </Col>
            <Col>
              <div>Alcohol</div>
              <div>{productDetail.alcohol}%</div>
            </Col>
          </Row>
          <div>
            <div>Description</div>
            <div>{productDetail.description}</div>
          </div>
          <div>
            <div>Tasting Notes</div>
            <div>{productDetail.tastingNotes}</div>
          </div>
        </Col>
      </Row>
    </>
// alcohol: "13.5"
// bottleSize: "750"
// country: "France"
// description: "Grape Variety:  50% Tannat, 26% Cabernet Sauvignon and 24% Cabernet Franc"
// grapeVarieties: "Cabernet Franc, Cabernet Sauvignon, Tannat"
// id: "263579"
// image: "https://portal.wine.delivery/media/catalog/product/2/6/263579_alain_brumont_chateau_bouscasse_2014.jpg"
// name: "Alain Brumont Château Bouscassé"
// price: 70
// producer: "Alain Brumont"
// qty: 0
// region: "Madiran"
// tastingNotes: "Emblematic wine of the house that combines harmony in power, a delicate fruity with aromas of blackberries on well-melted tannins and a fleshy mouth. It is a wine that knows how to stay young, with a gradual evolution and therefore a good potential of guard.
// ↵
// ↵Wine Enthusiast - 
// ↵"Bouscassé is the home of Alain Brumont who also owns Château Montus in Madiran. This powerful wine with its blend of Tannat with the two Cabernets (Franc and Sauvignon) is dense and packed with firm tannins. It is also equally full of generous black-plum fruits and considerable acidity.""
// type: "Red Wine"
// vintageYear: "2014"
  )
}

export default ProductDetailCard