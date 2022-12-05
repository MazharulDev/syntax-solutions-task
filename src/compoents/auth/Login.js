import React, { useState } from 'react';
import auth from '../../firebase.init';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate()
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');
    const handleSubmit = async e => {
        e.preventDefault();
        await signInWithEmailAndPassword(email, password)

    }
    if (user) {
        navigate('/')
    }
    return (
        <div className='margin-top'>
            <div>
                <section id="breadcrumbs" class="breadcrumbs">
                    <div class="container">

                        <div class="d-flex justify-content-between align-items-center">
                            <h2>Login</h2>
                            <ol>
                                <li><a href="index.html">Home</a></li>
                                <li>Login</li>
                            </ol>
                        </div>

                    </div>
                </section>
                <div class="col-lg-8 pt-5 mt-lg-0 d-flex justify-content-center w-100">

                    <form onSubmit={handleSubmit} class="php-email-form">
                        <div class="row">
                            <div>
                                <input onChange={(e) => setEmail(e.target.value)} type="email" class="form-control" name="email" id="email" placeholder="Your Email" required />
                            </div>
                        </div>
                        <div class="row">
                            <div class="mt-3">
                                <input onChange={(e) => setPassword(e.target.value)} type="password" class="form-control" name="password" id="password" placeholder="Your Password" required />
                            </div>
                        </div>

                        <div class="text-center my-3"><button className='btn btn-danger' type="submit">Login</button></div>
                    </form>

                </div>
            </div>
        </div>
    );
};

export default Login;