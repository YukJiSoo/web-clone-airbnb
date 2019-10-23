import React from 'react';
import * as Style from './style';

export default ({ body }) => {
    return (
        <Style.Modal className="modal" role="dialog">
            {body}
        </Style.Modal>
    );
};
