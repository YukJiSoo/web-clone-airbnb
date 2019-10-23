import React, { useState } from 'react';

import * as Style from './style';

export default () => {
    return (
        <Style.PersonnelController>
            <Style.PersonnelItem>
                <Style.ItemNameWrapper>성인</Style.ItemNameWrapper>
                <Style.ControllButtonWrapper>
                    <button>-</button>
                    <span>0+</span>
                    <button>+</button>
                </Style.ControllButtonWrapper>
            </Style.PersonnelItem>
            <Style.PersonnelItem>
                <Style.ItemNameWrapper>
                    <span>어린이</span>
                    <span>2세~12세</span>
                </Style.ItemNameWrapper>
                <Style.ControllButtonWrapper>
                    <button>-</button>
                    <span>0+</span>
                    <button>+</button>
                </Style.ControllButtonWrapper>
            </Style.PersonnelItem>
            <Style.PersonnelItem>
                <Style.ItemNameWrapper>
                    <span>유아</span>
                    <span>2세미만</span>
                </Style.ItemNameWrapper>
                <Style.ControllButtonWrapper>
                    <button>-</button>
                    <span>0+</span>
                    <button>+</button>
                </Style.ControllButtonWrapper>
            </Style.PersonnelItem>
            <Style.PersonnelControllerButtonWrapper>
                <a>삭제</a>
                <a className="Save-Button">저장</a>
            </Style.PersonnelControllerButtonWrapper>
        </Style.PersonnelController>
    );
};
