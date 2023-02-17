import styled from "styled-components";

export const Search = styled.input`
    border: 2px solid rgba(207, 216, 220, .5);
    border-radius: 25px;
    height: 40px;
    padding: 20px;
    width: 100%;

    &:focus {
        outline: none;
        border: 2px solid #36474f4d;
    }
`;