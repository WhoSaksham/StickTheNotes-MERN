import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Login(props) {
    let navigate = useNavigate();

    const [credentials, setCredentials] = useState({ email: '', password: '' })

    const handleSubmit = async (e) => {
        e.preventDefault();
        let url = `/api/auth/login`
        const response = await fetch(url, { // Api call
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email: credentials.email, password: credentials.password })
        });
        const json = await response.json();
        if (json.status === 'success') {
            // Save auth-token and redirect
            localStorage.setItem('token', json.authToken)

            // Fetching logged-in User's Name 
            let urL = `/api/auth/getuser`
            const res = await fetch(urL, { // Api call
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    "auth-token": `${json.authToken}`
                }
            });
            const data = await res.json();
            const username = data.name;

            // Redirect user to home
            navigate("/");
            props.showAlert(` 👋 Welcome back '${username}' to 'StickTheNotes'`, 'success')
        } else {
            props.showAlert("No user is registered to 'StickTheNotes' with this Email/Password", 'warning')
        }
    };

    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    };

    return (
        <>
            <div className="container shadow rounded p-3 mt-5" id='login'>
                <h1>Log-In to continue</h1>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label mx-2">Email address</label>
                        <input type="email" className="form-control" name='email' id="exampleInputEmail1" value={credentials.email} aria-describedby="emailHelp" onChange={onChange} placeholder='Enter Email' />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="inputPassword5" className="form-label mx-2">Password</label>
                        <input type="password" id="inputPassword5" className="form-control" name='password' aria-describedby="passwordHelpBlock" value={credentials.password} onChange={onChange} placeholder='Enter Password' />
                    </div>
                    <button type="submit" className="btn btn-success">Login</button>
                </form>
            </div>
        </>
    )
}

export default Login