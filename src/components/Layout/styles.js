import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Menu = styled.section`
    position: fixed;
    top: 0;
    left: 0;

    width: 400px;
    height: 100%;
    background: #0e1823;

    display: flex;
    align-items: flex-start;
`;

export const Logo = styled.img`
    width: 80px;
    object-fit: contain;
    margin: 0 auto;
    margin-top: 50px;
`;

export const Header = styled.header`
    position: fixed;
    top: 0;
    left: 400px;

    width: ${(props) => props.width - 400}px;
    height: 150px;
    background: #1a2433;

    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Search = styled.input`
    width: 60%;
    height: 55px;
    padding: 0 20px;
    border-radius: 5px;
    border: 2px solid rgba(255, 255, 255, 0.5);
    background: transparent;

    text-align: left;
    color: #fff;
    font-size: 26px;

    &::placeholder {
        color: rgba(255, 255, 255, 0.5);
    }
`;

export const Register = styled(Link)`
    background: #fff;
    height: 55px;
    width: 200px;
    margin-left: 20px;
    border-radius: 5px;

    color: #000;
    font-size: 26px;
    text-decoration: none;

    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Data = styled.section`
    position: fixed;
    top: 150px;
    left: 400px;

    width: ${(props) => props.width - 400}px;
    height: ${(props) => props.height - 150}px;
    z-index: 1;

    display: flex;
    align-items: center;
`;

export const Car = styled.img`
    width: 100%;
    object-fit: contain;
    z-index: -1;

    position: absolute;
    right: -100px;
`;

export const OpacityBG = styled.div`
    width: 100%;
    height: ${(props) => props.height - 150}px;
    background: #1f2d40a0;

    display: flex;
    justify-content: center;
    align-items: flex-start;
`;
