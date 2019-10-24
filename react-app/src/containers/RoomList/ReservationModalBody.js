import React from 'react';

import * as Style from './style';
import { getNightValueFromDateString } from 'util/ConverDate';

export default ({ room, searchOptions }) => {
    // const { date } = searchOptions;
    // dummy data
    const date = { checkIn: '2019-09-10', checkOut: '2019-09-20' };
    const nights = date
        ? getNightValueFromDateString({ startDateString: date.checkIn, endDateString: date.checkOut })
        : 0;

    return (
        <Style.ReservationModalBody>
            <h2>{room.name}</h2>
            <hr></hr>
            <label htmlFor="date">날짜</label>
            {!date && (
                <input className="Text-Center" id="empty-date" type="text" value="날짜를 입력해주세요" readOnly />
            )}
            {date && (
                <Style.DateWrapper>
                    <input className="Date-Input" id="start-date" type="text" value={date.checkIn} readOnly />
                    <span className="Date-Arrow">></span>
                    <input className="Date-Input" id="end-date" type="text" value={date.checkOut} readOnly />
                </Style.DateWrapper>
            )}
            <label htmlFor="personnel">인원</label>
            <input id="personnel" type="text" value="게스트 1명, 유아 1명" readOnly />
            <div className="Price-Wrapper">
                {date ? (
                    <>
                        <span>
                            ￦ {room.price}원 X {nights}박
                        </span>
                        <span>
                            <strong>￦ {room.price * nights}원</strong>
                        </span>
                    </>
                ) : (
                    <div className="Text-Center">날짜를 입력해주세요</div>
                )}
            </div>
            <hr></hr>
            <button className={!date ? 'Non-Clickable' : ''}>예약하기</button>
            <small>예약 확정 전에는 요금이 청구되지 않습니다</small>
        </Style.ReservationModalBody>
    );
};
