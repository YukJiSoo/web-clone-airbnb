import React from 'react';
import { useQuery } from '@apollo/react-hooks';

import * as Style from './style';
import { GET_ROOMS } from './graphql';

import RoomItem from 'components/RoomItem';

export default () => {
    const { loading, error, data } = useQuery(GET_ROOMS);
    // TODO: 로딩, 에러 view 구현
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error!(</p>;

    return (
        <Style.Main>
            <Style.Section>
                <h1 className="RoomList-CountTitle">숙소 {data.rooms.length}개</h1>
                {data.rooms.map(({ room, roomOption }) => (
                    <RoomItem key={room.id} info={room} option={roomOption} />
                ))}
            </Style.Section>
        </Style.Main>
    );
};