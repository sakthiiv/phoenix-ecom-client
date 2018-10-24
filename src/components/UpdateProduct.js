import React, { Component } from "react";
import product from "../api/product";

class UpdateProduct extends React.Component {
  state = {
    productId: "",
    name: "",
    description: "",
    price: "",
    image: null,
    imagePreviewUrl: null
  };

  componentDidMount() {
    let { id, name, description, price } = this.props.product;
    this.setState({ name, description, price, productId: id });
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

    var productObj = {
      name: this.state.name,
      description: this.state.description,
      price: this.state.price,
      base64ProductImage: this.state.imagePreviewUrl,
      isValid: "true"
    };
    product
      .update(this.state.productId, productObj)
      .then(responseJson => {
        this.props.statusRegister(true);
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    let { name, description, price, imagePreviewUrl } = this.props.product;
    let $imagePreview = null;
    if (imagePreviewUrl) {
      $imagePreview = <img src={imagePreviewUrl} className={"img-preview"} />;
    } else {
      $imagePreview = (
        <div className="previewText">Please select an image.</div>
      );
    }

    return (
      <div className="col-md-6">
        <h1>Update product</h1>
        <form onSubmit={this.handleSubmit} onChange={this.handleChange}>
          <div className="form-group">
            <label htmlFor="name">Edit name of the product</label>
            <input
              id="name"
              type="text"
              name="name"
              placeholder="Enter name of the product"
              className="form-control"
              defaultValue={name}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="description">Edit description of the product</label>
            <textarea
              className="form-control"
              id="description"
              name="description"
              rows="3"
              defaultValue={description}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="price">Edit price of the product</label>
            <input
              id="price"
              name="price"
              type="text"
              placeholder="Enter price of the product"
              className="form-control"
              defaultValue={price}
              required
            />
          </div>

          <div className="form-group">
            <input type="file" name="file" className="file" />
            <div className="img-preview">{$imagePreview}</div>
          </div>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}
export default UpdateProduct;
