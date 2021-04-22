import React, { useContext } from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Row from 'react-bootstrap/Row'
// import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import Badge from 'react-bootstrap/Badge'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faShoppingCart, faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { useLocation, useHistory } from 'react-router-dom'
import ModalContext from './compability/modal.context'
 
const NavBar = () => {
  const { pathname } = useLocation()
  const { countItem } = useContext(ModalContext)
  const history = useHistory()
  const goBack = () => { history.goBack()}
  const buttonCustom = () => {
    if (pathname.includes('product')) {
      return <Button onClick={goBack} variant="link"><FontAwesomeIcon icon={faArrowLeft} color="#CC962C" size="lg" /></Button>
    } else {
      return <Button variant="link"><FontAwesomeIcon icon={faBars} color="white" size="lg" /></Button>
    }
  }
  return (
    <div style={{marginBottom: '1rem'}}>
      <Navbar
        fixed="top"
        style={{backgroundColor: '#242424', justifyContent: 'center'}}
      >
        <div style={{textAlign: 'left', position: 'relative', left: '-5vw'}}>
          {buttonCustom()}
        </div>
        <Navbar.Brand>
          <Row>
            <img
              style={{height: '23px'}}
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAAAgAgMAAADf85YXAAAADFBMVEX//wDHn0nIoErHoEo3hQKbAAAABHRSTlMBTab61lgfAQAAAPxJREFUGBkFwbGRkEAAAMCFm5GAgDEzuw6eCgSKeGNLsAGRKwyVEq4EAgu44AJ+hn/cBSwAvEKb4PMr7BAyzM8/rNCdMD9PYoahwN38LUSIF1Sf3hkSxh1tYVv0B6YV4SRmIWOf0WVCEQquiOGgqVSaOiTigpuLUPqDEVZWuhwyv2Bioj9CYYcXRmJqKheMDMnIpakQ6Q8Tv4UTIl32k0mXYSScbkb9AS80panEZUgw4WoLfRrBV+zhpMsTuDH1B+FcoakYh0RbLggF8fuCtwpDxvABf8oXbAu6d9jytmg/INwwH+ObrUJbIabwPE8CBQZ+PBdwQo9vgAUawH8ZwGPET8bD/wAAAABJRU5ErkJggg=="
              alt="logo"
            />
            <div className="ml-1" style={{color: 'white', fontSize: '14px'}}>WINE.DELIVERY</div>
          </Row>
        </Navbar.Brand>
        <Form style={{width: '50vw', justifyContent: 'center'}} inline>
          <Row style={{background: '#3A3A3A'}}>
            <FormControl type="text" style={{background: '#3A3A3A', border: 'none', width: 'calc(50vw - 150px)'}} placeholder="Search in Wine.Delivery" />
            <Button style={{color: '#CC962C'}} type="link" variant="link">SEARCH</Button>
          </Row>
        </Form>   
        <Nav className="align-middle" style={{color: 'white', position: 'relative', right: '-5vw'}}>
          <Nav.Link ><div className="mr-3 pt-2" style={{color: 'white', fontSize: '14px'}}>SIGN UP</div></Nav.Link>
          <Nav.Link><div className="mr-3 pt-2" style={{color: 'white' , fontSize: '14px'}}>LOG IN</div></Nav.Link>
          <Nav.Link><div style={{color: 'white'}}>
            <Button variant="flat">
              <FontAwesomeIcon icon={faShoppingCart} color="white" size="1x"/>
              {
                countItem > 0 ? 
                <span className="bg-secondary">
                  <Badge>{countItem}</Badge>
                </span> : ''
              }
            </Button>
            {/* <FontAwesomeIcon icon={faShoppingCart} color="white" size="1x"/> */}
          </div></Nav.Link>
        </Nav>
      </Navbar>
    </div>
  )
}

export default NavBar