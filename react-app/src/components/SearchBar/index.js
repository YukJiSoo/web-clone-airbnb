import React, { useState } from 'react';
import Style from './style';

import Modal from 'components/Modal';
import Logo from 'components/Logo';

export default () => {
    const [isDayButtonClicked, setDayButtonClicked] = useState(false);

    return (
        <Style>
            <Logo />
            <nav>
                <ul>
                    <li>
                        <div>
                            <button onClick={() => setDayButtonClicked(!isDayButtonClicked)}>날짜</button>
                            {isDayButtonClicked && <Modal />}
                        </div>
                    </li>
                    <li>
                        <button>인원</button>
                    </li>
                    <li>
                        <button>숙소 유형</button>
                    </li>
                    <li>
                        <button>가격</button>
                    </li>
                    <li>
                        <button>필터 추가하기</button>
                    </li>
                </ul>
            </nav>
        </Style>
    );
};
