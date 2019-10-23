import React from 'react';

import * as Style from './style';

export default ({ room }) => (
    <Style.ReservationModalBody>
        <h2>{room.name}</h2>
        <hr></hr>
        <label htmlFor="date">날짜</label>
        <input id="date" type="text" value="2020/01/04 -> 2020/01/21" readOnly />
        <label htmlFor="personnel">인원</label>
        <input id="personnel" type="text" value="게스트 1명, 유아 1명" readOnly />
        <div className="Price-Wrapper">
            <span>70.000원 X 2박</span>
            <span>140,000원</span>
        </div>
        <hr></hr>
        <button>예약하기</button>
        <small>예약 확정 전에는 요금이 청구되지 않습니다</small>
    </Style.ReservationModalBody>
);
