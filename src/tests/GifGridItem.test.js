import { shallow } from "enzyme";
import { GifGridItem } from "../components/GifGridItem";
import React from 'react';

describe('Pruebas en GifGridItem', () => {

    const image = {
        id: 1,
        title: 'Imagen',
        url: 'https://media.giphy.com/media/26gsad5RsZVhKsUDe/giphy.gif'
    }
    let wrapper = shallow(<GifGridItem {...image} />);
    beforeEach(() => {
        wrapper = shallow(<GifGridItem {...image} />);
    });

    test('El componente se debe renderizar correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('Debe tener un párrafo con el título', () => {
        const textoParrafo = wrapper.find('p').text().trim();
        expect(textoParrafo).toBe(image.title);
    });
    test('Debe tener la imagen igual al url y alt de los props', () => {
        const img = wrapper.find('img');
        expect(img.prop('src')).toBe(image.url);
        expect(img.prop('alt')).toBe(image.title);

    });
    test('Debe div tener className animated__fadeIn', () => {
        const container = wrapper.find('div').hasClass('card');
        expect(container).toBeTruthy();
    });
});