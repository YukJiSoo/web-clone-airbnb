import React, { useContext } from 'react';
import PersonnelController from 'components/PersonnelController';

import { SearchRoomContext } from 'pages/SearchRoom';

export default ({ setButtonName, setIsClicked }) => {
    const {
        searchOption: { searchOptions },
        dispatchSearchOption,
    } = useContext(SearchRoomContext);

    return (
        <PersonnelController
            personnel={searchOptions.personnel ? searchOptions.personnel : {}}
            requestToServer={personnel => {
                dispatchSearchOption({
                    type: 'setPersonnelFilter',
                    payload: personnel,
                });
                setIsClicked(false);
            }}
            personnelControlled={({ adult, children, infant }) => {
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
