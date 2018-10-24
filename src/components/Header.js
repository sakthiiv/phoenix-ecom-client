import React from "react";
import { Navbar, Nav, NavItem, Modal, Panel } from "react-bootstrap";
import Login from "./Login";
import Register from './Register';
import sessionstorage from "../helpers/sessionstorage";

// The Header creates links that can be used to navigate
// between routes.

class Header extends React.Component {
  constructor() {
    super();
    this.state = {
        showModal: false,
        loginStatus: null,
        registerStatus: null,
        formOpen:null
    };
  }
  componentDidMount() {
    if(!sessionstorage.getItemFromSession('user')) {
      this.setState({loginStatus:true});
    } else {
      this.setState({loginStatus:false});
    }
    console.log(sessionstorage.getItemFromSession('user'));
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

  
  render () {
    const {loginStatus, formOpen} = this.state;
    return (
      <div>
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="/">PHOENIX</a>
            </Navbar.Brand>
          </Navbar.Header>
          {!loginStatus  ? 
            <div className="form-group pull-right log_register_container">
              <input type="button" value="Login" className="btn-success form-control" name="login" onClick={this.open}/> 
              <input type="button" value="Register" className="btn-success form-control"  name="register" onClick={this.open}/>
            </div> : <div className="pull-right" style={{color:'white', marginTop:'20px'}}>Welcome : </div> }
        </Navbar>
        <Modal show={this.state.showModal} onHide={this.close.bind(this)}>
            <Modal.Body>
                <Panel>
                  {formOpen === 'login' ? 
                  <Login showModal={this.state.showModal} statusLogin= {this.statusLogin}/> : 
                  <Register showModal={this.state.showModal} statusRegister= {this.statusRegister}/> }
                </Panel>
            </Modal.Body>
        </Modal>
      </div>
    );
  }
}


export default Header;
