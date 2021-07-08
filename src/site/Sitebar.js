import React from 'react';
import { Navbar, NavbarBrand, Nav, NavItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import Logout from '../components/auth/Logout';

const Sitebar = (props) => {
    return (
        <Navbar color="dark" dark expand="md">
            <NavbarBrand>
                Vibe Check
            </NavbarBrand>
            <Nav className='ml-auto'>
                <NavItem>
                    <Link to='/' className='site-link'>Profile</Link>
                </NavItem>
                <NavItem>
                    <Link to='/' className='site-link'>Daily Horoscopes</Link>
                </NavItem>
                <NavItem>
                    <Link to='/' className='site-link'>Forums</Link>
                </NavItem>
                <NavbarBrand href='/'>
                    <Logout clearSession={props.clearSession}/>
                </NavbarBrand>
            </Nav>
        </Navbar>
    )
}
export default Sitebar;