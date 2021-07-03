import { shallow } from "enzyme";
import { AddCategory } from "./../../components/AddCategory";
import React from 'react';

describe('Pruebas en AddCategory', () => {
    const setCategories = jest.fn();
    let wrapper = shallow(<AddCategory setCategories={setCategories} />);

    beforeEach(() => {
        jest.clearAllMocks();
        wrapper = shallow(<AddCategory setCategories={setCategories} />);
    })

    test('Debe renderizar el componente', () => {
        expect(wrapper).toMatchSnapshot();
    });
    test('Debe cambiar la caja de texto', () => {
        const input = wrapper.find('input');
        input.simulate('change', {
            target: {
                value: 'Hola'
            }
        });
        const newInput = wrapper.find('input').prop('value').trim();
        expect(newInput).toBe('Hola');
    });
    test('No debe Postear información sin cambiar caja de texto', () => {
        wrapper.find('form').simulate('submit', {
            preventDefault() {}
        });
        expect(setCategories).not.toHaveBeenCalled();
    });
    test('Debe postear, luego limpiar el inputValue', () => {
        const input = wrapper.find('input');
        input.simulate('change', {
            target: {
                value: 'Rick'
            }
        });

        wrapper.find('form').simulate('submit', {
            preventDefault() {}
        });

        // Llama a la función setCategories
        expect(setCategories).toHaveBeenCalled();
        // El input está limpio:
        const newInputValue = wrapper.find('input').prop('value');
        expect(newInputValue).toBe('');
    });
});