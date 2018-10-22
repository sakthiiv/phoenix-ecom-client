import React, { Component } from "react";
import category from "../api/category";
import { Card, CardText, CardBody, Row, Col } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class CategoryList extends React.Component {
  constructor() {
    super();
    this.state = { categories: [] };
  }

  async componentDidMount() {
    const categories = await category.getAll();
    this.setState({ categories });
  }

  render() {
    return (
      <div>
        {this.state.categories.map((c, i) => {
          return (
            <div className="list-container" key={i}>
              <Row>
                <Col sm="12">
                  <Card>
                    <CardBody>
                      <div className="cart-title-container">
                        <div className="cart-title-left">
                          <h3>{c.name}</h3>
                        </div>
                        <div className="cart-title-right">
                          <FontAwesomeIcon className="fa-lg" icon="times" />
                        </div>
                      </div>
                    </CardBody>
                    {/* <CardImg
                      top
                      width="100%"
                      src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180"
                      alt="Card image cap"
                    /> */}
                    <CardBody className="card-body">
                      <CardText>{c.description}</CardText>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </div>
          );
        })}
      </div>
    );
  }
}

export default CategoryList;
