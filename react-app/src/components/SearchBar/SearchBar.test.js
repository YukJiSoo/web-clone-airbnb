import React from 'react';
import { render } from '@testing-library/react';
import SearchBar from './index';

describe('SearchBar', () => {
    it('모든 버튼이 정상적으로 rendering', () => {
        const { getByText } = render(<SearchBar />);
        getByText('날짜');
        getByText('인원');
        getByText('숙소 유형');
        getByText('가격');
        getByText('필터 추가하기');
    });
});
