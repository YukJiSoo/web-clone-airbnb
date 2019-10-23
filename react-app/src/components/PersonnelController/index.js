import React, { useState, useEffect } from 'react';

import * as Style from './style';

export default ({ requestToServer, personnelControlled, deleteButtonHandle }) => {
    const adultState = useState(0);
    const childrenState = useState(0);
    const infantState = useState(0);

    const personnelItems = [[...adultState, '성인'], [...childrenState, '어린이'], [...infantState, '유아']];

    const saveButtonHandler = (adult, children, infant) => () => {
        requestToServer(adult, children, infant);
    };

    const decreaseButtonHandler = (state, setState) => () => {
        if (state === 0) return;
        setState(state - 1);
    };

    const increaseButtonHandler = (state, setState) => () => {
        setState(state + 1);
    };

    useEffect(() => {
        personnelControlled(adultState[0], childrenState[0], infantState[0]);
    });

    return (
        <Style.PersonnelController>
            {personnelItems.map((state, index) => (
                <Style.PersonnelItem key={index}>
                    <Style.ItemNameWrapper>{state[2]}</Style.ItemNameWrapper>
                    <Style.ControllButtonWrapper>
                        <button
                            className={state[0] === 0 ? 'isNonClickable' : ''}
                            onClick={decreaseButtonHandler(state[0], state[1])}
                        >
                            -
                        </button>
                        <span>{state[0]}+</span>
                        <button onClick={increaseButtonHandler(state[0], state[1])}>+</button>
                    </Style.ControllButtonWrapper>
                </Style.PersonnelItem>
            ))}
            <Style.PersonnelControllerButtonWrapper>
                <a onClick={deleteButtonHandle}>삭제</a>
                <a className="Save-Button" onClick={saveButtonHandler(adultState[0], childrenState[0], infantState[0])}>
                    저장
                </a>
            </Style.PersonnelControllerButtonWrapper>
        </Style.PersonnelController>
    );
};
