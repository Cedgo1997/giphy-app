import { shallow } from "enzyme";
import { GifGridItem } from "../components/GifGridItem";

describe('Pruebas en GifGridItem', () => {
    test('El componente se debe renderizar correctamente', () =>{

        const image = {
            id: 1,
            title: 'Imagen',
            url: 'https://media.giphy.com/media/26gsad5RsZVhKsUDe/giphy.gif'
        }
        const wrapper = shallow(<GifGridItem {...image} />);
        expect(wrapper).toMatchSnapshot();
    })
});