import React from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Row from 'react-bootstrap/Row'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
 
const NavBar = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand>
          <Row>
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAAAgAgMAAADf85YXAAAADFBMVEX//wDHn0nIoErHoEo3hQKbAAAABHRSTlMBTab61lgfAQAAAPxJREFUGBkFwbGRkEAAAMCFm5GAgDEzuw6eCgSKeGNLsAGRKwyVEq4EAgu44AJ+hn/cBSwAvEKb4PMr7BAyzM8/rNCdMD9PYoahwN38LUSIF1Sf3hkSxh1tYVv0B6YV4SRmIWOf0WVCEQquiOGgqVSaOiTigpuLUPqDEVZWuhwyv2Bioj9CYYcXRmJqKheMDMnIpakQ6Q8Tv4UTIl32k0mXYSScbkb9AS80panEZUgw4WoLfRrBV+zhpMsTuDH1B+FcoakYh0RbLggF8fuCtwpDxvABf8oXbAu6d9jytmg/INwwH+ObrUJbIabwPE8CBQZ+PBdwQo9vgAUawH8ZwGPET8bD/wAAAABJRU5ErkJggg==" alt="logo"/>
            <div>WINE.DELIVERY</div>
          </Row>
        </Navbar.Brand>
        <div>Tes</div>
        {/* <Nav>
          <Nav.Link >Sign Up</Nav.Link>
          <Nav.Link>Login</Nav.Link>
          <Nav.Link>Shopping Cart</Nav.Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-info">Search</Button>
        </Form> */}
      </Navbar>
    </div>
  )
}

export default NavBar