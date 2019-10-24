import React, { useState, createContext } from 'react';
import * as RoomAPI from 'graphql/query/room';
import SearchBar from 'containers/SearchBar';

import RoomList from 'containers/RoomList';

export const SearchRoomContext = createContext();

export const SearchRoom = () => {
    const [request, setRequest] = useState({ query: RoomAPI.GET_ROOMS, filterOptions: {} });

    return (
        <SearchRoomContext.Provider value={{ request, setRequest }}>
            <SearchBar />
            <RoomList query={request.query} filterOptions={request.filterOptions} />
        </SearchRoomContext.Provider>
    );
};
