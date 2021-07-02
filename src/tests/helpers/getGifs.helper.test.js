import { getGifs } from "../../helpers/getGifs.helper";

describe('Pruebas en getGifs.helper', () => {
    test('Debe retornar 10 elementos', async () => {
        const category = 'Pokemon';
        const gifs = await getGifs(category);
        expect(gifs.length).toBe(10);
    });
    test('Some', async () => {
        const category = '';
        const gifs = await getGifs(category);
        expect(gifs.length).toBe(0);
    });
});