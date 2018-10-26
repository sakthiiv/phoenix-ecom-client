import React, { Component } from "react";
import {
  Card,
  CardText,
  CardBody,
  Row,
  Col
} from "reactstrap";
import cart from "../api/cart";
import sessionstorage from "../helpers/sessionstorage";
class ProductDetail extends React.Component {
  constructor() {
    super();
    this.state = {
      productAdded: false,
      successMessage:''
    }
  }
  addToCart = () => {
    const {product} = this.props.location.state
    const  user  = sessionstorage.getItemFromSession('user');

    if (user && user.userId) {
       this.addToCartCall(user.userId, product);
    }
  }

  addToCartCall = (userId, product) => {
    const productToPush = {
      "userId":userId,
      "products":[
        product
      ]
    }
   
    cart.addToCart(productToPush)
      .then(responseJson => {
        // this.props.statusRegister(true);
        console.log(responseJson.message);
        this.setState({successMessage:responseJson.message, productAdded: true});
        alert('Product added to Cart');
        window.location.reload();
      })
      .catch(error => {
        this.setState({successMessage:'some error occured'})
        console.log(error);
      });

  }
  render() {
    const { product } = this.props.location.state;
    const { productAdded,successMessage } =  this.state;
    return (
        <div className="clearfix">
            <div className="col-sm-6">  
              <picture>
                <img style={{width:'100%'}}src={"http://10.132.20.169:8080/api/v1/image/" + product.id + ".jpg"}/>
              </picture>
            </div>
            
            <div className="col-sm-6"> 
              <h1>{product.name}</h1>
              <p>{product.description}</p>
              <h2>${product.price}</h2>
              <div className="form-group">
                <input
                  type="button"
                  value="Add to cart"
                  className="btn btn-success"
                  onClick={this.addToCart}
                />
              </div>
              <p>{productAdded ? successMessage: ''}</p>
            </div>
        </div>
    );
  }
}

export default ProductDetail;
