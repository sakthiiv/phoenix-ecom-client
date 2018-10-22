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
    this.state = { products: null };
  }

  componentDidMount() {
    const { category } = this.props.location.state;
    if (category.id) {
      this.fetchProductList(category.id);
    }
  }

  renderProducts(product, index) {
    // two albums at a time - the current and previous item
    let products = [this.state.products[index - 1], this.state.products[index]];

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
  };
  render() {
    return (
      <div>
        {this.state.products &&
          this.state.products.map((p, i) => {
            return (
              <div className="list-container" key={i}>
                {i % 2 ? <Row>{this.renderProducts(p, i)}</Row> : <div />}
              </div>
            );
          })}
      </div>
    );
  }
}

export default UserProductList;
