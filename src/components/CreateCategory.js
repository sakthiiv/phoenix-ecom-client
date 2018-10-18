import React, { Component } from 'react';

class Admin extends React.Component {
    state = {
      subcatsDom: [],
      cname: "",
      description: "",
      subcats:[]
    }
  handleChange = (e) => {
      if (e.target.className.indexOf('name') !== -1) {
        // let subcats = [...this.state.subcats, {name:e.target.value}]
        // subcats[e.target.dataset.id][e.target.className] = e.target.value
        // this.setState({ subcats }, () => console.log(this.state.subcats))
        let newSub = {
            name:e.target.value
        }
        this.setState(prevState => ({
            subcats: [...prevState.subcats, newSub]
        }));
        // let newelement = {
        //     id: Math.random()
        //       .toString(36)
        //       .substr(2, 9),
        //     author: this.state.author,
        //     comment: this.state.comment
        //   };
          
      } else {
        this.setState({ [e.target.name]: e.target.value })
      }
    }
    addSubCat = (e) => {
        this.setState((prevState) => ({
            subcatsDom: [...prevState.subcatsDom, {name:""}],
        }));
    }
  handleSubmit = (e) => { e.preventDefault() 
    console.log(this.state);
  }
  render() {
      let {cname, description, subcatsDom} = this.state
      return (
        <div className="col-md-6">
            <h1>Create category</h1>
            <form onSubmit={this.handleSubmit} onChange={this.handleChange} >

                <div className="form-group">
                    <label htmlFor="cname">Enter name of the categpry</label>
                    <input id='cname' name="cname" type="text" placeholder='Enter name of the category' className="form-control" defaultValue={cname}></input>
                </div>

            <div className="form-group">
                    <label htmlFor="description">Example description of the category</label>
                    <textarea className="form-control" name="description" id="description" rows="3" defaultValue={description}></textarea>
            </div>

            <button className="add-sub-cat-btn btn-success" onClick={this.addSubCat}>Add new subcategory</button>
            {
                subcatsDom.map((val, idx)=> {
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
                                defaultValue={subcatsDom[idx].name} 
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