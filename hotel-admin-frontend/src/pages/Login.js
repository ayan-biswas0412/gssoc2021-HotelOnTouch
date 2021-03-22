import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Recaptcha from 'react-recaptcha';

class Login extends Component{

  constructor(props){
   super(props);
  
   this.state = {  
     username: '',
     password: '',
     isEnabled: false,
    }

    this.onloadCallback = this.onloadCallback.bind(this);
    this.verifyCallback = this.verifyCallback.bind(this);
  }

  handleChange = (event) =>{
   this.setState ( { [event.target.name] : event.target.value  } );
  }
  
  handleSubmit = (event) => {
   event.preventDefault();
   console.log(`Username: ${this.state.username}`);
  }

  onloadCallback() {
    console.log("Recaptcha Loaded")
  }

  verifyCallback(response) {
    if(response) {
      this.setState({
        isEnabled : this.state.username.length > 0 && this.state.password.length,
      })
    }
  }
  
  render(){
   return(
    <div style={{display:"flex",justifyContent:"center",marginTop:"5%"}}>
    <div style={{fontSize:"1.4rem",textAlign:"center"}}>
        <img src={process.env.PUBLIC_URL+'favicon_logo.ico'} alt="Logo" style={{width:"50px",height:"50px"}}/>
     <h3 style = {{textAlign: "center",marginTop:"15px"}}>Login to Hotel On Touch</h3>
     <div style={{display:"flex",justifyContent:"center",padding:"30px",
                  borderRadius:"10%",width:"350px",height:"300px",backgroundColor:"#dddddd",
                  boxShadow: "3px 6px grey"}}>
     <Form onSubmit={this.handleSubmit}>
      <Form.Group size="lg" controlId="username" style={{width:"300px"}}>
          <Form.Label >Username</Form.Label>
          <Form.Control
            autoFocus
            name = "username"
            type = "email"
            placeholder="name@example.com"
            onChange = {this.handleChange}
            value = {this.state.username}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            name = "password"
            type="password"
            placeholder="password"
            onChange = {this.handleChange}
            value = {this.state.password}
          />
        </Form.Group>
        <Recaptcha
          sitekey = "6Lcl5nMaAAAAAHgjRvfoNs4mR5Qj0VIAHhtTgfZY"
          render = "explicit"
          onloadCallback = {this.onloadCallback}
          verifyCallback = {this.verifyCallback}
        />
        <Button block size="lg" type="submit" style={{marginTop:"10px"}} disabled={!this.state.isEnabled}>
          Login
        </Button>
      </Form>
     </div>
    </div>
    </div>
   )
  }
  }
  
  export default Login;