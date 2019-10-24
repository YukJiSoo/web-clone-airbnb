import React, { useState, useEffect } from 'react';
import { useMutation } from '@apollo/react-hooks';

import * as Style from './style';

import * as AuthAPI from 'graphql/mutation/auth';

import Logo from 'components/Logo';

export default () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [joinUser, { data, loading, error }] = useMutation(AuthAPI.JOIN_USER);

    useEffect(() => {
        if (data) console.log(data.joinUser.token);
        if (loading) console.log('로그인 중');
        if (error) console.log('로그인 실패');
    }, [data, loading, error]);

    const join = () => joinUser({ variables: { email, password } });

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
            </Style.InputField>
            <Style.LoginButtonWrapper>
                <button onClick={join}>로그인</button>
                <button>회원가입</button>
            </Style.LoginButtonWrapper>
        </Style.Main>
    );
};
