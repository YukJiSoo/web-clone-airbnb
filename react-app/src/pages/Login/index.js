import React from 'react';

import * as Style from './style';

import Logo from 'components/Logo';

export default () => {
    return (
        <Style.Main>
            <Logo />
            <Style.InputField>
                <input id="email" type="text" placeholder="Email"></input>
                <input id="password" type="password" placeholder="Password"></input>
            </Style.InputField>
            <Style.LoginButtonWrapper>
                <button>로그인</button>
                <button>회원가입</button>
            </Style.LoginButtonWrapper>
        </Style.Main>
    );
};
