import React, { Component } from "react";
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

class ProductList extends React.Component {
  constructor() {
    super();
    this.state = { products: [] };
  }

  componentDidMount() {
    // var myRequest = new Request(website);
    // let movies = [];
    // fetch(myRequest)
    //   .then(response => response.json())
    //   .then(data => {
    //     this.setState({ movies: data });
    //   });
    this.setState({
      products: [
        {
          name: "TV",
          price: "18,000",
          category: "Electronics",
          description: "Tv Description goes here.",
          image: ""
        },
        {
          name: "Mobile",
          price: "10,000",
          category: "Electronics",
          description: "Mobile descriptions goes here.",
          image: ""
        },
        {
          name: "Toasters",
          price: "10,000",
          category: "Electronics",
          description: "Toasters descriptions goes here.",
          image: ""
        },
        {
          name: "T-Shirts",
          price: "",
          category: "Clothing",
          description: "Clothing descriptions goes here.",
          image: ""
        },
        {
          name: "Kids wear",
          price: "",
          category: "Clothing",
          description: "Clothing descriptions goes here.",
          image: ""
        }
      ]
    });
  }

  renderProducts(index) {
    // two albums at a time - the current and previous item
    let products = [this.state.products[index - 1], this.state.products[index]];

    return (
      <div className="columns" key={index}>
        {products.map(product => {
          return product ? (
            <Col sm="6">
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
