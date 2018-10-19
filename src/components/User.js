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
import Category from "./Category";

class CategoryList extends React.Component {
  constructor() {
    super();
    this.state = {
        categories: [
          {
            id:"11",
            name: "Electronics",
            description: "Electronics descriptions goes here."
          },
          {
            id:"22",
            name: "Clothes",
            description: "Clothes descriptions goes here."
          }
        ]
      };
  }

  componentDidMount() {
    fetch('http://10.132.21.159:8080/api/v1/category', {
        method: "GET"
    })
    .then((response) => response.json())
    .then((responseJson) => {
         console.log(responseJson);
         this.setState({categories:responseJson});
    })
    .catch((error) => {
        console.log(error);
    });
  }

  render() {
    console.log(this.state.categories);
    return (
      <div>
        {this.state.categories.map((category, i) => {
          return (
            <Category key={category.id} category = {category}/>
          );
        })}
      </div>
    );
  }
}

export default CategoryList;
