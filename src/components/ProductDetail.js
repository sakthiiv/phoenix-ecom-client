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
    // console.log(p)
    const {match, data} = this.props;
    const { product } = this.props.location.state
    return (
        <div className="clearfix">
            <div className="col-sm-6">  
              <picture>
                <img src={"http://10.132.20.169:8080/api/v1/image/" + product.id + ".jpg"}/>
              </picture>
            </div>
            
            <div className="col-sm-6"> 
              <h1>{product.name}</h1>
              <p>{product.description}</p>
              <h2>{product.price}$</h2>
              <div className="form-group">
                <input
                  type="button"
                  value="Add to cart"
                  className="btn-success"
                />
              </div>
            </div>
        </div>
    );
  }
}

export default ProductDetail;
