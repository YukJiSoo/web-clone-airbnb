import React, { useState, createContext } from 'react';
import * as RoomAPI from 'graphql/query/room';
import SearchBar from 'containers/SearchBar';

import RoomList from 'containers/RoomList';

export const SearchRoomContext = createContext();

export const SearchRoom = () => {
    const [request, setRequest] = useState(RoomAPI.GET_ROOMS);

    return (
        <SearchRoomContext.Provider value={setRequest}>
            <SearchBar />
            <RoomList query={request} />
        </SearchRoomContext.Provider>
    );
};
