import styled from 'styled-components';

export default styled.header`
    && {
        position: fixed;

        width: 100%;

        display: flex;
        flex-direction: row;
        align-items: center;

        background-color: white;

        box-shadow: 0 0 2px 0 lightgray;
    }

    .logo {
        height: 32px;
        width: 32px;
        display: block;
        fill: var(--primary-basic-color);
        padding: 1rem;
    }

    .Search-Bar {
        padding-right: 1rem;
    }

    .Search-Bar ul {
        padding: 0;
        list-style: none;
    }

    .Search-Bar > ul > li {
        float: left;

        padding: 0 10px;

        button {
            width: 100%;
            height: 2.5rem;

            padding: 0 1.25rem;

            border-radius: 1.25rem;
            border: solid 2px var(--primary-basic-color);

            background-color: white;

            color: var(--primary-basic-color);
            font-size: 1rem;
            font-weight: 600;

            outline: none;
            cursor: pointer;
        }

        button:hover {
            background-color: var(--primary-light-color);
            border-color: transparent;

            color: white;
            cursor: pointer;
        }

        button:active,
        .isClicked {
            color: white;
            background-color: var(--primary-basic-color);
            border-color: transparent;
        }
    }
`;
