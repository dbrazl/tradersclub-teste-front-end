import React from 'react';

import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';

import './config/reactotronConfig';

import { Provider } from 'react-redux';
import store from './store';

import history from './services/history';

function App() {
    return (
        <Provider store={store}>
            <BrowserRouter history={history}>
                <Routes />
            </BrowserRouter>
        </Provider>
    );
}

export default App;
