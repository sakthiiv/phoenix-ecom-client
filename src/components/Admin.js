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
                    <ul className="admin_home">
                        <li><Link to='/create-category'>Add Category</Link></li>
                        <li><Link to='/create-product'>Add Product</Link></li>
                        <li><Link to='/category-list'>View category List</Link></li>
                        <li><Link to='/product-list'>View product list</Link></li>
                    </ul>
                </nav>
            </div>
        </div>
        
    );
  }
}

export default Admin ;
