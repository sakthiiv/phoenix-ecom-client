import React, { Component } from "react";
import category from "../api/category";
import { Card, CardText, CardBody, Row, Col } from "reactstrap";
import { Modal, Panel } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import UpdateCategory from "./UpdateCategory";
import DeleteItem from "./DeleteItem";

class CategoryList extends React.Component {
  constructor() {
    super();
    this.state = {
      categories: [],
      showUpdateModal: false,
      showDeleteModal: false,
      formOpen: "update",
      currentCategory: null
    };
  }

  async componentDidMount() {
    const categories = await category.getAll();
    this.setState({ categories });
  }

  close() {
    this.setState({ showUpdateModal: false, showDeleteModal: false });
  }
  open = (e, type, category) => {
    // alert(e.target.name);
    this.setState({ formOpen: type, currentCategory: category });
    if (type === "update") {
      this.setState({ showUpdateModal: true });
    } else {
      this.setState({ showDeleteModal: true });
    }
  };

  onDeleteClick = () => {
    category.delete(this.state.currentCategory.id).then(() => {
      category.getAll().then(categories => {
        this.setState({ categories });
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
      category.getAll().then(categories => {
        this.setState({ categories });
      });
    } else {
      this.setState({ showUpdateModal: true, showDeleteModal: true });
    }
  };

  render() {
    const { formOpen, currentCategory } = this.state;

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
                        <div
                          className="cart-title-right fa-override"
                          onClick={e => {
                            this.open(e, "update", c);
                          }}
                        >
                          <FontAwesomeIcon className="fa-lg" icon="edit" />
                        </div>
                        <div
                          className="cart-title-right fa-override"
                          onClick={e => {
                            this.open(e, "delete", c);
                          }}
                        >
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
        <Modal show={this.state.showUpdateModal} onHide={this.close.bind(this)}>
          <Modal.Body>
            <Panel>
              <UpdateCategory
                category={currentCategory}
                statusRegister={this.statusRegister}
              />
            </Panel>
          </Modal.Body>
        </Modal>
        <Modal show={this.state.showDeleteModal} onHide={this.close.bind(this)}>
          <Modal.Body>
            <Panel>
              <DeleteItem type={"Category"} />
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
}

export default CategoryList;
