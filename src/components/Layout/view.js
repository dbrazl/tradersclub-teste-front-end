import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import {
    Menu,
    Logo,
    Header,
    Search,
    Register,
    Data,
    OpacityBG,
    Car,
} from './styles';

import logo from '../../assets/img/logo-tc.png';
import car from '../../assets/img/car-wireframe-treated.png';
import '../../assets/styles/Shared.css';

function View({
    width,
    height,
    children,
    search,
    setSearch,
    onClickRegister,
    editable,
}) {
    return (
        <Fragment>
            <Menu name="menu">
                <Logo src={logo} />
            </Menu>
            <Header width={width}>
                <Search
                    placeholder="Pesquise por um veículo"
                    value={search}
                    onChange={(event) => setSearch(event.target.value)}
                    editable={editable}
                />
                <Register to="/vehicle/-1" onClick={onClickRegister}>
                    Cadastrar
                </Register>
            </Header>
            <Data name="information" width={width} height={height}>
                <OpacityBG height={height}>{children}</OpacityBG>
                <Car src={car} />
            </Data>
        </Fragment>
    );
}

View.propTypes = {
    width: PropTypes.number,
    height: PropTypes.number,
    children: PropTypes.oneOfType([PropTypes.element, PropTypes.array]),
    search: PropTypes.string,
    setSearch: PropTypes.func,
    onClickRegister: PropTypes.func,
    editable: PropTypes.bool,
};

View.defaultProps = {
    width: window.innerWidth,
    height: window.innerHeight,
    children: <Fragment></Fragment>,
    search: '',
    setSearch: () => {},
    onClickRegister: () => {},
    editable: true,
};

export default View;
