import React from "react";
import { Navbar, Nav, NavItem, Modal, Panel } from "react-bootstrap";
import Login from "./Login";
import Register from './Register';

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
  close() {
    this.setState({ showModal: false });
  }
  open = (e) => {
    // alert(e.target.name);
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
              <a href="/admin">PHOENIX</a>
            </Navbar.Brand>
          </Navbar.Header>
          {!loginStatus  ? 
            <div className="form-group pull-right">
              <input type="button" value="Login" className="btn-success" name="login" onClick={this.open}/> 
              <input type="button" value="Register" className="btn-success" name="register" onClick={this.open}/>
            </div> : <div className="pull-right">Arpit</div> }
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
