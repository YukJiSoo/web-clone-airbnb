import React, { useState } from 'react';
import Style from './style';

import Modal from 'components/Modal';
import Logo from 'components/Logo';
import DatePicker from 'components/DatePicker';

const searchInfos = [
    { id: 'date', name: '날짜', modalBody: <DatePicker /> },
    { id: 'personnel', name: '인원' },
    { id: 'roomType', name: '숙소 유형' },
    { id: 'price', name: '가격' },
    { id: 'anotherOption', name: '필터 추가하기' },
];

const SearchButton = ({ name, modalBody, isClicked, setIsClicked, onClick }) => {
    return (
        <div>
            <button className={isClicked ? 'isClicked' : ''} onClick={onClick(isClicked, setIsClicked)}>
                {name}
            </button>
            {isClicked && <Modal body={modalBody} />}
        </div>
    );
};

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
            <SearchButton
                name={info.name}
                modalBody={info.modalBody}
                isClicked={info.isClicked}
                setIsClicked={info.setIsClicked}
                onClick={filterButtonClicked}
            />
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
