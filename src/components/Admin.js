import React, { Component } from 'react';
import { Link } from 'react-router-dom'
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
            <div>
                <nav>
                    <ul>
                        <li><Link to='/create-category'>Create Category</Link></li>
                        <li><Link to='/create-product'>Create Product</Link></li>
                        <li><Link to='/category-list'>Get category List</Link></li>
                        <li><Link to='/product-list'>Get product list</Link></li>
                    </ul>
                </nav>
            </div>
        </div>
        
    );
  }
}

export default Admin ;
