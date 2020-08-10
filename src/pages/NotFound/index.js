import React from 'react';

import { Container, Error, Message, Back } from './styles';

import error from '../../assets/icons/error.svg';

function NotFound() {
    return (
        <Container>
            <Error src={error} />
            <Message>A página não foi achada.</Message>
            <Back to="/">Página inicial</Back>
        </Container>
    );
}

export default NotFound;
