import React from 'react';

import * as RoomAPI from 'graphql/query/room';
import DatePicker from 'components/DatePicker';

export default ({ setRequest, setButtonName, setIsClicked }) => (
    <DatePicker
        requestToServer={(startDate, endDate) => {
            setRequest({
                query: RoomAPI.GET_ROOMS_FILTERED_BY_DATE,
                filterOptions: RoomAPI.createFilterOption({ startDate, endDate }),
            });
            setIsClicked(false);
        }}
        datePicked={setButtonName}
        deleteButtonHandle={() => {
            setButtonName('날짜');
            setIsClicked(false);
        }}
        localeLanguage="ko"
    />
);
