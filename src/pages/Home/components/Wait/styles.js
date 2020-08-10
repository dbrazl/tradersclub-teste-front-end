import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
    flex-direction: column;
    margin: 50px;
`;

export const Label = styled.h1`
    font-weight: unset;
    font-family: 'Lobster Two';
    font-size: 100px;
    background: ${(props) => (props.background ? props.background : null)};
    padding: ${(props) => (props.background ? 10 : 0)}px;
    margin: 0;
    margin-left: ${(props) => (props.background ? 30 : 0)}px;
`;

export const Align = styled.div`
    display: flex;
    flex-direction: row;
    align-items: baseline;
`;
