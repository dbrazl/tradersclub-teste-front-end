import { put } from 'redux-saga/effects';

export default function* errorHandler(error, callback) {
    let message = null;
    let reasons = null;

    // eslint-disable-next-line
    treat: {
        if (error.message === 'Network Error') {
            message = 'Não foi possível fazer a requisição.';
            reasons = ['Servidor está offline.'];
            // eslint-disable-next-line
            break treat;
        }

        if (error.message === 'Timeout') {
            message = 'Não foi possível fazer a requisição.';
            reasons = ['A requisição excedeu o tempo limite.'];
            // eslint-disable-next-line
            break treat;
        }

        if (error.message === 'No data on restore') {
            message = 'Não foi possível recuperar o usuário.';
            reasons = ['O usuário não foi informado.'];
            // eslint-disable-next-line
            break treat;
        }

        const response = error && error.response && error.response.data;
        message = response && response.errorMessage;
        reasons = response && response.reasons;
    }

    yield put(callback(message, reasons));
}
