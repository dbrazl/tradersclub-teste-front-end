import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import { Container, Scroll, NotFound, Unable, Message, GoTo } from './styles';
import Car from './components/Car';

import 'react-perfect-scrollbar/dist/css/styles.css';

function List({ cars }) {
    function renderACar(car, index) {
        const KM = car.km.toLocaleString('pt-BR');

        const info = `${car.model} • ${car.brand} • ${KM} KM`;

        const price = parseFloat(car.price).toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL',
        });

        return (
            <GoTo key={`${index}`} to={`/vehicle/${car.id}`}>
                <Car
                    title={car.title}
                    info={info}
                    price={price}
                    year={car.year}
                />
            </GoTo>
        );
    }

    function renderCars() {
        if (cars.length > 0)
            return (
                <Fragment>
                    {cars.map((car, index) => renderACar(car, index))}
                </Fragment>
            );

        return (
            <NotFound>
                <Unable>Indisponível</Unable>
                <Message>Não foi possível encontrar o carro.</Message>
            </NotFound>
        );
    }

    return (
        <Container>
            <Scroll>{renderCars()}</Scroll>
        </Container>
    );
}

List.propTypes = {
    cars: PropTypes.array,
};

List.defaultProps = {
    cars: [],
};

export default List;
