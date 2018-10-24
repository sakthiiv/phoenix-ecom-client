import React from "react";
import { Redirect } from "react-router-dom";
import login from "../api/login";
import sessionstorage from "../helpers/sessionstorage";
class Login extends React.Component {
    state = {
      redirectToReferrer: '',
      redirect:false,
      uname: null,
      upass: null,


    };
    handleChange = e => {
      this.setState({ [e.target.name]: e.target.value });
    };
    handleSubmit = (e) => {
        e.preventDefault();
        
        var loginObj = {
          userName: this.state.uname,
          password: this.state.upass
        };
        login
        .login(loginObj)
        .then(responseJson => {
            this.props.statusLogin(true);
            sessionstorage.setItemInSession('user', responseJson);
            if(responseJson.role.toLowerCase() == 'admin') {
              this.setState({ redirectToReferrer: '/admin' });
            } else {
              this.setState({ redirectToReferrer: '/' });
            }
            
        })
        .catch(error => {
          console.log(error);
        });
        // this.setState({ redirectToReferrer: true });
    }
    render() {

      // const location = {
      //   pathname: '/admin',
      //   state: { fromDashboard: true }
      // }
      if (this.state.redirectToReferrer) {
        return <Redirect to={ {pathname: this.state.redirectToReferrer}} />;
      }
      const {showModal} = this.props;
      return (
        <div className={showModal ? '':'hidden'}>
          <p>You must log in</p>
          <form onSubmit={this.handleSubmit} onChange={this.handleChange}>
                <div className="form-group">
                    <label htmlFor="cname">Enter username</label>
                    <input id='uname' name="uname" type="text" placeholder='Enter username' className="form-control"  required></input>
                </div>
                <div className="form-group">
                    <label htmlFor="cname">Enter password</label>
                    <input id='password' name="upass" type="password" placeholder='Enter password' className="form-control"  required></input>
                </div>
                <input type="submit" value="Submit" className="btn-success" /> 
           </form>
        </div>
      );
    }
  }

  export default Login;