import React, { Component } from "react";
import category from "../api/category";
import { Link } from "react-router-dom";

class CreateCategory extends React.Component {
  state = {
    cname: "",
    description: "",
    subcats: [{ name: "", description: "" }],
    registerStatus: false
  };
  handleChange = e => {
    if (["name"].includes(e.target.className)) {
      let subcats = [...this.state.subcats];
      subcats[e.target.dataset.id][e.target.className] = e.target.value;
      this.setState({ subcats });
    } else {
      this.setState({ [e.target.name]: e.target.value });
    }
  };
  addSubCat = e => {
    this.setState(prevState => ({
      subcats: [...prevState.subcats, { name: "" }]
    }));
  };
  handleSubmit = e => {
    e.preventDefault();
    var categoryObject = {
      description: this.state.description,
      name: this.state.cname,
      subCategory: this.state.subcats,
      isValid: "true"
    };
    category
      .create(categoryObject)
      .then(responseJson => {
        console.log(responseJson);
        this.setState({ registerStatus: true });
      })
      .catch(error => {
        console.log(error);
      });
  };
  render() {
    let { cname, description, subcats, registerStatus } = this.state;
    return (
      <div>
        {registerStatus ? (
          <div>
            <h1>Category created</h1>
            <Link to="/admin">Go to homepage</Link>
          </div>
        ) : (
          <div className="col-md-6">
            <h1>Create category</h1>
            <form onSubmit={this.handleSubmit} onChange={this.handleChange}>
              <div className="form-group">
                <label htmlFor="cname">Enter name of the category</label>
                <input
                  id="cname"
                  name="cname"
                  type="text"
                  placeholder="Enter name of the category"
                  className="form-control"
                  defaultValue={cname}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="description">
                  Example description of the category
                </label>
                <textarea
                  className="form-control"
                  name="description"
                  id="description"
                  rows="3"
                  defaultValue={description}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="button"
                  value="Add subcategory"
                  className="add-sub-cat-btn btn-success"
                  onClick={this.addSubCat}
                />
              </div>
              {subcats.map((val, idx) => {
                let subCatId = `subcat-${idx}`;
                return (
                  <div key={idx}>
                    <div className="form-group sub-cat-item">
                      <label htmlFor={subCatId}>{`Sub Category  ${idx +
                        1}`}</label>
                      <input
                        type="text"
                        name={subCatId}
                        data-id={idx}
                        id={subCatId}
                        defaultValue={subcats[idx].name}
                        className="name"
                      />
                    </div>
                  </div>
                );
              })}
              <input type="submit" value="Submit" />
            </form>
          </div>
        )}
      </div>
    );
  }
}
export default CreateCategory;
