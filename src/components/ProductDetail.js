import React, { Component } from "react";
import {
  Card,
  CardText,
  CardBody,
  Row,
  Col
} from "reactstrap";

class ProductDetail extends React.Component {
  constructor() {
    super();
  }
  
  render() {
    
    const {match, data} = this.props;
    const { product } = this.props.location.state
    return (
        <div>
            <h1>{product.name}</h1>
        </div>
    );
  }
}

export default ProductDetail;
