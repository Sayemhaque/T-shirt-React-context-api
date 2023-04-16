import React, { useContext, useEffect, useRef, useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';
import { dataContext } from '../components/Layout/Main';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
    const data = useContext(dataContext)
    const emailRef = useRef()
    const navigate = useNavigate()
    const [error , setError] = useState('');
    const [success , setSuccess] = useState('');
    const auth = getAuth(app);

     const handleLogin = (e) => {
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;
        signInWithEmailAndPassword(auth, email, password)
        .then(result => {
            const loggedInUser = result.user;
            console.log(loggedInUser)
            navigate('/')
        })
        .catch(error => setError(error.message))
     }
    
     const handeResetPassword = () => {
        const email = emailRef.current.value;
        !email && alert("Please provide you email to reset password")
        sendPasswordResetEmail(auth ,email)
        .then(result => {
            console.log(result)
            alert("Password send to you email")
        })
        .catch(error = console.log(error))
     }


    return (
        <div className="hero min-h-[90vh] bg-base-200">
        <div className="hero-content">
          
          <div className="card  w-[400px] shadow-2xl bg-base-100">
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="text" ref={emailRef} name='email' placeholder="email" className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="text" name='password' placeholder="password" className="input input-bordered" />
                <label className="label">
                  <p  className="label-text-alt link link-hover" onClick={handeResetPassword}>Forgot password?</p>
                </label>
              </div>
              <p className='text-red-400'>{error}</p>
              <p>Don't have any account ? <Link to='/register' className='link text-blue-500'>Register</Link></p>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
};

export default Login;



