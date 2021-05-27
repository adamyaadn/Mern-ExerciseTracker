import React, {useState} from 'react';
import Login from './components/Login';
import Signup from './components/Signup';

export default function LandingPage(props) {
    const [mode, setMode] = useState('login');
    return(
        <div>
            {
                mode === 'login'?<Login setMode={setMode}/>:<Signup setMode={setMode}/>
            }
        </div>
    )
}