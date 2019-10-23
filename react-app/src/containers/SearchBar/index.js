import React, { useState, useContext } from 'react';
import Style from './style';

import { SearchRoomContext } from 'pages/SearchRoom';

import SearchButton from './SearchButton';
import Logo from 'components/Logo';
import { DateFilter } from './ModalBody';

export default () => {
    const setRequest = useContext(SearchRoomContext);

    const searchInfos = [
        {
            id: 'date',
            name: '날짜',
            modalBody: (setButtonName, setIsClicked) => (
                <DateFilter setRequest={setRequest} setButtonName={setButtonName} setIsClicked={setIsClicked} />
            ),
        },
        { id: 'personnel', name: '인원' },
        { id: 'roomType', name: '숙소 유형' },
        { id: 'price', name: '가격' },
        { id: 'anotherOption', name: '필터 추가하기' },
    ];

    const searchStates = searchInfos.map(info => {
        const [isClicked, setIsClicked] = useState(false);
        const [buttonName, setButtonName] = useState(info.name);

        return {
            name: buttonName,
            modalBody: info.modalBody && info.modalBody(setButtonName, setIsClicked),
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
