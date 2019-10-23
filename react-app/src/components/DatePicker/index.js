import React, { useState } from 'react';

import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import { DayPickerRangeController } from 'react-dates';

import Style from './style';

export default ({ requestToServer, datePicked }) => {
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const [focusedInput, setFocusedInput] = useState('startDate');

    const onDatesChange = ({ startDate, endDate }) => {
        const startDateString = startDate.format('MM[월]DD[일]');
        const endDateString = endDate ? endDate.format('MM[월]DD[일]') : '체크아웃';
        datePicked(`${startDateString} - ${endDateString}`);

        setStartDate(startDate);
        setEndDate(endDate);
    };

    const onFocusChange = focusedInput => {
        if (focusedInput === null) setFocusedInput('startDate');
        else setFocusedInput(focusedInput);
    };

    const saveButtonHandler = (startDate, endDate) => () => {
        if (startDate && endDate) requestToServer(startDate, endDate);
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
                monthFormat="YYYY[년] MM[월]"
            />
            <button onClick={saveButtonHandler(startDate, endDate)}>저장</button>
        </Style>
    );
};
