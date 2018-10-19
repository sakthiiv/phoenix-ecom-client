import React, { Component } from "react";
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
        <a href="" onClick={this.redirectToPList}>
            <div className="list-container" key={category.id}>
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
        </a>
    );
  }
}

export default Category;
