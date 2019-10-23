import React, { useState } from 'react';
import { useQuery } from '@apollo/react-hooks';

import * as Style from './style';

import RoomItem from 'components/RoomItem';
import Modal from 'components/Modal';

export default ({ query, filterOptions }) => {
    const [reserveButtonState, setReserveButtonState] = useState({ isClicked: false, roomId: null });
    const { loading, error, data } = useQuery(query, {
        variables: { filterOptions },
    });
    // TODO: 로딩, 에러 view 구현
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error!(</p>;

    const reserveButtonHandle = ({ roomId }) => {
        const state = reserveButtonState.isClicked
            ? { ...reserveButtonState, isClicked: false, roomId: null }
            : { ...reserveButtonState, isClicked: true, roomId };
        setReserveButtonState(state);
    };

    return (
        <Style.Main>
            <Style.Section>
                <h1 className="RoomList-CountTitle">숙소 {data.rooms.length}개</h1>
                {data.rooms.map(({ room, roomOption }) => (
                    <RoomItem key={room.id} info={room} option={roomOption} reserveButtonHandle={reserveButtonHandle} />
                ))}
            </Style.Section>
            {reserveButtonState.isClicked && <Modal />}
        </Style.Main>
    );
};
