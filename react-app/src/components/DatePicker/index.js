import React, { useState, useContext } from 'react';

import { SearchRoomContext } from 'pages/SearchRoom';
import * as RoomAPI from 'graphql/query/room';

import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import { DayPickerRangeController } from 'react-dates';

import Style from './style';

export default () => {
    const setRequest = useContext(SearchRoomContext);

    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const [focusedInput, setFocusedInput] = useState('startDate');

    const onDatesChange = ({ startDate, endDate }) => {
        setStartDate(startDate);
        setEndDate(endDate);
    };

    const onFocusChange = focusedInput => {
        if (focusedInput === null) setFocusedInput('startDate');
        else setFocusedInput(focusedInput);
    };

    return (
        <Style>
            <DayPickerRangeController
                startDate={startDate}
                endDate={endDate}
                focusedInput={focusedInput}
                onFocusChange={onFocusChange}
                onDatesChange={onDatesChange}
                hideKeyboardShortcutsPanel={true}
                numberOfMonths={2}
            />
            <button onClick={() => setRequest(RoomAPI.GET_ROOMS_FILTERED_BY_DATE)}>저장</button>
        </Style>
    );
};
