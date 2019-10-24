import React, { useState, useContext } from 'react';
import PersonnelController from 'components/PersonnelController';

import { SearchRoomContext } from 'pages/SearchRoom';

export default ({ setButtonName, setIsClicked }) => {
    const {
        searchOption: {
            searchOptions: { personnel },
        },
        dispatchSearchOption,
    } = useContext(SearchRoomContext);

    const adultState = useState(personnel && personnel.adult ? personnel.adult : 0);
    const childrenState = useState(personnel && personnel.children ? personnel.children : 0);
    const infantState = useState(personnel && personnel.infant ? personnel.infant : 0);

    const personnelItems = [
        [...adultState, '성인', 'adult'],
        [...childrenState, '어린이', 'children'],
        [...infantState, '유아', 'infant'],
    ];

    return (
        <PersonnelController
            personnelItems={personnelItems}
            requestToServer={personnel => {
                dispatchSearchOption({
                    type: 'setPersonnelFilter',
                    payload: personnel,
                });
                setIsClicked(false);
            }}
            personnelControlled={([adult, children, infant]) => {
                const guest = adult + children + infant;

                if (guest === 0) setButtonName('인원');
                else setButtonName(`게스트 ${guest}명${infant === 0 ? '' : `, 유아 ${infant}명`}`);
            }}
            deleteButtonHandle={() => {
                dispatchSearchOption({ type: 'setPersonnelFilter' });
                setButtonName('인원');
                setIsClicked(false);
            }}
        />
    );
};
