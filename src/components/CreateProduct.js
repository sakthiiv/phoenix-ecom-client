import React, { Component } from 'react';

class CreateProduct extends React.Component {
    state = {
      pname: "",
      pdescription: "",
      price:"",
      image: null,
      imagePreviewUrl: null,
      categoriesecom: 1,
      subcategoriesecom: 2,
      categories:['Electronics', 'Clothes'],
      subcategories:[]
    }

    componentDidMount() {
        //initial categories
        // let initialCategories = [];
        // fetch('https://swapi.co/api/planets/')
        //     .then(response => {
        //         return response.json();
        //     }).then(data => {
        //         initialCategories = data.results.map((category) => {
        //         return category
        //     });
        //     console.log(initialCategories);
        //     this.setState({
        //         categories: initialCategories
        //     });
        // });
    }

    handleChange = (e) => {
        if (["file"].includes(e.target.className) ) {
            let reader = new FileReader();
            let file = e.target.files[0];

            reader.onloadend = () => {
                this.setState({
                    image: file,
                    imagePreviewUrl: reader.result
                });
            }
            reader.readAsDataURL(file)
        } else {
            this.setState({ [e.target.name]: e.target.value })
        }
    }
    addSubCat = (e) => {
        this.setState((prevState) => ({
            subcats: [...prevState.subcats, {name:""}],
        }));
    }
  handleSubmit = (e) => { e.preventDefault() 
    // console.log('PHOTO:', newItem.image);
    const h = {}; //headers
    let data = new FormData();
    data.append('name', this.state.pname);
    data.append('description', this.state.pdescription);
    data.append('price', this.state.price);
    data.append('image', this.state.imagePreviewUrl);
    data.append('categoryId', this.state.categoriesecom);
    data.append('subCategoryId', this.state.subcategoriesecom);

    var productObj = {
        name: this.state.pname,
        description: this.state.pdescription,
        price: this.state.price,
        // image: this.state.imagePreviewUrl,
        categoryId: this.state.categoriesecom,
        subCategoryId: this.state.subcategoriesecom
    }
    fetch('http://10.132.21.60:8080/api/v1/product', {
        method: "POST",
        headers:{
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body:productObj
    })
    .then((response) => response.json())
    .then((responseJson) => {
         console.log(responseJson);
    })
    .catch((error) => {
        console.log(error);
    });
  }


  render() {
      let {pname, pdescription, price, imagePreviewUrl, categories, subcategories} = this.state;
      let $imagePreview = null;
      if (imagePreviewUrl) {
          $imagePreview = (<img src={imagePreviewUrl} className={'img-preview'} />);
      } else {
          $imagePreview = (<div className="previewText">Please select an image.</div>);
      }

      let categoriesItems = categories.map((category) =>
            <option key={category}>{category}</option>
      );
      let subCategoriesItems = subcategories.map((subcategory) =>
            <option key={subcategory}>{subcategory}</option>
      );
      return (
        <div className="col-md-6">
            <h1>Create product</h1>
            <form onSubmit={this.handleSubmit} onChange={this.handleChange} >

                <div className="form-group">
                    <label htmlFor="pname">Enter name of the product</label>
                    <input id='pname' type="text" name="pname" placeholder='Enter name of the product' className="form-control" defaultValue={pname} required></input>
                </div>

                <div className="form-group">
                        <label htmlFor="pdescription">Example description of the product</label>
                        <textarea className="form-control" id="pdescription" name="pdescription" rows="3" defaultValue={pdescription} required></textarea>
                </div>

                <div className="form-group">
                    <label htmlFor="price">Enter price of the product</label>
                    <input id='price' name="price" type="text" placeholder='Enter price of the product' className="form-control" defaultValue={price} required></input>
                </div>

                <div className="form-group">
                    <label htmlFor="categoriesecom">Select category</label>
                    <select className="form-control" id="categoriesecom" name="categoriesecom">
                        {categoriesItems}
                    </select>
                </div>
                {subcategories.length !== 0 && 
                <div className="form-group">
                    <label htmlFor="subcategoriesecom">Select subcategory</label>
                    <select className="form-control" id="subcategoriesecom" name="subcategoriesecom">
                        {subCategoriesItems}
                    </select>
                </div> }
                

                <div className="form-group">
                    <input type="file"  name="file" className="file"/>
                    <div className="img-preview">
                        {$imagePreview}
                    </div>
                </div>
                <input type="submit" value="Submit" /> 
            </form>
        </div>
      )
    }
  }
  export default CreateProduct