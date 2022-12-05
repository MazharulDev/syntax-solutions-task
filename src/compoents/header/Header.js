import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';

const Header = () => {
    const navigate = useNavigate()
    const [user, loading] = useAuthState(auth);
    const handleSignOut = () => {
        signOut(auth)
        navigate('/login')
    }

    const [admin] = useAdmin(user);
    if (loading) {
        return <p>Loading...</p>
    }
    return (
        <div>
            {/* ======= Header ======= */}
            <header id="header" className="fixed-top d-flex align-items-center">
                <div className="container d-flex align-items-center">
                    <h1 className="logo me-auto"><a href="#">Sailor</a></h1>
                    {/* Uncomment below if you prefer to use an image logo */}
                    {/* <a href="index.html" class="logo me-auto"><img src="assets/img/logo.png" alt="" class="img-fluid"></a>*/}
                    <nav id="navbar" className="navbar">
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li className="dropdown"><a href="#"><span>About</span> <i className="bi bi-chevron-down" /></a>
                                <ul>
                                    <li><a href="#">About</a></li>
                                    <li><a href="#">Team</a></li>
                                    <li><a href="#">Testimonials</a></li>
                                    <li className="dropdown"><a href="#"><span>Deep Drop Down</span> <i className="bi bi-chevron-right" /></a>
                                        <ul>
                                            <li><a href="#">Deep Drop Down 1</a></li>
                                            <li><a href="#">Deep Drop Down 2</a></li>
                                            <li><a href="#">Deep Drop Down 3</a></li>
                                            <li><a href="#">Deep Drop Down 4</a></li>
                                            <li><a href="#">Deep Drop Down 5</a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li><a href="#">Services</a></li>
                            <li><a href="#">Portfolio</a></li>
                            {admin && <li><NavLink to="/addcontent">Add Content</NavLink></li>}
                            {!admin && <li><NavLink to="/viewcontent">View Content</NavLink></li>}
                            <li><a href="#">Blog</a></li>
                            <li><a href="#">Contact</a></li>
                            {
                                user ? <li onClick={handleSignOut} className='getstarted pointer'>Signout</li> : <li><Link to="/login" className="getstarted">Login</Link></li>
                            }
                        </ul>
                        <i className="bi bi-list mobile-nav-toggle" />
                    </nav>{/* .navbar */}
                </div>
            </header>{/* End Header */}
        </div>
    );
};

export default Header;