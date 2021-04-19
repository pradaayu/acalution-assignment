import React from 'react'
import Button from 'react-bootstrap/Button'

const AddToCartButton = () => {
  return (
    <Button onClick="handleClickButton" style={{backgroundColor: '#CC9600', borderColor: 'transparent'}}>ADD TO CART</Button>
  )
}

export default AddToCartButton