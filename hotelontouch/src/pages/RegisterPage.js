import React from 'react';
import {Register} from '../components/index';

function RegisterPage  (props)  {
    return (
        <Register isSignUp={props.isSignUp}/>
    )
}
export default RegisterPage;