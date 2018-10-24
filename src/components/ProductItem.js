import React, { Component } from "react";
import { Redirect, Link } from "react-router-dom";
import {
  Card,
  CardText,
  CardBody,
  Row,
  Col
} from "reactstrap";

class ProductItem extends React.Component {
  constructor() {
    super();
    // this.state = { categories: [] };
  }

  componentDidMount() {
    
  }
  redirectToPList = (e) => {
    e.preventDefault();
    this.props.redirectToPList();
  }
  render() {
    const {productItem} = this.props; 
    return (
        <Link to={{ pathname: '/product-detail', state: { product: productItem} }}>
            <div className="list-container prod-list" key={productItem.id}>
                <Row>
                    <Col sm="12">
                        <Card>
                            <picture class="img-product">
                                <img src={"http://10.132.20.169:8080/api/v1/image/" + productItem.id + ".jpg"}/>
                            </picture>
                            <div class="prod-body-container">
                                <CardBody>
                                    <div className="cart-title-container">
                                        <div className="cart-title-left">
                                            <h3>{productItem.name}</h3>
                                            <p>{productItem.description}</p>
                                            <p>{productItem.price}$</p>
                                        </div>
                                    </div>
                                </CardBody>
                            </div>
                        </Card>
                    </Col>
                </Row>
            </div>
        </Link>
    );
  }
}

export default ProductItem;
