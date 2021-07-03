import React from 'react';
import { shallow } from "enzyme";
import { GifGrid } from "../../components/GifGrid";
import { useFetchGifs } from "../../hooks/useFetchGifs";



jest.mock('../../hooks/useFetchGifs');
describe('Pruebas en GifGrid', () => {
    const category = 'Spider-Man';

    test('Debe renderizar correctamente', () => {
        useFetchGifs.mockReturnValue({
            data: [],
            loading: true
        });
        const wrapper = shallow(<GifGrid category={category} />);
        expect(wrapper).toMatchSnapshot();
    });

    test('Debe mostrar items cuando se cargan imágenes useFetchGifs', () => {
       const images = [{
           id: '1',
           url: 'https://localhost/cualquier/cosa.jpg',
           title: 'Cualquier cosa'
       }]
        useFetchGifs.mockReturnValue({
            data: images,
            loading: false
        });
        const wrapper = shallow(<GifGrid category={category} />);
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('p').exists()).toBeFalsy();
        expect(wrapper.find('GifGridItem').length).toBe(images.length);
    });
});