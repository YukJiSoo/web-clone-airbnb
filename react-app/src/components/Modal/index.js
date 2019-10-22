import React from 'react';
import * as Style from './style';

export default ({ body }) => {
    return <Style.Modal data-testid="modal">{body}</Style.Modal>;
};
