import React, { Component } from 'react';

class Admin extends React.Component {
    state = {
      subcats: [{name:""}],
      cname: "",
      description: ""
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
      let {cname, description, subcats} = this.state
      return (
        <div className="col-md-6">
            <h1>Create category</h1>
            <form onSubmit={this.handleSubmit} onChange={this.handleChange} >

                <div className="form-group">
                    <label htmlFor="cname">Enter name of the categpry</label>
                    <input id='cname' type="text" placeholder='Enter name of the category' className="form-control" defaultValue={cname}></input>
                </div>

            <div className="form-group">
                    <label htmlFor="description">Example description of the category</label>
                    <textarea className="form-control" id="description" rows="3" defaultValue={description}></textarea>
            </div>

            <button className="add-sub-cat-btn btn-success" onClick={this.addSubCat}>Add new subcategory</button>
            {
                subcats.map((val, idx)=> {
                let subCatId = `subcat-${idx}`
                return (
                    <div key={idx}>
                        <div className="form-group sub-cat-item">
                            <label htmlFor={subCatId}>{`Sub Category  ${idx + 1}`}</label>
                            <input
                                type="text"
                                name={subCatId}
                                data-id={idx}
                                id={subCatId}
                                defaultValue={subcats[idx].name} 
                                className="name form-control"
                            />
                        </div>
                    </div>
                )
                })
            }
            <input type="submit" value="Submit" /> 
            </form>
        </div>
      )
    }
  }
  export default Admin