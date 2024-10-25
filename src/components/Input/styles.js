import styled from 'styled-components';

export const InputContainer = styled.div`
    width: 100%;
    min-width: 300px;
    height: 75px;
    background-color: #AAAAFF;
    margin-bottom: 10px;
    border-radius: 15px;

    display: flex;
    align-items: center;
    justify-content: flex-end;

    font-size: 2rem;
    font-family: 'Roboto';

    input {
        width: 100%;
        height: 75px;
        background-color: #AAAAFF;
        border: 0;
        display: flex;
        border-radius: 15px;
        padding: 10px;
        // padding: 0 10px;
        font-size: 2.5rem;
        font-family: 'Roboto';
        color: #FFFFFF;
        text-align: end;
    }
`