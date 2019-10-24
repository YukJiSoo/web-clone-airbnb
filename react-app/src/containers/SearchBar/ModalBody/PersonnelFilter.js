import React from 'react';
import PersonnelController from 'components/PersonnelController';

import * as RoomAPI from 'graphql/query/room';

export default ({ setRequest, setButtonName, setIsClicked }) => {
    return (
        <PersonnelController
            requestToServer={(adult, children, infant) => {
                setRequest({
                    query: RoomAPI.GET_ROOMS,
                    filterOptions: RoomAPI.createFilterOption({ adult, children, infant }),
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
