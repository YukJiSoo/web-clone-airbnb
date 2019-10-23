import styled from 'styled-components';

export const DatePicker = styled.div`
    && {
        vertical-align: none;
    }

    .DayPicker {
        box-shadow: none;
    }

    .CalendarMonth_caption {
        margin-bottom: 1rem;
    }

    /* Calendar color */
    .CalendarDay__selected_span,
    .CalendarDay__hovered_span:hover,
    .CalendarDay__hovered_span {
        background: rgb(255, 150, 154);
        color: white;
        border: 1px solid white;
    }

    .CalendarDay__selected,
    .CalendarDay__default:hover,
    .CalendarDay__selected:hover,
    .CalendarDay__selected_span:active,
    .CalendarDay__selected_span:hover {
        background: rgb(255, 90, 95);
        color: white;
        border: 1px solid white;
    }

    .CalendarDay__blocked_out_of_range:hover {
        background: white;
        color: lightgray;
        border: 1px solid lightgray;
    }

    .CalendarDay__defaultCursor {
        cursor: pointer;
    }
`;

export const DatePickerButtonWrapper = styled.div`
    && {
        margin-top: 2rem;

        display: flex;
        flex-direction: row;
        justify-content: space-between;

        .Save-Button {
            color: rgb(255, 90, 95);
        }

        a:hover {
            text-decoration: underline;
            cursor: pointer;
        }
    }
`;
