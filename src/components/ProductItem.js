import React, { Component } from "react";
import { Redirect, Link } from "react-router-dom";
import {
  Card,
  CardText,
  CardBody,
  Row,
  Col
} from "reactstrap";
import cart from "../api/cart";
import sessionstorage from "../helpers/sessionstorage";
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


  deleteFromCart = () => {
    const  user  = sessionstorage.getItemFromSession('user');

    if (user && user.userId) {
       this.deleteItemFromCart(user.userId, this.props.productItem);
    }
  }
  deleteItemFromCart = (userId, productItem) => {
    const productToDelete = [productItem.id];
    cart.deleteFromCart(productToDelete)
      .then(responseJson => {
        // this.props.statusRegister(true);
        console.log(responseJson.message);
        // this.setState({successMessage:responseJson.message, productAdded: true});
        window.location.reload();
      })
      .catch(error => {
        this.setState({successMessage:'some error occured'})
        console.log(error);
      });
  }
  render() {
    const {productItem, showDelete} = this.props; 
    return (
        <div>
        <Link to={{ pathname: '/product-detail', state: { product: productItem} }}>
            <div className="list-container prod-list" key={productItem.id}>
                <Row>
                    <Col sm="12">
                        <Card>
                            <picture className="img-product">
                                <img src={"http://10.132.20.169:8080/api/v1/image/" + productItem.id + ".jpg"}/>
                            </picture>
                            <div className="prod-body-container">
                                <CardBody>
                                    <div className="cart-title-container">
                                        <div className="cart-title-left">
                                            <h3>{productItem.name}</h3>
                                            <p>${productItem.price}</p>
                                            
                                        </div>
                                    </div>
                                </CardBody>
                            </div>
                        </Card>
                    </Col>
                </Row>
            </div>
        </Link>
        {showDelete === 'true' ? 
        <div className="form-group delete-product">
            <input
            type="button"
            value="Delete Item"
            className="btn btn-danger"
            onClick={this.deleteFromCart}
            />
        </div> :''}
        </div>
    );
  }
}

export default ProductItem;
