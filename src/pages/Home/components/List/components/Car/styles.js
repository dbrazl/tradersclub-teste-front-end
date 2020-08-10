import styled from 'styled-components';

export const Item = styled.div`
    width: 90%;
    height: 150px;
    margin: 0 auto;
    margin-bottom: 20px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.3);
    cursor: pointer;

    display: flex;
    flex-direction: row;
`;

export const Column = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: ${(props) => (props.end ? 'flex-end' : null)};
`;

export const BigLabel = styled.p`
    font-size: 26px;
    font-family: 'Roboto Bold';
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    margin: 0;
`;

export const SmallLabel = styled.p`
    font-size: 20px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    margin: 0;
    margin-top: 10px;
`;
