import React, { Component } from "react";
import product from "../api/product";
import categoryApi from "../api/category";
import { Link } from 'react-router-dom';

class CreateProduct extends React.Component {
  state = {
    pname: "",
    pdescription: "",
    price: "",
    image: null,
    imagePreviewUrl: null,
    categoriesecom: 1,
    subcategoriesecom: 2,
    categories: [],
    subcategories: [],
    registerStatus:false
  };

  async componentDidMount() {
    const categories = await categoryApi.getAll();
    this.setState({ categories });
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
    } else if(["categoriesecom"].includes(e.target.name)){
      const filteredCategory = this.state.categories.find((category) => category.id == e.target.value);
      const newSubcategories =   filteredCategory ? filteredCategory.subCategory : [];
      this.setState({ [e.target.name]: e.target.value, subcategories: newSubcategories});
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

    var productObj = {
      name: this.state.pname,
      description: this.state.pdescription,
      price: this.state.price,
      imageContent: this.state.imagePreviewUrl,
      categoryId: this.state.categoriesecom,
      subCategoryId: this.state.subcategoriesecom,
      isValid: "true"
    };
    product
      .create(productObj)
      .then(responseJson => {
        console.log(responseJson);
        this.setState({registerStatus:true});
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    let {
      pname,
      pdescription,
      price,
      imagePreviewUrl,
      categories,
      subcategories,
      registerStatus
    } = this.state;
    let $imagePreview = null;
    if (imagePreviewUrl) {
      $imagePreview = <img src={imagePreviewUrl} className={"img-preview"} />;
    } else {
      $imagePreview = (
        <div className="previewText">Please select an image.</div>
      );
    }
    // console.log(this.state);
    let categoriesItems = categories.map(category => (
      <option key={category.id} value={category.id}>{category.name}</option>
    ));
    let subCategoriesItems = subcategories.map((subcategory, i) => (
      <option key={i} value={subcategory.name}>{subcategory.name}</option>
    ));
    return (
      <div>
      {registerStatus ? 
            <div>
              <h1>Product created</h1>
              <Link to='/admin'>Go to homepage</Link>
            </div> :
          <div className="col-md-6">
          <h1>Create product</h1>
          <form onSubmit={this.handleSubmit} onChange={this.handleChange}>
            <div className="form-group">
              <label htmlFor="pname">Enter name of the product</label>
              <input
                id="pname"
                type="text"
                name="pname"
                placeholder="Enter name of the product"
                className="form-control"
                defaultValue={pname}
                required
              />
            </div>
  
            <div className="form-group">
              <label htmlFor="pdescription">
                Example description of the product
              </label>
              <textarea
                className="form-control"
                id="pdescription"
                name="pdescription"
                rows="3"
                defaultValue={pdescription}
                required
              />
            </div>
  
            <div className="form-group">
              <label htmlFor="price">Enter price of the product</label>
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
              <label htmlFor="categoriesecom">Select category</label>
              <select
                className="form-control"
                id="categoriesecom"
                name="categoriesecom"
              >
                <option value="0">Select category</option>
                {categoriesItems}
              </select>
            </div>
            {subcategories.length !== 0 && (
              <div className="form-group">
                <label htmlFor="subcategoriesecom">Select subcategory</label>
                <select
                  className="form-control"
                  id="subcategoriesecom"
                  name="subcategoriesecom"
                >
                  <option value="0">Select Sub category</option>
                  {subCategoriesItems}
                </select>
              </div>
            )}
  
            <div className="form-group">
              <input type="file" name="file" className="file" />
              <div className="img-preview" style={{width:"300px"}}>{$imagePreview}</div>
            </div>
            <input type="submit" value="Submit" />
          </form>
        </div>}
      </div>
      
    );
  }
}
export default CreateProduct;
