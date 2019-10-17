import React from 'react';
import * as Style from './style';

import RoomItem from 'components/RoomItem';

export default () => {
    return (
        <Style.Main>
            <Style.Section>
                <h1 className="RoomList-CountTitle">숙소 300개</h1>
                <RoomItem />
                <RoomItem />
                <RoomItem />
                <RoomItem />
            </Style.Section>
        </Style.Main>
    );
};
