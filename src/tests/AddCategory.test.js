import { shallow } from "enzyme";
import { AddCategory } from "../components/AddCategory";
import React from 'react';

describe('Pruebas en AddCategory', () => {
    test('Debe renderizar el componente', () => {
        const wrapper = shallow(<AddCategory setCategories = {() => {}} />);
        expect(wrapper).toMatchSnapshot();

    });
});