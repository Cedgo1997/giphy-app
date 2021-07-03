import { GifExpertApp } from "../../GifExpertApp";
import React from 'react';
import { shallow } from "enzyme";

describe('Pruebas en GifExpertApp', () => {
    const defaultCategories = ['Dragon Ball', 'Naruto', 'Saint Seiya'];
    const wrapper = shallow(<GifExpertApp defaultCategories={defaultCategories} />);
    test('Debe renderizar correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    });
    test('Debe existir el componente AddCategory', () => {
        const addCategory = wrapper.find('AddCategory');
        expect(addCategory.exists()).toBeTruthy();
    });
    test('Debe existir el componente GifGrid', () => {
        const gifGrid = wrapper.find('GifGrid');
        expect(gifGrid.exists()).toBeTruthy();
        expect(gifGrid.length).toBe(defaultCategories.length);
    });
});