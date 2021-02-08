import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

import Patterns from '../utils/PatternsHtml';

import {
    Codify,
    Headline,
    Input,
    Button,
    LayoutLandingPage,
    Form
} from '../components';

export default function AdminSignIn() {
    const [user, setUser] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [disabled, setDisabled] = useState(false);

    const history = useHistory();

    function handleSubmit(event) {
        event.preventDefault();

        if (disabled) return;
        setDisabled(true);

        const body = { email, password };
        // axios
        //     .post(`${process.env.API_BASE_URL}/admin/sign-in`, body)
        //     .then(({ data }) => {

        //         setUser({ ...data });

        //         if (confirm('Login feito com sucesso! Redirecionando para a página inicial ...')) {
        //             history.push('/');
        //         } else {
        //             setDisabled(false);
        //         }
        //     })
        //     .catch(({ response }) => {
        //         console.error(response);
        //         setDisabled(false);

        //         alert(response.data);
        //     });
        history.push('/');
    }

    return (
        <LayoutLandingPage>
            <Codify
                color='black'
                fontSize='3rem'
                lineHeight='6rem'
                background='black'
            >
                codify
            </Codify>
            <Headline> learn. practice. code. </Headline>

            <Form onSubmit={handleSubmit}>
                <Input
                    type='email'
                    placeholder='e-mail'
                    value={email}
                    onChange={event => setEmail(event.target.value)}
                    pattern={Patterns.email.regex}
                    title={Patterns.email.helper}
                    required
                    autoFocus
                    autocomplete='on'
                />
                <Input
                    type='password'
                    placeholder='senha'
                    value={password}
                    onChange={event => setPassword(event.target.value)}
                    pattern={Patterns.password.regex}
                    title={Patterns.password.helper}
                    required
                />
                <Button
                    type='submit'
                    disabled={disabled}
                    isLoading={disabled}
                >
                    {disabled ? '' : 'entrar'}
                </Button>

            </Form>
        </LayoutLandingPage>
    );
}