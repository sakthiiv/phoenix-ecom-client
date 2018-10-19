import React, { Component } from "react";
import {
  Card,
  CardText,
  CardBody,
  Row,
  Col
} from "reactstrap";

class ProductItem extends React.Component {
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
    const {productItem} = this.props; 
    return (
        <a href="" onClick={this.redirectToPList}>
            <div className="list-container" key={productItem.id}>
                <Row>
                    <h3>Peroduct Item</h3>
                    <Col sm="12">
                        <Card>
                            <CardBody>
                                <div className="cart-title-container">
                                    <div className="cart-title-left">
                                        <h3>{productItem.name}</h3>
                                    </div>
                                </div>
                            </CardBody>
                            <CardBody className="card-body">
                                <CardText>{productItem.description}</CardText>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </div>
        </a>
    );
  }
}

export default ProductItem;
