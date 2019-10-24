import React, { useState, useEffect } from 'react';
import { useMutation } from '@apollo/react-hooks';

import * as Style from './style';

import * as AuthAPI from 'graphql/mutation/auth';

import Logo from 'components/Logo';

export default () => {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [registerUser, { data, loading, error }] = useMutation(AuthAPI.REGISTER_USER);

    useEffect(() => {
        if (data) console.log(data.registerUser.token);
        if (loading) console.log('회원가입 중');
        if (error) console.log('회원가입 실패');
    }, [data, loading, error]);

    const register = () => {
        registerUser({ variables: { data: { email, password, name } } });
    };

    return (
        <Style.Main>
            <Logo />
            <Style.InputField>
                <input id="email" type="text" placeholder="Email" onChange={e => setEmail(e.target.value)} />
                <input
                    id="password"
                    type="password"
                    placeholder="Password"
                    onChange={e => setPassword(e.target.value)}
                />
                <input id="name" type="text" placeholder="Name" onChange={e => setName(e.target.value)} />
            </Style.InputField>
            <Style.RegisterButton onClick={register}>회원가입</Style.RegisterButton>
        </Style.Main>
    );
};
