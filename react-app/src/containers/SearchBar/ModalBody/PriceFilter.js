import React, { useState, useContext } from 'react';

import { SearchRoomContext } from 'pages/SearchRoom';

import PriceRangeSlider from 'components/PriceRangeSlider';

const MIN_PRICE = 0;
const MAX_PRICE = 100000;

export default ({ setButtonName, setIsClicked }) => {
    // Context
    const {
        searchOption: {
            searchOptions: { price },
        },
        dispatchSearchOption,
    } = useContext(SearchRoomContext);

    // State
    const priceState = useState([
        price && price.startPrice ? price.startPrice : MIN_PRICE,
        price && price.endPrice ? price.endPrice : MAX_PRICE,
    ]);

    // Handler
    const changeButtonName = price => {
        const [startPrice, endPrice] = price;
        setButtonName(`￦${startPrice} - ￦${endPrice}`);
    };

    const reflectPriceFilter = price => {
        dispatchSearchOption({
            type: 'setPriceFilter',
            payload: { startPrice: price[0], endPrice: price[1] },
        });
        setIsClicked(false);
    };

    const deleteButtonHandle = () => {
        dispatchSearchOption({ type: 'setPriceFilter' });
        setButtonName('가격');
        setIsClicked(false);
    };

    return (
        <PriceRangeSlider
            value={priceState}
            minPrice={MIN_PRICE}
            maxPrice={MAX_PRICE}
            rangeSlided={changeButtonName}
            saveButtonHandle={reflectPriceFilter}
            deleteButtonHandle={deleteButtonHandle}
        />
    );
};
