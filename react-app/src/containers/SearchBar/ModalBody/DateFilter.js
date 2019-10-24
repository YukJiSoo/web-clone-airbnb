import React from 'react';

import * as RoomAPI from 'graphql/query/room';
import DatePicker from 'components/DatePicker';

export default ({ setRequest, setButtonName, setIsClicked }) => (
    <DatePicker
        requestToServer={(startDate, endDate) => {
            setRequest({
                query: RoomAPI.GET_ROOMS,
                filterOptions: RoomAPI.createFilterOption({ startDate, endDate }),
            });
            setIsClicked(false);
        }}
        datePicked={(startDate, endDate) => {
            const startDateString = startDate.format('M[월]D[일]');
            const endDateString = endDate ? endDate.format('M[월]D[일]') : '체크아웃';
            setButtonName(`${startDateString} - ${endDateString}`);
        }}
        deleteButtonHandle={() => {
            setButtonName('날짜');
            setIsClicked(false);
        }}
        localeLanguage="ko"
    />
);
