import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Signup(props) {
    let navigate = useNavigate();

    const [credentials, setCredentials] = useState({ name: '', email: '', password: '', cpassword: '' })

    const handleSubmit = async (e) => {
        e.preventDefault();
        let url = `/${process.env.REACT_APP_SIGNUP}`
        const response = await fetch(url, { // Api call
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name: credentials.name, email: credentials.email, password: credentials.password })
        });
        const json = await response.json();

        // Save auth-token and redirect
        if (json.status === 'success') {
            localStorage.setItem('token', json.authToken)
            navigate("/");
            props.showAlert(`Welcome onboard to 'StickTheNotes', '${json.user.name}'`, 'success')
        } else {
            props.showAlert('You are already registered with us. Try loggin-in!', 'warning')
            navigate("/login");
        }
    };

    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    };

    return (
        <>
            <div className="container shadow rounded p-3 mt-4" id='signup'>
                <h1>Sign-Up to StickTheNotes</h1>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label mx-2">Name</label>
                        <input type="text" className="form-control" id="name" aria-describedby="nameHelp" placeholder='Enter Name' name='name' onChange={onChange} required minLength={5} />
                        <div id="nameHelp" className="form-text mx-2">What's your Good Name?</div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label mx-2">Email address</label>
                        <input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder='Enter Email' name='email' onChange={onChange} required />
                        <div id="emailHelp" className="form-text mx-2">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label mx-2">Password</label>
                        <input type="password" id="password" className="form-control" aria-describedby="passwordHelpBlock" placeholder='Enter Password' name='password' onChange={onChange} required minLength={7} />
                        <div id="passwordHelpBlock" className="form-text mx-2">
                            Your password must be atleast 7 characters long. We never save passwords in plain-text form
                        </div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="cpassword" className="form-label mx-2">Confirm Password</label>
                        <input type="password" id="cpassword" className="form-control" aria-describedby="cpasswordHelpBlock" placeholder='Confirm Password' name='cpassword' onChange={onChange} required minLength={7} />
                        <div id="cpasswordHelpBlock" className="form-text mx-2">
                            Confirm your password
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary">SignUp</button>
                </form>
            </div>
        </>
    )
}

export default Signup