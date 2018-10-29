import React, { Component } from "react";
import checkout from "../api/checkout";
import { Link } from "react-router-dom";
import cart from "../api/cart";
import sessionstorage from "../helpers/sessionstorage";


class Checkout extends React.Component {
  state = {
    address:'',
    orderConfirmation:'', 
    products:[]
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


  handleSubmit = (e) => {
    e.preventDefault();
    const address = this.state.address;
    checkout
      .proceedToCheckout(address)
      .then(responseJson => {
        console.log(responseJson);
        this.setState({ showModal: false , orderConfirmation:responseJson.message, products:[]});
        // window.location.reload();
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    let { orderConfirmation , products} = this.state;
    // let {products} = this.props.location.state;
    let prodList = products.map((product, i) => (
        <li>
            <picture>
                <img style={{width:'100%'}}src={"http://10.134.20.223:8080/api/v1/image/" + product.id + ".jpg"}/>
            </picture>
            <div>
                <p>{product.name}</p>
                <p>${product.price}</p>
            </div>
        </li>
    ));
    let calculateTotal = products.reduce((a, b) => {
        return +a + +b.price;
    },0)
    return (
    
      <div className="col-sm-12">

        {!orderConfirmation && products.length != 0 ? <div className="col-sm-12">
            <div className="col-sm-6">
                <form onSubmit={this.handleSubmit} onChange={this.handleChange}>
                    <div className="form-group">
                        <label htmlFor="description">
                        Enter the shipping and billing address.
                        </label>
                        <textarea
                        className="form-control"
                        name="address"
                        id="address"
                        rows="3"
                        required
                        />
                    </div>
                    <input type="submit" value="Submit" className="btn btn-success" />
                </form>
            </div>
            <div className="col-sm-6">
                <ul className="product_list_checkout">
                    {prodList}
                </ul>
                <h4 className="total_amount">Total:  ${calculateTotal}</h4>
            </div>
        </div> : <h4>{!orderConfirmation && products.length === 0 ? <h4>No products available. Add atleast</h4>:<h5>{orderConfirmation}<br/><br/><Link to="/" style={{fontSize:"30px", color: "blue"}}>Got to home</Link></h5>}</h4>}
      </div>
    );
  }
}
export default Checkout;
