import React from 'react';

import Modal from 'components/Modal';

export default ({ name, modalBody, isClicked, setIsClicked, onClick }) => {
    return (
        <div>
            <button className={isClicked ? 'isClicked' : ''} onClick={onClick(isClicked, setIsClicked)}>
                {name}
            </button>
            {isClicked && <Modal body={modalBody} />}
        </div>
    );
};
