import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  Row,
  Col
} from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ProductItem from "./ProductItem";
import product from "../api/product";

class UserProductList extends React.Component {
  constructor() {
    super();
    this.state = { products: [] };
  }

  componentDidMount() {
    const { category } = this.props.location.state;
    if (category.id) {
      this.fetchProductList(category.id);
    }
  }

  renderProducts() {
    // two albums at a time - the current and previous item
    // let products = [this.state.products[index - 1], this.state.products[index]];

    return (
      <div className="columns" key={index}>
        {products.map((product, pIndex) => {
          return product ? (
            <ProductItem key={product.id} productItem={product} />
          ) : (
            <div />
          );
        })}
      </div>
    );
  }

  fetchProductList = categoryId => {
    product
      .getAllByCatId(categoryId)
      .then(responseJson => {
        this.setState({ products: responseJson });
      })
      .catch(error => {
        console.log(error);
      });
  }
  
  render() {
    const {products} = this.state;
    let prodList = products.map((product, i) => (
      <div className="col-sm-4"><ProductItem key={product.id} productItem={product} /></div>
    ));
    return (
      <div>
        {products.length === 0 ? <h1>Something went wrong!</h1>:''}
        {prodList}
      </div>
    );
  }
}
export default UserProductList;