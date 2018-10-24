import React, { Component } from "react";
import { Redirect, Link } from "react-router-dom";
import {
  Card,
  CardText,
  CardBody,
  Row,
  Col
} from "reactstrap";

class Category extends React.Component {
  constructor() {
    super();
    // this.state = { categories: [] };
  }

  componentDidMount() {
    
  }
  redirectToPList = (e) => {
    e.preventDefault();
  }
  render() {
    const {category} = this.props; 
    return (
        <Link to={{ pathname: '/userproductList', state: { category: category} }}>
            <div className="list-container cat-list" key={category.id}>
                <Row>
                    <Col sm="12">
                        <Card>
                            <CardBody>
                                <div className="cart-title-container">
                                    <div className="cart-title-left">
                                        <h3>{category.name}</h3>
                                    </div>
                                </div>
                            </CardBody>
                            <CardBody className="card-body">
                                <CardText>{category.description}</CardText>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </div>
        </Link>
    );
  }
}

export default Category;
