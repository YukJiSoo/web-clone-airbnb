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

    svg {
        height: 32px;
        width: 32px;
        display: block;
        fill: rgb(255, 90, 95);
        padding: 1rem;
    }

    nav {
        padding-right: 1rem;
    }

    nav ul {
        padding: 0;
    }

    nav ul li {
        font-weight: normal;
        font-size: 1.2rem;
        float: left;

        padding: 0 10px;

        button {
            width: 100%;
            height: 2.5rem;

            padding: 0 1.25rem;

            border-radius: 1.25rem;

            background-color: white;

            color: black;
            font-size: 1rem;

            outline: none;
            cursor: pointer;
        }

        button:hover {
            background-color: lightgray;
            border-color: transparent;

            cursor: pointer;
        }

        button:active,
        .isClicked,
        .isClicked:hover {
            color: white;
            background-color: rgb(255, 90, 95);
            border-color: transparent;
        }
    }
`;
