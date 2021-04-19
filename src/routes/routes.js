import React from 'react'
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'
import ProductListPage from '../pages/ProductListPage'
import ProductDetailPage from  '../pages/ProductDetailPage'

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={ProductListPage}/>
        <Route path="/product/:id" exact component={ProductDetailPage}/>
      </Switch>
    </Router>
  )
}

export default Routes