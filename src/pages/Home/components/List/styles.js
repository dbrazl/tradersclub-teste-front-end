import styled from 'styled-components';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { Link } from 'react-router-dom';

export const Container = styled.div`
    width: 100%;
    height: 100%;
    padding-top: 50px;
`;

export const Scroll = styled(PerfectScrollbar)``;

export const NotFound = styled.div`
    width: 100%;

    display: flex;
    align-items: center;
    flex-direction: column;
`;

export const Unable = styled.p`
    font-size: 26px;
    text-align: center;
    width: 150px;
    color: #fff;
    background: #2e496b;

    padding: 10px;
    margin-bottom: 10px;
`;

export const Message = styled.p`
    font-size: 26px;
    text-align: center;
`;

export const GoTo = styled(Link)`
    text-decoration: none;
    color: #fff;
`;
