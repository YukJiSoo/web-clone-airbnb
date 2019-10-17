import React from 'react';
import Style from './style';

// TODO: Inject real data
export default () => {
    return (
        <Style>
            <div className="Room-image"></div>
            <div className="Room-Content">
                <h3>숙소 이름</h3>
                <p>인원, 침실, 침대, 욕실</p>
                <p>그외 옵션</p>
                <div className="Room-Content-BottomArea">
                    <span>리뷰개수</span>
                    <button>예약하기</button>
                </div>
            </div>
        </Style>
    );
};
