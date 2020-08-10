import React from 'react';
import PropTypes from 'prop-types';

import Layout from '../../components/Layout';
import Wait from './components/Wait';
import List from './components/List';

function View({ search, setSearch, cars }) {
    return (
        <Layout search={search} setSearch={setSearch}>
            {search === '' && <Wait />}
            {search !== '' && <List cars={cars} />}
        </Layout>
    );
}

View.propTypes = {
    search: PropTypes.string,
    setSearch: PropTypes.func,
    cars: PropTypes.array,
};

View.defaultProps = {
    search: '',
    setSearch: () => {},
    cars: [],
};

export default View;
