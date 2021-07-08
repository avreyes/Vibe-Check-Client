import React, { useState, useEffect } from 'react';
import { AccountBox } from '../components/auth/index';


function Home() {

    const [sessionToken, setSessionToken] = useState('');

    useEffect (() => {
        if (localStorage.getItem('token')) {
            setSessionToken(localStorage.getItem('token'));
        }
    }, [])

    const updateToken = (newToken) => {
        localStorage.setItem('token', newToken);
        setSessionToken(newToken);
    }

    const clearSession = () => {
        localStorage.clear();
        setSessionToken('');
        console.log(clearSession);
    }

    return (
        <div className="Auth">
            {console.log(sessionToken)}
        <div className="Login" class='d-flex justify-content-center'>
            <AccountBox updateToken={ updateToken }/>
        </div>
    </div>
    );
}

export default Home;
