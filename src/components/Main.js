import React from "react";
import { Switch, Route } from "react-router-dom";
import Admin from "./Admin";
import User from "./User";
import CreateCategory from "./CreateCategory";
import CreateProduct from "./CreateProduct";
import CategoryList from "./CategoryList";
import ProductList from "./ProductList";
import UserProductList from "./userProductList";
import ProductDetail from "./ProductDetail";
import Search from "./search";
import NoMatch from "./NoMatch";
import ShoppingCart from "./ShoppingCart";
import Checkout from "./Checkout";

const Main = () => (
  <div className="container">
    <main>
      <Switch>
        <Route exact={true} path="/" component={User} />
        <Route exact={true} path="/admin" component={Admin} />
        <Route exact={true} path="/userproductList" component={UserProductList} />
        <Route exact={true} path="/create-category" component={CreateCategory} />
        <Route exact={true} path="/create-product" component={CreateProduct} />
        <Route exact={true} path="/category-list" component={CategoryList} />
        <Route exact={true} path="/product-list" component={ProductList} />
        <Route exact={true} path="/product-detail" component={ProductDetail} />
        <Route exact={true} path="/shopping-cart" component={ShoppingCart} />
        <Route exact={true} path="/search" component={Search} />
        <Route exact={true} path="/checkout" component={Checkout} />
        <Route component={NoMatch} />
      </Switch>
    </main>
  </div>
);

export default Main;
