import React, { Component } from 'react';

class Admin extends React.Component {
    state = {
      subcats: [{name:""}],
      pname: "",
      pdescription: "",
      price:""
    }
  handleChange = (e) => {
      if (["name"].includes(e.target.className) ) {
        let subcats = [...this.state.subcats]
        subcats[e.target.dataset.id][e.target.className] = e.target.value.toUpperCase()
        this.setState({ subcats }, () => console.log(this.state.subcats))
      } else {
        this.setState({ [e.target.name]: e.target.value.toUpperCase() })
      }
    }
    addSubCat = (e) => {
        this.setState((prevState) => ({
            subcats: [...prevState.subcats, {name:""}],
        }));
    }
  handleSubmit = (e) => { e.preventDefault() }
  render() {
      let {pname, pdescription, price} = this.state
      return (
        <div className="col-md-6">
            <h1>Create product</h1>
            <form onSubmit={this.handleSubmit} onChange={this.handleChange} >

                <div className="form-group">
                    <label htmlFor="pname">Enter name of the categpry</label>
                    <input id='pname' type="text" placeholder='Enter name of the product' className="form-control" defaultValue={pname}></input>
                </div>

                <div className="form-group">
                        <label htmlFor="pdescription">Example description of the category</label>
                        <textarea className="form-control" id="pdescription" rows="3" defaultValue={pdescription}></textarea>
                </div>

                <div className="form-group">
                    <label htmlFor="price">Enter name of the categpry</label>
                    <input id='price' type="text" placeholder='Enter price of the product' className="form-control" defaultValue={price}></input>
                </div>

                <input type="submit" value="Submit" /> 
            </form>
        </div>
      )
    }
  }
  export default Admin