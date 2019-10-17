import React from 'react';

import SearchBar from 'components/SearchBar';

import RoomList from 'containers/RoomList';

export default () => {
    return (
        <>
            <SearchBar />
            <RoomList />
        </>
    );
};
