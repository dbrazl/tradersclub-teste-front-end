import React from 'react';
import PropTypes from 'prop-types';

import { Redirect } from 'react-router-dom';

import Layout from '../../components/Layout';

import {
    Form,
    Scroll,
    Input,
    Row,
    Column,
    Brand,
    Option,
    Button,
    Submit,
    Error,
} from './styles';

import 'react-perfect-scrollbar/dist/css/styles.css';

function View({
    width,
    reasons,
    title,
    setTitle,
    model,
    setModel,
    year,
    setYear,
    brand,
    setBrand,
    brands,
    color,
    setColor,
    price,
    setPrice,
    KM,
    setKM,
    submit,
    removeCar,
    remove,
    sended,
    setId,
    search,
}) {
    return (
        <Layout
            onClickRegister={() => setId(-1)}
            search={search}
            editable={false}
        >
            <Form width={width}>
                <Scroll>
                    {reasons.length > 0 && <Error>{reasons[0]}</Error>}
                    <Input
                        width={width}
                        value={title}
                        onChange={(event) => setTitle(event.target.value)}
                        placeholder="Título do veículo"
                    />
                    <Row>
                        <Column>
                            <Input
                                value={model}
                                onChange={(event) =>
                                    setModel(event.target.value)
                                }
                                placeholder="Modelo"
                            />
                        </Column>
                        <Column end="true">
                            <Input
                                value={isNaN(year) ? 0 : year}
                                onChange={(event) =>
                                    setYear(parseInt(event.target.value, 10))
                                }
                                placeholder="Ano"
                            />
                        </Column>
                    </Row>
                    <Brand
                        name="Marca"
                        onChange={(event) => setBrand(event.target.value)}
                        value={brand}
                    >
                        {brands.map((item, index) => (
                            <Option key={`${index}`} value={item.name}>
                                {item.name}
                            </Option>
                        ))}
                    </Brand>
                    <Row>
                        <Column>
                            <Input
                                value={color}
                                onChange={(event) =>
                                    setColor(event.target.value)
                                }
                                placeholder="Cor"
                            />
                        </Column>
                        <Column end="true">
                            <Input
                                value={isNaN(price) ? 0 : price}
                                onChange={(event) =>
                                    setPrice(event.target.value)
                                }
                                placeholder="Valor"
                            />
                        </Column>
                    </Row>
                    <Row>
                        <Column>
                            <Input
                                value={isNaN(KM) ? 0 : KM}
                                onChange={(event) =>
                                    setKM(parseInt(event.target.value, 10))
                                }
                                placeholder="Kilometragem"
                            />
                        </Column>
                    </Row>
                    <Row marginTop={100} marginBottom={50}>
                        <Column>
                            {remove && (
                                <Button to="/" onClick={removeCar}>
                                    Remover
                                </Button>
                            )}
                            <Button to="/">Cancelar</Button>
                        </Column>
                        <Column end="true">
                            <Submit
                                background="#fff"
                                onClick={(event) => {
                                    event.preventDefault();
                                    submit();
                                }}
                            >
                                Salvar
                            </Submit>
                        </Column>
                    </Row>
                </Scroll>
            </Form>
            {reasons.length <= 0 && sended && <Redirect to="/" />}
        </Layout>
    );
}

View.propTypes = {
    width: PropTypes.number,
    reasons: PropTypes.array,
    title: PropTypes.string,
    setTitle: PropTypes.func,
    model: PropTypes.string,
    setModel: PropTypes.func,
    year: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    setYear: PropTypes.func,
    brand: PropTypes.string,
    setBrand: PropTypes.func,
    brands: PropTypes.array,
    color: PropTypes.string,
    setColor: PropTypes.func,
    price: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    setPrice: PropTypes.func,
    KM: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    setKM: PropTypes.func,
    submit: PropTypes.func,
    removeCar: PropTypes.func,
    remove: PropTypes.bool,
    sended: PropTypes.bool,
    setId: PropTypes.func,
};

View.defaultProps = {
    width: window.innerWidth,
    title: '',
    setTitle: () => {},
    model: '',
    setModel: () => {},
    brand: '',
    setBrand: () => {},
    brands: [],
    year: 0,
    setYear: () => {},
    color: '',
    setColor: () => {},
    price: 0,
    setPrice: () => {},
    KM: 0,
    setKM: () => {},
    reasons: [],
    submit: () => {},
    removeCar: () => {},
    remove: false,
    sended: false,
    setId: () => {},
};

export default View;
