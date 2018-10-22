import React from "react";
import { Redirect } from "react-router-dom";
class Login extends React.Component {
    state = {
      redirectToReferrer: false
    };
  
    // login = () => {
    //   fakeAuth.authenticate(() => {
    //     this.setState({ redirectToReferrer: true });
    //   });
    // };
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.statusLogin(true);
    }
    render() {
    //   const { from } = this.props.location.state || { from: { pathname: "/" } };
    //   const { redirectToReferrer } = this.state;
  
    //   if (redirectToReferrer) {
    //     return <Redirect to={from} />;
    //   }
      const {showModal} = this.props;
      return (
        <div className={showModal ? '':'hidden'}>
          <p>You must log in</p>
          <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label htmlFor="cname">Enter username</label>
                    <input id='uname' name="uname" type="text" placeholder='Enter username' className="form-control"  required></input>
                </div>
                <div className="form-group">
                    <label htmlFor="cname">Enter password</label>
                    <input id='password' name="password" type="password" placeholder='Enter password' className="form-control"  required></input>
                </div>
                <input type="submit" value="Submit" className="btn-success" /> 
           </form>
        </div>
      );
    }
  }

  export default Login;