import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
    ${reset}

    h1, h2, p, a, li {
        text-decoration: none;
        font-family: ${(props) => props.theme.fonts.base};
        color: ${(props) => props.theme.fonts.color.primary};
    }

    header {
        background-color: ${(props) => props.theme.colors.primary};
        height: 60px;
        display: flex;

        div {
            width: 1100px;
            margin: 0 auto;
            display: flex;
            gap: 40px;
            align-items: center;
        }
    }

    h1 {
        font-size: ${(props) => props.theme.fonts.size.large};
        font-weight: ${(props) => props.theme.fonts.weight.bold};
        color: ${(props) => props.theme.fonts.color.tertiary};
    }

    input {
        width: 200px;
        height: 23px;
        padding: 5px;
        font-size: ${(props) => props.theme.fonts.size.extraSmall};
        font-style: italic;
        border: 2.5px solid ${(props) => props.theme.colors.secondary};
        outline: none;
        border-radius: 4px;
    }

    span {
        font-weight: ${(props) => props.theme.fonts.weight.bold};
    }

    button {
        width: 95px;
        margin-top: 30px;
        padding: 5px;
        border: 2.5px solid ${(props) => props.theme.colors.primary};
        background-color: ${(props) => props.theme.colors.primary};
        border-radius: 4px;
        font-size: ${(props) => props.theme.fonts.size.small};
        transition: all .25s ease;

        &:hover {
            background-color: ${(props) => props.theme.colors.background};
        }
    }

    button a {
        color: ${(props) => props.theme.fonts.color.tertiary};

        &:hover {
            color: ${(props) => props.theme.fonts.color.secondary};
        }
    }
`;

export default GlobalStyles;
