import React, { useState } from 'react'
import {Link,useNavigate} from "react-router-dom"
import {Form} from "react-bootstrap"
import { Button } from "react-bootstrap"
import GoogleButton from 'react-google-button'
import { useUserAuth } from '../context/userAuthContext'
//import todoImg from "../images/todo.jpg"


const Login = () => {
    
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [error,setError]=useState("");
    const {login,googleSignIn}=useUserAuth();
    const navigate=useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        try {
            await login(email,password);
            navigate("/home");
            
        } catch (err) {
            setError(err.message);
        }
    };
const handleGoogleSignIn=async (e) =>{
    e.preventDefault();
    try {
        await googleSignIn();
        navigate("/home");
        
    } catch (error) {
        setError(error.message);
    }
}
  return (
   <>
  
    <div className="box">
        <h2 className='mb-3'>Firebase Auth Login</h2>
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control type="email" placeholder="Email Address"
                onChange={(e)=> setEmail(e.target.value)}
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control type="password" placeholder="Password"
                onChange={(e)=> setPassword(e.target.value)}
               />
            </Form.Group>

            <div className="d-grid gap-2">
                <Button variant="primary" type="Submit">
                    Login
                </Button>
                </div>
        </Form>
        <hr/>
        <div>
            <GoogleButton className="g-btn" type="dark" onClick={handleGoogleSignIn}/>
        </div>
    </div>

    <div className="p-4 box mt-3 text-center">
    Don't Have an account? <Link to="/signup">SignUp</Link>  
    </div>
    
</>
  )
}

export default Login