import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default class LogInForm extends Component {
  constructor(props) {
    super(props);
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      username: "",
      password: "",
    };
  }

  onChangeUsername(e) {
    this.setState({ username: e.target.value });
  }

  onChangePassword(e) {
    this.setState({ password: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    const user = {
      username: this.state.username,
      password: this.state.password,
    };

    let userFound = false;
    let userPassword = "";
    let userId = "";

    axios.get("http://localhost:8000/users/").then((res) => {
      for (var i = 0; i < res.data.length; i++) {
        if (user.username.localeCompare(res.data[i].username) == 0) {
          userFound = true;
          userPassword = res.data[i].password;
          userId = res.data[i]._id;
          if (res.data[i].securityCodeEntered == false) {
            window.alert("you did not enter your security code");
            this.props.history.push("/verifyEmail/" + user.username);
          }
          break;
        }
      }
      if (userFound == true) {
        axios
          .get(
            "http://localhost:8000/users/check/" + userId + "/" + user.password
          )
          .then((res) => {
            if (res.data == user.username) {
              console.log("here");
              this.props.history.push("/profile/" + userId);
            } else {
              window.alert("The password you’ve entered is incorrect.");
            }
          })
          .catch((err) => console.log(err));
      } else {
        window.alert("username is incorrect");
      }
    });

    this.setState({ username: "", password: "" });
  }

  render() {
    return (
      <div>
        <Navbar1 />

        <div className="container">
          <h3>Login</h3>
          <form onSubmit={this.onSubmit}>
            <div className="form-group">
              <label>Username: </label>
              <input
                type="text"
                required
                className="form-control"
                value={this.state.username}
                onChange={this.onChangeUsername}
              ></input>
            </div>

            <div className="form-group">
              <label>Password: </label>
              <input
                type="password"
                required
                className="form-control"
                value={this.state.password}
                onChange={this.onChangePassword}
              ></input>
            </div>

            <div className="form-group">
              <input type="submit" className="btm btm-primary" value="Login" />
            </div>
          </form>
        </div>
      </div>
    );
  }
}
