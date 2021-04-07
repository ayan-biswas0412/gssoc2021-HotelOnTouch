import React, {Component} from 'react';
import {Container} from 'react-bootstrap';
import './Register.css'
class Register extends Component  {

    state = {
        email: null,
        password: null,
        
    }
    submitHandler = () => {
        //Logic for authentication 
        // SAMPLE LOGIC(firebase) given below ----->
                        // const authdata = {
                        //     email: this.state.email,
                        //     password: this.state.password
                        // }
                        // let url ="signup url"
                        // if(!this.props.isSignUp){
                        //     url="signIn url"
                        // }
                        // axios.post(url, authdata)
                        // .then(response => console.log(response.data))
                        // .catch(error => console.log(error))
    }

    inputChangedHandler = (event) => {
        event.preventDefault();
        this.setState({[event.target.id] : event.target.value});
    }

    
    render () {

        let switchform = (<div>
        <button className="form__button" >Sign Up</button>
        
        <br/>
        <br/>
        <p className="form__text">
            <a className="form__link" href="/LogIn" >Already have an account? Login</a>
        </p></div>
        )
        
        if(!this.props.isSignUp )
        switchform = (
            <div>
        <button className="form__button" >Sign In</button>
        <br/>
        <br/>
        <p className="form__text">
            <a className="form__link" href="/Register"> New User? Register here</a>
        </p></div>
        )

        let form =( 
           
        <form className="form" id="createAccount" onSubmit={this.submitHandler}>
        {this.props.isSignUp ? <h1 className="form__title">Create Account</h1> : <h1 className="form__title">Sign In</h1>}
        
        <div className="form__input-group">
            <input  id="email" type="email" className="form__input" placeholder="Email Address" onChange={this.inputChangedHandler}/>
            
        </div>
        <div className="form__input-group">
            <input  id="password" type="password" className="form__input" placeholder="Password" onChange={this.inputChangedHandler}/>
            
        </div>
    </form>
    )
    
        
        return (
            <Container align="center">
            <br/>
            <div className="container_reg">
                {form}
                <br/>
                {switchform}
            </div>
            </Container>
            
    
        );
    }
}

export default Register;
