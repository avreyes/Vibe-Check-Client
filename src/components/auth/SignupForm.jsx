import React, { useContext, useState } from 'react';
import{
    BoldLink,
    BoxContainer,
    FormContainer,
    Input,
    MutedLink,
    SubmitButton,
} from './Common';
import { Marginer } from './Marginer';
import { AccountContext } from './AccountContext';

const SignupForm = (props) => {
    const { switchToSignin } = useContext(AccountContext);

    const [firstName, setFirstName] = useState('');
    const [birthday, setBirthday] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [about, setAbout] = useState('');
    const [zodiac, setZodiac] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        fetch('http://localhost:3000/user/register', {
            method: 'POST',
            body: JSON.stringify({ user:{firstName: firstName, birthday: birthday, email: email, password: password, about: about, zodiac: zodiac}}),
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        }).then(
            (response) => response.json()
        ).then((data) => {
            props.updateToken(data.sessionToken)
        })
    }

    return (
        <BoxContainer >
            <FormContainer >
                <Input required onChange={(e) => setFirstName(e.target.value)} name='firstName' value={firstName} placeholder="First Name" />
                <Input required onChange={(e) => setBirthday(e.target.value)} name='birthday' value={birthday} placeholder="MM/DD" />
                <Input required type='email' onChange={(e) => setEmail(e.target.value)} name='email' value={email} placeholder="Email" />
                <Input required type='password' minLength='5' onChange={(e) => setPassword(e.target.value)} name='password' vlaue={password} placeholder="Password" />
                <Input required onChange={(e) => setAbout(e.target.value)} name='about' value={about} placeholder="About" />
                <Input required onChange={(e) => setZodiac(e.target.value)} name='zodiac' value={zodiac} placeholder="Zodiac" />
            </FormContainer>
            <Marginer direction='vertical' margin={10} />
            <SubmitButton type='submit' onSubmit={ handleSubmit }>Sign Up</SubmitButton>
            <Marginer direction='vertical' margin='1em' />
            {/* <MutedLink href='#'> */}
                Already have an account?
                <BoldLink onClick={switchToSignin}>
                    Sign In
                </BoldLink>
            {/* </MutedLink> */}
        </BoxContainer>
    );
}
export default SignupForm;