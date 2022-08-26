import React from 'react'
import { Link, useLocation } from "react-router-dom"
import { useNavigate } from 'react-router-dom';

function Navbar(props) {
    let location = useLocation();
    let navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('token');
        props.showAlert('Logged-out successfully, see ya! 👋 ', 'success')
        navigate("/home")
    }

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/home">StickTheNotes</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className={`nav-link ${location.pathname === ('/' || '/home') ? 'active' : ''}`} aria-current="page" to={localStorage.getItem("token") ? '/' : '/login'}>Home</Link>
                            </li>
                            {/* <li className="nav-item">
                                <Link className={`nav-link ${location.pathname === '/home' ? 'active' : ''}`} to="/home">Landing</Link>
                            </li> */}
                            <li className="nav-item">
                                <Link className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`} to="/about">About</Link>
                            </li>
                        </ul>
                        {!localStorage.getItem('token') ? <form className='d-flex'>
                            <Link className='btn btn-sm btn-success mx-2' to='/login' role='button'>LogIn</Link>
                            <Link className='btn btn-sm btn-primary mx-2' to='/signup' role='button'>SignUp</Link>
                        </form> : <button onClick={handleLogout} className="btn btn-primary">Logout</button>}
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar
