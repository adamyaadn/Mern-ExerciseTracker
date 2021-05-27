/*eslint-disable*/
import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import './login.css';

export default function Signup(props) { 
    const {setMode} = props;
    const [user, setUser] = useState({email: '', password: ''});
    const handleChange = (field) =>(event) => {
        setUser({...user, [field]:event.target.value})
    }
    const handleSubmit = () => {
        axios.post('http://localhost:5000/users/add', user)
        .then(res => {
            console.log(res.body);
            //Put up an alert telling success or something
            setMode('login');
        })
        .catch(err => {
            console.error(err)
        })
    }
    return(
        <div className="containment">
            <div className="container">
                <div className="header">
                <h2>Sign up for an account</h2>
                    <div className="boxes">
                        <div className="box-left">
                            <div className="signup-box">
                                <div className="blackbox-matter">
                                    <p>Already have an account?</p>
                                    <a onClick={() => setMode('login')}>Sign In</a>
                                </div>
                            </div>
                        </div>
                        <div className="box-right">
                            <p className="login-text">Register below</p>
                            <form onSubmit={handleSubmit}>
                                <div class="input-group">
                                    <span class="input-group-addon"><i class="glyphicon glyphicon-user"></i></span>
                                    <input id="name" type="text" class="form-control" name="name" placeholder="Full Name" value={user.name} onChange={handleChange('name')}/>
                                </div>
                                <div class="input-group">
                                    <span class="input-group-addon"><i class="glyphicon glyphicon-user"></i></span>
                                    <input id="Age" type="text" class="form-control" age="Age" placeholder="Age" value={user.age} onChange={handleChange('age')}/>
                                </div>
                                <div class="input-group">
                                    <span class="input-group-addon"><i class="glyphicon glyphicon-user"></i></span>
                                    <input id="Height" type="number" class="form-control" height="height" placeholder="Height" value={user.height} onChange={handleChange('height')}/>
                                </div>
                                <div class="input-group">
                                    <span class="input-group-addon"><i class="glyphicon glyphicon-user"></i></span>
                                    <input id="Weight" type="text" class="form-control" weight="weight" placeholder="Weight" value={user.weight} onChange={handleChange('weight')}/>
                                </div>
                                <div class="input-group">
                                    <span class="input-group-addon"><i class="glyphicon glyphicon-user"></i></span>
                                    <input id="email" type="text" class="form-control" name="email" placeholder="Email" value={user.email} onChange={handleChange('email')}/>
                                </div>
                                <div class="input-group">
                                    <span class="input-group-addon"><i class="glyphicon glyphicon-lock"></i></span>
                                    <input id="password" type="password" class="form-control" name="password" placeholder="Password" value={user.password} onChange={handleChange('password')}/>
                                </div>
                                <div className="forgot-group">
                                    <input type="submit" value="Sign Up!" />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}