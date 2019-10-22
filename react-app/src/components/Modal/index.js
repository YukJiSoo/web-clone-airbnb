import React from 'react';
import * as Style from './style';

export default ({ body, modalId }) => {
    return (
        <Style.Modal role="dialog" id={modalId}>
            {body}
        </Style.Modal>
    );
};
