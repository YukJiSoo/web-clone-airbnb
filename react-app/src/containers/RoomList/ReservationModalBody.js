import React, { useEffect } from 'react';
import { useMutation } from '@apollo/react-hooks';

import * as Style from './style';

import * as RoomAPI from 'graphql/mutation/booking';

import { getNightValueFromDateString } from 'util/ConverDate';

export default ({ room, searchOptions, closeModal }) => {
    const { date, personnel } = searchOptions;
    const [addBooking, { data, loading, error }] = useMutation(RoomAPI.ADD_BOOKING);

    useEffect(() => {
        if (data && !data.reserveRoom.success) console.log('이미 예약됨');
        if (data && data.reserveRoom.success) closeModal();
        if (loading) console.log('추가 중');
        if (error) console.log('추가 실패');
    }, [data, loading, error]);

    const nights = date
        ? getNightValueFromDateString({ startDateString: date.checkIn, endDateString: date.checkOut })
        : 0;
    const guest = personnel ? personnel.adult + personnel.children : 0;

    const reserveButtonClick = () => {
        const variables = { data: { roomId: room.id, date, personnel } };
        addBooking({ variables });
    };

    return (
        <Style.ReservationModalBody>
            <h2>{room.name}</h2>
            <hr></hr>
            <label htmlFor="date">날짜</label>
            {!date && <input className="Text-Center" id="date" type="text" value="날짜를 입력해주세요" readOnly />}
            {date && (
                <Style.DateWrapper id="date">
                    <input className="Date-Input" id="start-date" type="text" value={date.checkIn} readOnly />
                    <span className="Date-Arrow">></span>
                    <input className="Date-Input" id="end-date" type="text" value={date.checkOut} readOnly />
                </Style.DateWrapper>
            )}
            <label htmlFor="personnel">인원</label>
            {personnel ? (
                <input
                    id="personnel"
                    type="text"
                    value={`게스트 ${guest}명${personnel.infant === 0 ? '' : `, 유아 ${personnel.infant}명`}`}
                    readOnly
                />
            ) : (
                <input className="Text-Center" id="personnel" type="text" value="인원을 설정해주세요" readOnly />
            )}
            <div className="Price-Wrapper">
                {date && personnel ? (
                    <>
                        <span>
                            ￦ {room.price}원 X 게스트 {guest}명 X {nights}박
                        </span>
                        <span>
                            <strong>￦ {room.price * guest * nights}원</strong>
                        </span>
                    </>
                ) : (
                    <div className="Text-Center">숙박조건을 모두 입력해주세요</div>
                )}
            </div>
            <hr></hr>
            <button className={!(date && personnel) ? 'Non-Clickable' : ''} onClick={reserveButtonClick}>
                예약하기
            </button>
            <small>예약 확정 전에는 요금이 청구되지 않습니다</small>
        </Style.ReservationModalBody>
    );
};
