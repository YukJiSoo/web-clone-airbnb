import React, { useState } from 'react';
import Style from './style';

import Modal from 'components/Modal';
import Logo from 'components/Logo';
import DatePicker from 'components/DatePicker';

const searchInfos = [
    { name: '날짜', modalBody: <DatePicker /> },
    { name: '인원' },
    { name: '숙소 유형' },
    { name: '가격' },
    { name: '필터 추가하기' },
];

export default () => {
    const searchStates = searchInfos.map(info => {
        const [isClicked, setIsClicked] = useState(false);
        return {
            name: info.name,
            modalBody: info.modalBody,
            isClicked,
            setIsClicked,
        };
    });

    const filterButtonClicked = (state, setState) => () => {
        searchStates.forEach(button => button.isClicked && button.setIsClicked(false));
        setState(!state);
    };

    const buttonList = searchStates.map((info, index) => (
        <li key={index}>
            <button
                className={info.isClicked ? 'isClicked' : ''}
                onClick={filterButtonClicked(info.isClicked, info.setIsClicked)}
            >
                {info.name}
            </button>
            {info.isClicked && <Modal body={info.modalBody} />}
        </li>
    ));

    return (
        <Style>
            <Logo />
            <nav className="Search-Bar">
                <ul>{buttonList}</ul>
            </nav>
        </Style>
    );
};
