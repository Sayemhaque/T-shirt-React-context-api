import { createUserWithEmailAndPassword, getAuth, sendEmailVerification, sendSignInLinkToEmail, updateProfile } from 'firebase/auth';
import React, { useState } from 'react';
import app from '../../firebase/firebase.config';
import { Link } from 'react-router-dom';

const Register = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('')
    const auth = getAuth(app)

    const handleSubmit = (e) => {
        e.preventDefault()
        setError("")
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const loggedInUser = result.user;
                setUser(loggedInUser)
                sendVefification(loggedInUser)
                updateUserData(loggedInUser, name)
                e.target.reset()
            })
            .catch(error => setError(error.message))
    }
    // Email verification
    const sendVefification = (user) => {
        sendEmailVerification(user)
            .then((result) => {
                alert("Vefication Email send")
                console.log(result)
            });
    }
    // update user data 
    const updateUserData = (user, name) => {
        updateProfile(user, {
            displayName: name
        })
            .then()
            .catch(error => console.log(error))
    }
    console.log(user)
    return (
        <div className="hero min-h-[90vh] bg-base-200">
            <div className="hero-content">

                <div className="card w-full md:w-[400px] shadow-2xl bg-base-100">
                    <form onSubmit={handleSubmit} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' required placeholder="name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" name='email' required placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' required placeholder="password" className="input input-bordered" />
                        </div>
                        <p className='text-red-400'>{error}</p>
                        <p>Already have an  account ? <Link className='link text-blue-500' to='/login'>Login</Link></p>
                        <div className="form-control mt-6">
                            <button type='submit' className="btn btn-primary">Register</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;