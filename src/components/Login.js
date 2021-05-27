/*eslint-disable*/
import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import axios from 'axios';
import './login.css';

export default function Login(props){ 
    const {setMode} = props;
    const [isLoggedin, setLoggedin] = useState(false);
    const [user, setUser] = useState({email: '', password: ''});
    const handleChange = (field) =>(event) => {
        setUser({...user, [field]:event.target.value})
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(process.env.REACT_APP_ACCESS_TOKEN);
        axios.post('http://localhost:5000/users/login', user)
        .then(res => {
            console.log(res.data);
            //Success alert, a loading animation as it happens
            setLoggedin(true);
        })
        .catch(err => {
            console.error(err)
        })
    }
    if(isLoggedin) return <Redirect to='http://localhost:5000/homepage'/>
    else return(
        <div className="containment">
            <div className="container">
                <div className="header">
                    <h2>Login to your account</h2>
                    <div className="boxes">
                        <div className="box-left">
                            <div className="signup-box">
                                <div className="blackbox-matter">
                                    <p>Don't have an account?</p>
                                    <a onClick={() => setMode('signup')}>Sign up</a>
                                </div>
                            </div>
                        </div>
                        <div className="box-right">
                            <p className="login-text">Login below</p>
                            <form onSubmit={handleSubmit}>
                                <div class="input-group">
                                    <span class="input-group-addon"><i class="glyphicon glyphicon-user"></i></span>
                                    <input id="email" type="text" class="form-control" name="email" placeholder="Email" value={user.email} onChange={handleChange('email')}/>
                                </div>
                                <div class="input-group">
                                    <span class="input-group-addon"><i class="glyphicon glyphicon-lock"></i></span>
                                    <input id="password" type="password" class="form-control" name="password" placeholder="Password" value={user.password} onChange={handleChange('password')}/>
                                </div>
                                <div className="forgot-group">
                                    <Link to='/'>Forgot Password?</Link>
                                    <input type="submit" value="Submit" />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}