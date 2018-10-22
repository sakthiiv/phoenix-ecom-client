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

class UserProductList extends React.Component {
  constructor() {
    super();
    this.state = { products: [
        {
         id:"1111",
          name: "TV",
          price: "18,000",
          category: "Electronics",
          description: "Tv Description goes here.",
          image: ""
        },
        {
          id:"2222",
          name: "Mobile",
          price: "10,000",
          category: "Electronics",
          description: "Mobile descriptions goes here.",
          image: ""
        },
        {
          id:"3333",
          name: "Toasters",
          price: "10,000",
          category: "Electronics",
          description: "Toasters descriptions goes here.",
          image: ""
        }
      ] };
  }

  componentDidMount() {
    // var myRequest = new Request(website);
    // let movies = [];
    // fetch(myRequest)
    //   .then(response => response.json())
    //   .then(data => {
    //     this.setState({ movies: data });
    //   });
    
  }
  redirectToPList = () => {
    alert('called');
    return <Redirect to='/product-detail' />
  }
  renderProducts(product, index) {
    // two albums at a time - the current and previous item
    let products = [this.state.products[index - 1], this.state.products[index]];

    return (
      <div className="columns" key={index}>
        {products.map((product, pIndex) => {
          return product ? (
            <ProductItem key={product.id} productItem = {product} redirectToPList={this.redirectToPList}/>
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
              {i % 2 ? <Row>{this.renderProducts(p,i)}</Row> : <div />}
            </div>
          );
        })}
      </div>
    );
  }
}

export default UserProductList;
