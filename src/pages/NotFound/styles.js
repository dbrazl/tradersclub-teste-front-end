import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: ${window.innerHeight}px;
`;

export const Error = styled.img`
    width: 250px;
    object-fit: contain;
`;

export const Message = styled.p`
    font-size: 18px;
    text-align: center;
    color: #fff;
    margin-top: 20px;
`;

export const Back = styled(Link)`
    text-decoration: none;
    color: #fff;
    font-size: 26px;
    position: absolute;
    bottom: 50px;
`;
