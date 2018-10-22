import React, { Component } from "react";
import categoryApi from "../api/category";
import Category from "./Category";

class CategoryList extends React.Component {
  constructor() {
    super();
    this.state = {
      categories: []
    };
  }

  async componentDidMount() {
    const categories = await categoryApi.getAll();
    this.setState({ categories });
  }

  render() {
    console.log(this.state.categories);
    return (
      <div>
        {this.state.categories.map((category, i) => {
          return <Category key={category.id} category={category} />;
        })}
      </div>
    );
  }
}

export default CategoryList;
