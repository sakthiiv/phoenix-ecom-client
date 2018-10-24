import React, { Component } from "react";
import category from "../api/category";

class UpdateCategory extends React.Component {
  state = {
    categoryId: "",
    name: "",
    description: "",
    subCategory: null,
    image: null,
    imagePreviewUrl: null
  };

  componentDidMount() {
    let { id, name, description, subCategory } = this.props.category;
    this.setState({ name, description, categoryId: id, subCategory });
  }

  handleChange = e => {
    if (["file"].includes(e.target.className)) {
      let reader = new FileReader();
      let file = e.target.files[0];

      reader.onloadend = () => {
        this.setState({
          image: file,
          imagePreviewUrl: reader.result
        });
      };
      reader.readAsDataURL(file);
    } else {
      this.setState({ [e.target.name]: e.target.value });
    }
  };

  handleSubmit = e => {
    e.preventDefault();

    var categoryObj = {
      name: this.state.name,
      description: this.state.description,
      subCategory: this.state.subCategory
    };
    category
      .update(this.state.categoryId, categoryObj)
      .then(responseJson => {
        this.props.statusRegister(true);
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    let { name, description, imagePreviewUrl } = this.props.category;
    let $imagePreview = null;
    if (imagePreviewUrl) {
      $imagePreview = <img src={imagePreviewUrl} className={"img-preview"} />;
    } else {
      $imagePreview = (
        <div className="previewText">Please select an image.</div>
      );
    }

    return (
      <div>
        <h1>Update category</h1>
        <form onSubmit={this.handleSubmit} onChange={this.handleChange}>
          <div className="form-group">
            <label htmlFor="name">Edit name of the Category</label>
            <input
              id="name"
              type="text"
              name="name"
              placeholder="Enter name of the category"
              className="form-control"
              defaultValue={name}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="description">
              Edit description of the Category
            </label>
            <textarea
              className="form-control"
              id="description"
              name="description"
              rows="3"
              defaultValue={description}
              required
            />
          </div>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}
export default UpdateCategory;
