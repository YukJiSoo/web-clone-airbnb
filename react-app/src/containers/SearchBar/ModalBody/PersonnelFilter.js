import React, { useContext } from 'react';
import PersonnelController from 'components/PersonnelController';

import { SearchRoomContext } from 'pages/SearchRoom';

export default ({ setButtonName, setIsClicked }) => {
    const { dispatchSearchOption } = useContext(SearchRoomContext);

    return (
        <PersonnelController
            requestToServer={(adult, children, infant) => {
                dispatchSearchOption({
                    type: 'setPersonnelFilter',
                    payload: { adult, children, infant },
                });
                setIsClicked(false);
            }}
            personnelControlled={(adult, children, infant) => {
                const guest = adult + children + infant;

                if (guest === 0) setButtonName('인원');
                else setButtonName(`게스트 ${guest}명${infant === 0 ? '' : `, 유아 ${infant}명`}`);
            }}
            deleteButtonHandle={() => {
                setButtonName('인원');
                setIsClicked(false);
            }}
        />
    );
};
