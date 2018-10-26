import React from "react";
import { Navbar, Nav, NavItem, Modal, Panel } from "react-bootstrap";
import Login from "./Login";
import Register from './Register';
import sessionstorage from "../helpers/sessionstorage";
import { Link, Redirect } from 'react-router-dom';
import Logout from './Logout';
import cart from "../api/cart";

// The Header creates links that can be used to navigate
// between routes.

class Header extends React.Component {
  constructor() {
    super();
    this.state = {
        showModal: false,
        loginStatus: null,
        registerStatus: null,
        formOpen:null,
        user:null,
        redirectToReferrer:false,
        cartCount:0
    };
  }
  async componentDidMount() {
    const user = sessionstorage.getItemFromSession('user');
    if(user) {
      this.setState({loginStatus:true, user:sessionstorage.getItemFromSession('user')});
      if (user.userId) {
        await this.fetchCartCount(user.userId);
      }
    } else {
      this.setState({loginStatus:false, user: null});
    }

    
    // console.log(sessionstorage.getItemFromSession('user'));
  }

  fetchCartCount = userId => {
    cart
     .cartGetDetails(userId)
     .then(responseJson => {
       this.setState({ cartCount: responseJson.products.length });
     })
     .catch(error => {
       console.log(error);
     });
  }
  close() {
    this.setState({ showModal: false });
  }
  open = (e) => {
    this.setState({ showModal: true, formOpen:  e.target.name});
  }
  statusLogin = (status) => {
    if(status) {
      this.setState({ showModal: false, loginStatus:status });
    } else {
      this.setState({ showModal: true });
    }
  }

  statusRegister = (status) => {
    if(status) {
      this.setState({ showModal: false });
    } else {
      this.setState({ showModal: true });
    }
  }

  logOut = () => {
     sessionstorage.removeItemSession('user');
     this.setState({loginStatus:false, user: null,redirectToReferrer:true});
    //  window.reload();
  }
  statusLogout = (status) => {
    if(status) {
      this.setState({ showModal: false });
    } else {
      this.setState({ showModal: true });
    }
  }
  render () {
    const {loginStatus, formOpen, user, cartCount} = this.state;
    if (this.state.redirectToReferrer) {
      return <Redirect to='/' />;
    }
    return (
      <div>
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="/">PHOENIX <span className="half_price">Half product half price</span></a>
            </Navbar.Brand>
          </Navbar.Header>
          <Link to='/search' className="pull-right" style={{marginTop:"20px", marginRight:"20px", color:"white"}}><span className="glyphicon glyphicon-search" style={{fontSize:"25px"}}></span></Link>
          {!loginStatus  ? 
            <div className="form-group pull-right log_register_container">
              <input type="button" value="Login" className="btn-success form-control" name="login" onClick={this.open}/> 
              <input type="button" value="Register" className="btn-success form-control"  name="register" onClick={this.open}/>
            </div> : <div className="pull-right" style={{color:'white', marginTop:'20px', marginRight:"20px"}}>Welcome : {user?user.userName:''} {user?<input type="button" value="Logout" className="btn-success form-control" name="logout" onClick={this.open}/>:''}</div> }
        
            {user && user.role === 'customer'? <Link to='/shopping-cart'><span className="glyphicon glyphicon-shopping-cart mini-shopping-cart pull-right"><span className="badge">{cartCount}</span></span></Link> :''}
        </Navbar>
        <Modal show={this.state.showModal} onHide={this.close.bind(this)}>
            <Modal.Body>
                <Panel>
                  {formOpen === 'login' ? 
                  <Login showModal={this.state.showModal} statusLogin= {this.statusLogin}/> : 
                  formOpen === 'register' ? 
                  <Register showModal={this.state.showModal} statusRegister= {this.statusRegister}/> : 
                  formOpen === 'logout' ? 
                  <Logout showModal={this.state.showModal} statusLogout= {this.statusLogout}/> :''}
                </Panel>
            </Modal.Body>
        </Modal>
      </div>
    );
  }
}


export default Header;
