import React from 'react';
import PropTypes from 'prop-types';

import { Item, Column, BigLabel, SmallLabel } from './styles';

function Car({ title, info, price, year }) {
    return (
        <Item>
            <Column>
                <BigLabel>{title}</BigLabel>
                <SmallLabel>{info}</SmallLabel>
            </Column>
            <Column end="true">
                <BigLabel>{price}</BigLabel>
                <SmallLabel>{year}</SmallLabel>
            </Column>
        </Item>
    );
}

Car.propTypes = {
    title: PropTypes.string,
    info: PropTypes.string,
    price: PropTypes.string,
    year: PropTypes.number,
};

Car.defaultProps = {
    title: 'Nome do carro',
    info: 'info • info • 0 KM',
    price: 'R$ 0,00',
    year: 0,
};

export default Car;
