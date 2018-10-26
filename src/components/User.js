import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import categoryApi from "../api/category";
import Category from "./Category";
import sessionstorage from '../helpers/sessionstorage';

class CategoryList extends React.Component {
  constructor() {
    super();
    this.state = {
      categories: [],
      redirectToReferrer:false
    };
  }

  async componentDidMount() {
    if(sessionstorage.getItemFromSession('user') && sessionstorage.getItemFromSession('user').role === 'admin') {
      this.setState({redirectToReferrer:true});
    } else {
      this.setState({redirectToReferrer:false});
      const categories = await categoryApi.getAll();
      this.setState({ categories });
    }
  }

  render() {
    console.log(this.state.categories);
    const location = {
      pathname: '/admin',
      state: { fromDashboard: true }
    }
    if (this.state.redirectToReferrer) {
      // console.log('redirecting to admin')
      return <Redirect to={location} />;
    }
    return (
      <div>
        {this.state.categories.length === 0 ? <h1>Something went wrong</h1> : ''}
        <div className="plist_container">
          {this.state.categories.map((category, i) => {
            return <div className="col-sm-3" key={category.id}><Category  category={category} /></div>;
          })}
        </div>
      </div>
    );
  }
}

export default CategoryList;
