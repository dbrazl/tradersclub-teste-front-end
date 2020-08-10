import React, { useState, useEffect } from 'react';

import {
    updateVehicleRequest,
    storeVehicleRequest,
    deleteVehicleRequest,
    resetStatus,
} from '../../store/modules/vehicles/actions';
import { indexBrandsRequest } from '../../store/modules/brands/actions';
import { useDispatch, useSelector } from 'react-redux';

import View from './view';

function Index({ match: { params } }) {
    const cars = useSelector((state) => state.vehicles.cars);
    const reasons = useSelector((state) => state.vehicles.error.reasons);
    const brands = useSelector((state) => state.brands.brands);
    const sended = useSelector((state) => state.vehicles.status.sended);
    const search = useSelector((state) => state.vehicles.search);

    const [width, setWidth] = useState(window.innerWidth);
    const [id, setId] = useState(params.id);

    const car = cars.filter((one) => one.id === parseInt(id, 10))[0];

    const [title, setTitle] = useState(!!car ? car.title : '');
    const [model, setModel] = useState(!!car ? car.model : '');
    const [brand, setBrand] = useState(
        !!car ? car.brand : brands[0] && brands[0].name
    );
    const [year, setYear] = useState(!!car ? parseInt(car.year, 10) : '');
    const [color, setColor] = useState(!!car ? car.color : '');
    const [KM, setKM] = useState(!!car ? parseInt(car.km, 10) : '');
    const [price, setPrice] = useState(!!car ? car.price : '');

    const dispatch = useDispatch();

    useEffect(() => {
        window.addEventListener('resize', resize);

        dispatch(indexBrandsRequest());
        dispatch(resetStatus());

        return () => window.removeEventListener('resize', resize);
    }, []);

    function resize({ target: { innerWidth } }) {
        setWidth(innerWidth);
    }

    useEffect(() => {
        if (id === -1) {
            setTitle('');
            setModel('');
            setBrand('');
            setYear('');
            setColor('');
            setKM('');
            setPrice('');
        }
    }, [id]);

    function submit() {
        if (parseInt(id, 10) === -1) {
            const body = {
                car: {
                    title,
                    model,
                    brand,
                    year,
                    color,
                    km: KM,
                    price: parseFloat(price),
                },
            };

            dispatch(storeVehicleRequest(body));
        } else {
            let body = {
                car: {},
            };

            if (title !== car.title) body.car.title = title;
            if (model !== car.model) body.car.model = model;
            if (brand !== car.brand) body.car.brand = brand;
            if (year !== car.year) body.car.year = year;
            if (color !== car.color) body.car.color = color;
            if (KM !== car.km) body.car.km = KM;
            if (price !== parseFloat(car.price))
                body.car.price = parseFloat(price);

            dispatch(updateVehicleRequest(body, { id }));
        }
    }

    function removeCar() {
        dispatch(deleteVehicleRequest({ id }));
    }

    return (
        <View
            width={width}
            reasons={reasons}
            title={title}
            setTitle={setTitle}
            model={model}
            setModel={setModel}
            year={year}
            setYear={setYear}
            brand={brand}
            setBrand={setBrand}
            brands={brands}
            color={color}
            setColor={setColor}
            price={price}
            setPrice={setPrice}
            KM={KM}
            setKM={setKM}
            submit={submit}
            removeCar={removeCar}
            remove={parseInt(id, 10) !== -1}
            sended={sended}
            setId={setId}
            search={search}
        />
    );
}

export default Index;
