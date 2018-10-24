import React, { Component } from "react";
import product from "../api/product";
import { Card, CardText, CardBody, Row, Col } from "reactstrap";
import { Modal, Panel } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import UpdateProduct from "./UpdateProduct";
import DeleteItem from "./DeleteItem";

class ProductList extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [],
      showUpdateModal: false,
      showDeleteModal: false,
      formOpen: "update",
      currentProduct: null
    };
  }

  async componentDidMount() {
    const products = await product.getAll();
    this.setState({ products });
  }

  close() {
    this.setState({ showUpdateModal: false, showDeleteModal: false });
  }
  open = (e, type, product) => {
    // alert(e.target.name);
    this.setState({ formOpen: type, currentProduct: product });
    if (type === "update") {
      this.setState({ showUpdateModal: true });
    } else {
      this.setState({ showDeleteModal: true });
    }
  };

  onDeleteClick = () => {
    product.delete(this.state.currentProduct.id).then(() => {
      product.getAll().then(products => {
        this.setState({ products });
      });
      this.setState({ showDeleteModal: false });
    });
  };

  onDeleteCancelClick = () => {
    this.setState({ showDeleteModal: false });
  };

  statusRegister = status => {
    if (status) {
      this.setState({ showUpdateModal: false, showDeleteModal: false });
      product.getAll().then(products => {
        this.setState({ products });
      });
    } else {
      this.setState({ showUpdateModal: true, showDeleteModal: true });
    }
  };

  renderProducts(index) {
    // two albums at a time - the current and previous item
    let products = [this.state.products[index - 1], this.state.products[index]];
    const { formOpen, currentProduct } = this.state;

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
                            this.open(e, "update", product);
                          }}
                        >
                          <FontAwesomeIcon className="fa-lg" icon="edit" />
                        </div>
                      </div>
                      <div className="cart-title-right">
                        <div
                          className="fa-override"
                          onClick={e => {
                            this.open(e, "delete", product);
                          }}
                        >
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
            </div>
          ) : (
            <div />
          );
        })}
        <Modal show={this.state.showUpdateModal} onHide={this.close.bind(this)}>
          <Modal.Body>
            <Panel>
              <UpdateProduct
                product={currentProduct}
                statusRegister={this.statusRegister}
              />
            </Panel>
          </Modal.Body>
        </Modal>
        <Modal show={this.state.showDeleteModal} onHide={this.close.bind(this)}>
          <Modal.Body>
            <Panel>
              <DeleteItem type={"Product"} />
            </Panel>
          </Modal.Body>
          <Modal.Footer>
            <input type="button" value="Confirm" onClick={this.onDeleteClick} />
            <input
              type="button"
              value="Cancel"
              onClick={this.onDeleteCancelClick}
            />
          </Modal.Footer>
        </Modal>
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
