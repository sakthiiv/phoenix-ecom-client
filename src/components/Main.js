import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './Home'
import Admin from './Admin'
import CreateCategory from './CreateCategory'
import CreateProduct from './CreateProduct'

const Main = () => (
  <main>
    <Switch>
      <Route exact={true} path='/' component={Home}/>
      <Route exact={true} path='/admin' component={Admin}/>
      <Route exact={true} path='/create-category' component={CreateCategory}/>
      <Route exact={true} path='/create-product' component={CreateProduct}/>
    </Switch>
  </main>
)

export default Main
