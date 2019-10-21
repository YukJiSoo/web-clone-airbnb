import React, { useState } from 'react';
import Style from './style';

import Modal from 'components/Modal';
import Logo from 'components/Logo';

export default () => {
    const buttonInfos = ['날짜', '인원', '숙소 유형', '가격', '필터 추가하기'].map(name => {
        const [isClicked, setIsClicked] = useState(false);
        return {
            name,
            isClicked,
            setIsClicked,
        };
    });
    const buttonList = buttonInfos.map((info, index) => (
        <li key={index}>
            <button className={info.isClicked ? 'isClicked' : ''} onClick={() => info.setIsClicked(!info.isClicked)}>
                {info.name}
            </button>
            {info.isClicked && <Modal />}
        </li>
    ));

    return (
        <Style>
            <Logo />
            <nav>
                <ul>{buttonList}</ul>
            </nav>
        </Style>
    );
};
