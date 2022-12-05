import React from 'react';
import { Link } from 'react-router-dom';
import './login.css'

const Login = () => {
    return (
        <div className='login-page'>
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

                    <form class="php-email-form">
                        <div class="row">
                            <div>
                                <input type="email" class="form-control" name="email" id="email" placeholder="Your Email" required />
                            </div>
                        </div>
                        <div class="row">
                            <div class="mt-3">
                                <input type="password" class="form-control" name="password" id="password" placeholder="Your Password" required />
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