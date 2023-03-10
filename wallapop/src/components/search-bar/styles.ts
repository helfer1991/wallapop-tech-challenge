import styled from "styled-components";

export const Search = styled.input`
    border: 2px solid rgba(207, 216, 220, .5);
    border-radius: 25px;
    height: 40px;
    margin-bottom: 12px;
    padding: 20px;
    width: 100%;

    &:focus {
        outline: none;
        border: 2px solid #36474f4d;
    }

    @media (min-width: 700px) {
        font-size: 20px;
        height: 60px;

        &::placeholder {
            font-size: 20px;
        }
    }
`;