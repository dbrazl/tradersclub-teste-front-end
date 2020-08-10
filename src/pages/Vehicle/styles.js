import styled from 'styled-components';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { Link } from 'react-router-dom';

export const Form = styled.form`
    width: 100%;
    height: 100%;
`;

export const Scroll = styled(PerfectScrollbar)`
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const Error = styled.p`
    font-size: 26px;
    color: #fff;
    width: 90%;
    margin-left: 20px;
    margin-top: 100px;
`;

export const Input = styled.input`
    width: ${(props) =>
        props.width ? `${(props.width - 400) * 0.9 - 20}px` : '100%'};
    height: 55px;
    min-height: 55px;
    padding: 0;
    padding-left: 20px;
    margin-top: 30px;

    border: 0;
    border-bottom: 1px solid rgba(255, 255, 255, 0.5);
    background: transparent;

    color: #fff;
    font-size: 26px;
    font-family: 'Roboto';

    &::placeholder {
        color: rgba(255, 255, 255, 0.5);
    }
`;

export const Row = styled.div`
    width: 90%;
    margin-top: ${(props) => (props.marginTop ? props.marginTop : 0)}px;
    margin-bottom: ${(props) =>
        props.marginBottom ? props.marginBottom : 0}px;

    display: flex;
    justify-content: space-between;
    flex-direction: row;
`;

export const Column = styled.div`
    width: 45%;

    display: flex;
    justify-content: ${(props) => (props.end ? 'flex-end' : 'flex-start')};
`;

export const Brand = styled.select`
    margin-top: 100px;
    width: 90%;
    height: 55px;
    min-height: 55px;

    background: transparent;
    border: 1px solid #fff;
    border-radius: 10px;

    color: #fff;
    padding: 5px 20px;
    font-size: 18px;
`;

export const Option = styled.option`
    background: #1f2d40;
`;

export const Button = styled(Link)`
    width: 150px;
    height: 60px;

    background: ${(props) =>
        props.background ? props.background : 'transparent'};
    border-radius: 5px;
    border: ${(props) => (props.background ? 0 : 1)}px solid #fff;

    display: flex;
    align-items: center;
    justify-content: center;

    font-size: 26px;
    color: ${(props) => (props.background ? '#000' : '#fff')};
    text-decoration: none;

    & + & {
        margin-left: 20px;
    }
`;

export const Submit = styled.button`
    width: 150px;
    height: 60px;

    background: ${(props) =>
        props.background ? props.background : 'transparent'};
    border-radius: 5px;
    border: ${(props) => (props.background ? 0 : 1)}px solid #fff;

    display: flex;
    align-items: center;
    justify-content: center;

    font-size: 26px;
    color: ${(props) => (props.background ? '#000' : '#fff')};
    text-decoration: none;

    & + & {
        margin-left: 20px;
    }
`;
