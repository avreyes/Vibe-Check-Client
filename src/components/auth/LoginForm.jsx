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

const LoginForm = (props) => {
    console.log(props);
    const { switchToSignup } = useContext(AccountContext);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        fetch('http://localhost:3000/user/login', {
            method: 'POST',
            body: JSON.stringify(
                {user:{email: email, password: password}}
            ),
            headers: new Headers ({
                'Content-Type': 'application/json'
            })
        }).then(
            (response) => response.json()
        ).then((data) => {
            props.updateToken(data.sessionToken);
        })
        .catch(err => console.log(err))
    }

    return (

        <BoxContainer >
            <FormContainer>
                <Input onChange={(e) => setEmail(e.target.value)} name='email' value={ email } placeholder='Email' />
                <Input onChange={(e) => setPassword(e.target.value)} name='password' value={ password } placeholder='Password' />
            </FormContainer>
            <Marginer direction='vertical' margin={10} />
            {/* <MutedLink href='#'>Forget your password?</MutedLink> */}
            <Marginer direction='vertical' margin='1.6em' />
            <SubmitButton type='submit' onSubmit={handleSubmit}>Sign In</SubmitButton>
            <Marginer direction='vertical' margin='1em' />
            {/* <MutedLink href='#'> */}
                Don't have an account?{" "}
                <BoldLink onClick={switchToSignup}>
                    Signup
                </BoldLink>
            {/* </MutedLink> */}
        </BoxContainer>

    )
};
export default LoginForm;