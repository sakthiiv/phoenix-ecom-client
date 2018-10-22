import React from "react";
import register from "../api/register";

class Login extends React.Component {
  state = {
    redirectToReferrer: false,
    uemail: null,
    uname: null,
    upass: null,
    ucpass: null
  };

  // login = () => {
  //   fakeAuth.authenticate(() => {
  //     this.setState({ redirectToReferrer: true });
  //   });
  // };
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleSubmit = e => {
    var registerObj = {
      userName: this.state.uname,
      emailId: this.state.uemail,
      role: "admin",
      password: this.state.upass
    };
    e.preventDefault();

    register
      .create(registerObj)
      .then(responseJson => {
        this.props.statusRegister(true);
      })
      .catch(error => {
        console.log(error);
      });
  };
  render() {
    //   const { from } = this.props.location.state || { from: { pathname: "/" } };
    //   const { redirectToReferrer } = this.state;

    //   if (redirectToReferrer) {
    //     return <Redirect to={from} />;
    //   }
    const { showModal } = this.props;
    return (
      <div className={showModal ? "" : "hidden"}>
        <p>You must register</p>
        <form onSubmit={this.handleSubmit} onChange={this.handleChange}>
          <div className="form-group">
            <label htmlFor="cemail">Enter email</label>
            <input
              id="uemail"
              name="uemail"
              type="email"
              placeholder="Enter email address"
              className="form-control"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="uname">Enter username</label>
            <input
              id="uname"
              name="uname"
              type="text"
              placeholder="Enter username"
              className="form-control"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="pass">Enter password</label>
            <input
              id="upass"
              name="upass"
              type="password"
              placeholder="Enter password"
              className="form-control"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="cpass">Enter confirm password</label>
            <input
              id="ucpass"
              name="ucpass"
              type="password"
              placeholder="Enter confirm password"
              className="form-control"
              required
            />
          </div>
          <input type="submit" value="Submit" className="btn-success" />
        </form>
      </div>
    );
  }
}

export default Login;
