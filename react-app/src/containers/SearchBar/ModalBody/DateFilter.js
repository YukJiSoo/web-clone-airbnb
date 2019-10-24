import React, { useContext } from 'react';

import { SearchRoomContext } from 'pages/SearchRoom';

import * as RoomAPI from 'graphql/query/room';
import DatePicker from 'components/DatePicker';

export default ({ setButtonName, setIsClicked }) => {
    const { dispatchSearchOption } = useContext(SearchRoomContext);

    return (
        <DatePicker
            requestToServer={(startDate, endDate) => {
                dispatchSearchOption({
                    type: 'setDateFilter',
                    payload: RoomAPI.createDateSearchOption({ startDate, endDate }),
                });
                setIsClicked(false);
            }}
            datePicked={(startDate, endDate) => {
                const startDateString = startDate.format('M[월]D[일]');
                const endDateString = endDate ? endDate.format('M[월]D[일]') : '체크아웃';
                setButtonName(`${startDateString} - ${endDateString}`);
            }}
            deleteButtonHandle={() => {
                dispatchSearchOption({ type: 'setDateFilter' });
                setButtonName('날짜');
                setIsClicked(false);
            }}
            localeLanguage="ko"
        />
    );
};
