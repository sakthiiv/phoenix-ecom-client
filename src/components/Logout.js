import React from "react";
import { Redirect } from "react-router-dom";
import sessionstorage from "../helpers/sessionstorage";
class Login extends React.Component {
    state = {
      redirectToReferrer: null
    };

    logout = (e) => {
        e.preventDefault();
        sessionstorage.removeItemSession('user');
        this.props.statusLogout(true);
        this.setState({redirectToReferrer:true});
        window.location.reload();
        // login
        // .login(loginObj)
        // .then(responseJson => {
        //     this.props.statusLogin(true);
        //     sessionstorage.setItemInSession('user', responseJson);
        //     if(responseJson.role.toLowerCase() == 'admin') {
        //       this.setState({ redirectToReferrer: '/admin' });
        //     } else {
        //       this.setState({ redirectToReferrer: '/' });
        //     }
    }
    render() {

      if (this.state.redirectToReferrer) {
        return <Redirect to='/' />;
      }
      const {showModal} = this.props;
      return (
        <div className={showModal ? '':'hidden'}>
            <h1>Do you want to Logout ?</h1>
            <input type="button" value="Logout" className="btn-success form-control" name="logout" onClick={this.logout}/> 
        </div>
      );
    }
  }

  export default Login;