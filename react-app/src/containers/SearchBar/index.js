import React, { useState, useContext } from 'react';
import Style from './style';

import SearchButton from './SearchButton';
import Logo from 'components/Logo';
import Modal from 'components/Modal';
import { DateFilter, PersonnelFilter, PriceFilter } from './ModalBody';

import { isMobile } from 'Constants';

export default () => {
    const searchInfos = [
        {
            name: '날짜',
            modalBody: (setButtonName, setIsClicked) => (
                <DateFilter setButtonName={setButtonName} setIsClicked={setIsClicked} />
            ),
        },
        {
            name: '인원',
            modalBody: (setButtonName, setIsClicked) => (
                <PersonnelFilter setButtonName={setButtonName} setIsClicked={setIsClicked} />
            ),
        },
        {
            name: '가격',
            modalBody: (setButtonName, setIsClicked) => (
                <PriceFilter setButtonName={setButtonName} setIsClicked={setIsClicked} />
            ),
        },
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
            {isMobile() && searchStates.map(info => info.isClicked && <Modal body={info.modalBody} />)}
        </Style>
    );
};
