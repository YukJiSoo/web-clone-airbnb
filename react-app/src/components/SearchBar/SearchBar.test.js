import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import SearchBar from './index';

/*
 * SearchBar.test.js
 *
 * SearchBar component Test
 *
 */

/* Test List
- [x] 처음 rendering되는 component는 날짜, 인원, 숙소 유형, 가격, 필터 추가하기 버튼을 소유하고 있다.
- [] 클릭된 버튼은 나머지 버튼과 다른 배경색, 글자색, 테두리색을 가진다.
- [] 버튼을 클릭하면 해당 버튼과 관련된 modal이 생성된다.
*/

describe('SearchBar', () => {
    it('모든 버튼이 정상적으로 rendering', () => {
        const { getByText } = render(<SearchBar />);
        getByText('날짜');
        getByText('인원');
        getByText('숙소 유형');
        getByText('가격');
        getByText('필터 추가하기');
    });

    it('버튼 클릭시 색상 변경', () => {
        // Given: 날짜 버튼
        const { getByText, getByTestId } = render(<SearchBar />);
        const filterByDayButton = getByText('날짜');

        // When: 날짜 버튼 클릭
        fireEvent.click(filterByDayButton);

        // Then
        getByTestId('filter-by-modal');
    });
});
