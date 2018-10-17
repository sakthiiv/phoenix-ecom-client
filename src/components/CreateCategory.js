import React, { Component } from 'react';

class Admin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fillData: false
    }
  }


  render() {

    return (
        <div>
            <h1>Create Category</h1>
            <div className=''>
                <form>
                    <div className="form-group">
                    <label htmlFor="name">Enter username</label>
                    <input id='name' type="text" placeholder='Enter Username' className="form-control"></input>
                    </div>
                    <span className='asda'>Please enter username.</span>
                    <button type="submit"  className="btn btn-success">Login</button>
                </form>
            </div>
        </div>
        
    );
  }
}

export default Admin ;
