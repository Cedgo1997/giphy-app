import { useFetchGifs } from "../../hooks/useFetchGifs";
import {renderHook} from '@testing-library/react-hooks';

describe('Pruebas en useFetchGifs', () => {
    test('Debe retornar el estado inicial', async() => {
        const {result, waitForNextUpdate} = renderHook( () => useFetchGifs('One Punch'));
        const {data, loading} = result.current;
        await waitForNextUpdate({timeout: 2500});

        expect(data).toEqual([]);
        expect(loading).toBeTruthy();
    });
    test('Debe retornar el nuevo estado', async () => {
        const {result, waitForNextUpdate} = renderHook( () => useFetchGifs('One Punch'));
        await waitForNextUpdate({timeout: 2500});
        const {data, loading} = result.current;
        console.log(data);
        expect(data.length).toEqual(10);
        expect(loading).toBeFalsy();
    });
});