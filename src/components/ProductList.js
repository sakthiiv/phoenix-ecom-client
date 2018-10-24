import React, { Component } from "react";
import product from "../api/product";
import { Card, CardText, CardBody, Row, Col } from "reactstrap";
import { Modal, Panel } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import UpdateProduct from "./UpdateProduct";

class ProductList extends React.Component {
  constructor() {
    super();
    this.state = { products: [], showModal: false, formOpen: "update" };
  }

  async componentDidMount() {
    const products = await product.getAll();
    this.setState({ products });
  }

  close() {
    this.setState({ showModal: false });
  }
  open = (e, type) => {
    // alert(e.target.name);
    this.setState({ showModal: true, formOpen: type });
  };

  statusRegister = status => {
    if (status) {
      this.setState({ showModal: false });
      product.getAll().then(products => {
        this.setState({ products });
      });
    } else {
      this.setState({ showModal: true });
    }
  };

  renderProducts(index) {
    // two albums at a time - the current and previous item
    let products = [this.state.products[index - 1], this.state.products[index]];
    const { formOpen } = this.state;

    return (
      <div className="columns" key={index}>
        {products.map((product, pIndex) => {
          return product ? (
            <div key={"product_col_" + pIndex}>
              <Col sm="6">
                <Card>
                  <CardBody>
                    <div className="cart-title-container">
                      <div className="cart-title-left">
                        <h3>{product.name}</h3>
                        <h5>{product.category}</h5>
                      </div>
                      <div className="cart-title-right">
                        <div
                          className="fa-override"
                          onClick={e => {
                            this.open(e, "update");
                          }}
                        >
                          <FontAwesomeIcon className="fa-lg" icon="edit" />
                        </div>
                      </div>
                      <div className="cart-title-right">
                        <div className="fa-override">
                          <FontAwesomeIcon className="fa-lg" icon="times" />
                        </div>
                      </div>
                    </div>
                  </CardBody>
                  <CardBody className="card-body">
                    <CardText>{product.description}</CardText>
                  </CardBody>
                </Card>
              </Col>
              <Modal show={this.state.showModal} onHide={this.close.bind(this)}>
                <Modal.Body>
                  <Panel>
                    {formOpen === "update" ? (
                      <UpdateProduct
                        product={product}
                        statusRegister={this.statusRegister}
                      />
                    ) : (
                      <div />
                    )}
                  </Panel>
                </Modal.Body>
              </Modal>
            </div>
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
