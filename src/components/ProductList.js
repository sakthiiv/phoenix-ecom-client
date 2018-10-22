import React, { Component } from "react";
import product from "../api/product";
import { Card, CardText, CardBody, Row, Col } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class ProductList extends React.Component {
  constructor() {
    super();
    this.state = { products: [] };
  }

  async componentDidMount() {
    const products = await product.getAll();
    this.setState({ products });
  }

  renderProducts(index) {
    // two albums at a time - the current and previous item
    let products = [this.state.products[index - 1], this.state.products[index]];

    return (
      <div className="columns" key={index}>
        {products.map((product, pIndex) => {
          return product ? (
            <Col sm="6" key={"product_col_" + pIndex}>
              <Card>
                <CardBody>
                  <div className="cart-title-container">
                    <div className="cart-title-left">
                      <h3>{product.name}</h3>
                      <h5>{product.category}</h5>
                    </div>
                    <div className="cart-title-right">
                      <FontAwesomeIcon className="fa-lg" icon="times" />
                    </div>
                  </div>
                </CardBody>
                <CardBody className="card-body">
                  <CardText>{product.description}</CardText>
                </CardBody>
              </Card>
            </Col>
          ) : (
            <div />
          );
        })}
      </div>
    );
  }

  render() {
    return (
      <div>
        {this.state.products.map((p, i) => {
          return (
            <div className="list-container" key={i}>
              {i % 2 ? <Row>{this.renderProducts(i)}</Row> : <div />}
            </div>
          );
        })}
      </div>
    );
  }
}

export default ProductList;
