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
        fill: rgb(255, 90, 95);
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
            border: solid 1px rgb(255, 90, 95);

            background-color: white;

            color: black;
            font-size: 1rem;

            outline: none;
            cursor: pointer;
        }

        button:hover {
            background-color: rgb(255, 90, 95);
            border-color: transparent;

            color: white;
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
