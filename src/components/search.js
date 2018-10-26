import React, { Component } from "react";
import search from "../api/search";
import { Link } from "react-router-dom";
import ProductItem from "./ProductItem";
class Search extends React.Component {
  state = {
    search: null,
    products: []
  };
  handleChange = e => {
      this.setState({ [e.target.name]: e.target.value });
  };
  handleSubmit = e => {
    e.preventDefault();
    const searchKeyword = this.state.search
    search
        .searchGet(searchKeyword)
        .then(responseJson => {
            this.setState({ products: responseJson });
        })
        .catch(error => {
            console.log(error);
        });
  };
  render() {
    let { products } = this.state;
    let prodList = products.map((product, i) => (
        <div className="col-sm-4"><ProductItem key={product.id} productItem={product} /></div>
    ));
    return (
      <div>
            <h1 style={{marginLeft:"20px"}}>Search the product</h1>
            <form onSubmit={this.handleSubmit} onChange={this.handleChange} className="col-sm-6">
              <div className="form-group">
                <input
                  id="search"
                  name="search"
                  type="text"
                  placeholder="Enter name of the product"
                  className="form-control"
                  required
                />
              </div>
              <input type="submit" value="Submit" />
            </form>
            <div className="col-md-12 plist_container" style={{marginTop:"40px"}}>
                {prodList}
            </div>
          
      </div>
    );
  }
}
export default Search;
