import React, { Component } from "react";
import cart from "../api/cart";
import { Link } from "react-router-dom";
import ProductItem from "./ProductItem";
import sessionstorage from "../helpers/sessionstorage";
class ShoppingCart extends React.Component {
  state = {
    products: []
  };
  handleChange = e => {
      this.setState({ [e.target.name]: e.target.value });
  };

  async componentDidMount() {
    const  user  = sessionstorage.getItemFromSession('user');
    if (user && user.userId) {
      await this.fetchCartList(user.userId);
    }
  }

  fetchCartList = userId => {
    cart
     .cartGetDetails(userId)
     .then(responseJson => {
       this.setState({ products: responseJson.products });
     })
     .catch(error => {
       console.log(error);
     });
  }

  render() {
    let { products } = this.state;
    let prodList = products.map((product, i) => (
        <div className="col-sm-4"><ProductItem key={product.id} productItem={product} showDelete='true'/></div>
    ));
    return (
      <div>
            <h1 style={{marginLeft:"20px"}}>Shopping cart</h1>
            <div className="col-md-12 plist_container" style={{marginTop:"40px"}}>
                {prodList.length !== 0 ? <div>
                  <Link to={{ pathname: '/checkout', state: { products: products} }} className="btn btn-primary" style={{marginBottom:"30px", float:"right",marginRight:"50px"}}>
                    Proceed to checkout
                  </Link>
                  <div className="clearfix plist_container" style={{float:"left"}}>{prodList}</div>
                </div>: <h2 style={{color:"red"}} >No products in the cart</h2>}
            </div>
            
      </div>
    );
  }
}

export default ShoppingCart;