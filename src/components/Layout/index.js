import React, { useState, useEffect, Fragment } from 'react';
import PropTypes from 'prop-types';

import View from './view';

function Index({ children, search, setSearch, onClickRegister, editable }) {
    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);

    useEffect(() => {
        window.addEventListener('resize', resize);

        return () => window.removeEventListener('resize', resize);
    }, []);

    function resize({ target: { innerWidth, innerHeight } }) {
        setWidth(innerWidth);
        setHeight(innerHeight);
    }

    return (
        <View
            width={width}
            height={height}
            children={children}
            search={search}
            setSearch={setSearch}
            onClickRegister={onClickRegister}
            editable={editable}
        />
    );
}

Index.propTypes = {
    children: PropTypes.oneOfType([PropTypes.element, PropTypes.array]),
    search: PropTypes.string,
    setSearch: PropTypes.func,
    onClickRegister: PropTypes.func,
    editable: PropTypes.bool,
};

Index.defaultProps = {
    children: <Fragment></Fragment>,
    search: '',
    setSearch: () => {},
    onClickRegister: () => {},
    editable: true,
};

export default Index;
