import React from 'react';
import styled from 'styled-components';
import peace from '../../assets/peace.png';


const Logout = (props) => {
    return (
        <div>
            <img id='logout'
            src={peace}
            alt='peace'
            onClick={props.clearSession}/>
        </div>
    )
}
export default Logout;
