import React, { useState, useEffect } from 'react';
import { AccountBox } from './auth/index';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

export function Main  ()  {
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
    }

    return (
        <React.Fragment>
            <AccountBox updateToken={ updateToken }/>
        </React.Fragment>
    )
}