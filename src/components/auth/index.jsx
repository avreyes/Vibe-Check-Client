import React, { useState } from 'react';
import styled from 'styled-components';
import { AccountContext } from './AccountContext';
import { motion } from 'framer-motion';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';

const BoxContainer = styled.div`
    width: 39vw;
    min-height: 52vh;
    display: flex;
    flex-direction: column;
    justify-content: flex-center;
    border-radius: 19px;
    background-color: #67683C;
    box-shadow: 4px 4px 4px rgba(15, 15, 15, 0.28);
    position: relative;
    overflow: hidden;
`;

const TopContainer = styled.div`
    width: 100%;
    height: 100px;
    display: flex;
    flex-direction: column;
    justify-content: flex-center;
    padding: 1.8em;
    padding-bottom: 1em;
`;

const BackDrop = styled(motion.div)`
    width: 150vw;
    height: 175vh;
    position: absolute;
    display: flex;
    flex-direction: column;
    border-radius: 20%;
    transform: rotate(160deg);
    top: -390px;
    left: -70px;
    background: rgb(241, 196, 15);
    background: linear-gradient(
        58deg,
        rgba(241, 196, 15, 1) 20%,
        rgba(243, 172, 18, 1) 100%
    );
`;

const HeaderContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-content: center;
    margin-left: -1.5vw;
`;

const HeaderText = styled.div`
    font-size: 30px;
    font-weight: 600;
    color: #fff;
    z-index: 10;
    margin: 0;
`;

const SmallText = styled.h5`
    color: #fff;
    font-weight: 500;
    font-size: 11px;
    z-index: 10;
    margin: 0;
    margin-top: 7px;
`;

const InnerContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0em;
`;

const backdropVariants = {
    expanded: {
        width: "233%",
        height: "1850px",
        borderRadius: "140%",
        transform: "rotate(160deg)",
    },
    collapsed: {
        width: "260%",
        height: "50px",
        borderRadius: "100%",
        transform: "rotate(40deg)",
    },
};

const expandingTransition = {
    type: "spring",
    duration: 2.5,
    stiffness: 25,
};

export function AccountBox(props) {
    const [isExpanded, setExpanded] = useState(false);
    const [active, setActive] = useState("signin");

    const playExpandingAnimation = () => {
        setExpanded(true);
        setTimeout(() => {
            setExpanded(false);
        }, expandingTransition.duration * 1000 - 1500);
    };

    const switchToSignup = () => {
        playExpandingAnimation();
        setTimeout(() => {
            setActive('signup');
        }, 400);
    };

    const switchToSignin = () => {
        playExpandingAnimation();
        setTimeout(() => {
            setActive('signin');
        }, 400);
    };

    const contextValue = { switchToSignup, switchToSignin };

    return (
        <AccountContext.Provider value={contextValue}>
            <BoxContainer>
                <TopContainer>
                    <BackDrop
                        initial={false}
                        animate={isExpanded ? 'expanded' : 'collapsed'}
                        variants={backdropVariants}
                        transition={expandingTransition}
                        />
                        {active === 'signin' && (
                            <HeaderContainer>
                                <HeaderText>Welcome</HeaderText>
                                <HeaderText>Back</HeaderText>
                                <SmallText>Please sign-in to continue!</SmallText>
                            </HeaderContainer>
                        )}
                        {active === 'signup' && (
                            <HeaderContainer>
                                <HeaderText>Create</HeaderText>
                                <HeaderText>Account</HeaderText>
                                <SmallText>Please sign-up to continue!</SmallText>
                            </HeaderContainer>
                        )}
                </TopContainer>
                <InnerContainer>
                    {active === 'signin' && <LoginForm updateToken={props.updateToken} />}
                    {active === 'signup' && <SignupForm updateToken={props.updateToken}/>}
                </InnerContainer>
                <br />
            </BoxContainer>
        </AccountContext.Provider>
    );
}