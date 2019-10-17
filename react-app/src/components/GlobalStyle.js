import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

export default createGlobalStyle`
    ${reset};

    * {
        box-sizing: boerder-box;
    }

    html {
        font-size: 16px;
    }

    html, body, .root {
        height: 100%;
    }
`;
