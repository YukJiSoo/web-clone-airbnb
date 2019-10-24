import React, { createContext, useReducer } from 'react';

import * as RoomAPI from 'graphql/query/room';

import SearchBar from 'containers/SearchBar';
import RoomList from 'containers/RoomList';

const initialSearchOptionState = { query: RoomAPI.GET_ROOMS, searchOptions: {} };
const searchOptionReducer = (state, { type, payload }) => {
    switch (type) {
        case 'reset': {
            return initialSearchOptionState;
        }
        case 'setDateFilter': {
            return { ...state, searchOptions: { ...state.searchOptions, date: payload } };
        }
        case 'setPersonnelFilter': {
            return { ...state, searchOptions: { ...state.searchOptions, personnel: payload } };
        }
        default: {
            throw new Error(`unexpected action.type: ${type}`);
        }
    }
};

export const SearchRoomContext = createContext();

export const SearchRoom = () => {
    const [searchOption, dispatchSearchOption] = useReducer(searchOptionReducer, initialSearchOptionState);

    return (
        <SearchRoomContext.Provider value={{ searchOption, dispatchSearchOption }}>
            <SearchBar />
            <RoomList />
        </SearchRoomContext.Provider>
    );
};
