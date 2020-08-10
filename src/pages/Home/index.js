import React, { useState, useEffect } from 'react';

import { activeApi } from '../../store/modules/active/actions';
import {
    setSearchStore,
    resetSearch,
    resetStatus,
} from '../../store/modules/vehicles/actions';
import { useDispatch, useSelector } from 'react-redux';

import View from './view';

function Index() {
    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);
    const [search, setSearch] = useState('');
    const cars = useSelector((state) => state.vehicles.cars);

    const dispatch = useDispatch();

    useEffect(() => {
        window.addEventListener('resize', onResize);

        dispatch(activeApi());
        dispatch(resetStatus());
        dispatch(resetSearch());

        return () => window.removeEventListener('resize', onResize);
    }, []);

    useEffect(() => {
        if (search !== '') dispatch(setSearchStore(search));
    }, [search]);

    function onResize({ target: { innerWidth, innerHeight } }) {
        setWidth(innerWidth);
        setHeight(innerHeight);
    }

    return (
        <View
            width={width}
            height={height}
            search={search}
            setSearch={setSearch}
            cars={cars}
        />
    );
}

export default Index;
