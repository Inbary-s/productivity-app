import React, { useState } from 'react';
import API from '../utils/API';
// import { Button, FormGroup, FormControl } from 'react-bootstrap';
// const user = require ('../../../models/user');

export default function Users(props) {
    // const [username, setUsername] = useState("");
    // const [email, setEmail] = useState("");
    // const [password, setPassword] = useState("");
    const [UserObject, setUserObject] = useState({})
    console.log('Create an Account!')
    
    const handleInputUser = (event) => {
        console.log(event.target.value)
        const { username, emai, password } = event.target
        // setUsername(event.target.value);
        // setEmail(event.target.value);
        // setUsername(event.target.value);
      };

    function validateForm() {
        return email.length > 0 && password.lengeth > 0;
    }

    function handleSubmit(e) {
        e.preventDefault();
        fetch('/signup',{ 
        method: "POST",
        body: JSON.stringify({})
    })
    }

    console.log(username)
    return(
        <div className="Login">
            <h1>Let's Get You Started!</h1>
                <form onSubmit={handleSubmit}>
                    <input type="text" name="username" onChange={handleInputUser} value={username} placeholder="Tell Me Your Name" ></input>
                    <input type="email" name="email" onChange={handleInputUser} value={email} placeholder="Email" ></input>
                    <input type="password" name="password" onChange={handleInputUser} value={password} placeholder="Password" ></input>
                    <button>Log In</button>
                </form>   
        </div>       
    )
}