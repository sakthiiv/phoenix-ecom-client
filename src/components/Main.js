import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import Admin from "./Admin";
import CreateCategory from "./CreateCategory";
import CreateProduct from "./CreateProduct";
import CategoryList from "./CategoryList";
import ProductList from "./ProductList";

const Main = () => (
  <main>
    <Switch>
      <Route exact={true} path="/" component={Home} />
      <Route exact={true} path="/admin" component={Admin} />
      <Route exact={true} path="/create-category" component={CreateCategory} />
      <Route exact={true} path="/create-product" component={CreateProduct} />
      <Route exact={true} path="/category-list" component={CategoryList} />
      <Route exact={true} path="/product-list" component={ProductList} />
    </Switch>
  </main>
);

export default Main;
