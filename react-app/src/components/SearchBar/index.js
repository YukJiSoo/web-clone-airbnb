import React from 'react';
import Style from './style';

import Logo from 'components/Logo';

export default () => {
    return (
        <Style>
            <Logo />
            <nav>
                <ul>
                    <li>
                        <button>날짜</button>
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
