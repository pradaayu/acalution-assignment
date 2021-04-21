import React from 'react'
import Button from 'react-bootstrap/Button'

const AddToCartButton = ({handleClickButton, textSize}) => {
  return (
    <Button
      onClick={handleClickButton}
      variant="flat"
      className="py-0"
      style={{
        backgroundColor: '#CC962C',
        borderColor: 'transparent',
        fontSize: textSize, color: 'white',
        height: '42px'
      }}
    >
      ADD TO CART
    </Button>
  )
}

export default AddToCartButton