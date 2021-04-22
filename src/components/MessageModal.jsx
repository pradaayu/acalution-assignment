import React from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

const MessageModal = (props) => {
  const { visibleModal, handleClose, message, productName, isSuccess } = props
  return (
    <>
      <Modal show={visibleModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            {isSuccess ? 'Success' : 'Error'}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* {productName} {message} */}
          {isSuccess ? `${productName} ${message}` : `${message}`}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default MessageModal