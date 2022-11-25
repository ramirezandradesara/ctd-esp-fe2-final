import { render, renderHook, act, fireEvent, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import Cita from '../features/quote/Cita'
import { FunctionComponent } from "react";
import { Provider } from "react-redux";
import { store } from '../app/store'
import userEvent from "@testing-library/user-event";


describe("Pruebas en <Cita />", () => {

    let component = render(
        <Provider store={store}>
            <Cita />
        </Provider>
    );

    test("Renderizado inicial", () => {
        expect(component.container).toBeInTheDocument();
    });

    test("Renderizado inicial sin cita", async () => {
        const { getByText } = render(
            <Provider store={store}>
                <Cita />
            </Provider>
        );
        expect(getByText('No se encontro ninguna cita')).toBeInTheDocument();
    });

    test("Cita aleatoria", async () => {
        const { getByText, container } = render(
            <Provider store={store}>
                <Cita />
            </Provider>
        );
        const btnAleatorio = screen.getByText("Obtener cita aleatoria")

        expect(btnAleatorio).toBeEnabled();
        fireEvent.click(btnAleatorio)

        expect(getByText('CARGANDO...')).toBeInTheDocument();

    });

    test("Cita del personaje ingresado", async () => {
        const { getByText, container } = render(
            <Provider store={store}>
                <Cita />
            </Provider>
        );

        const input = screen.getByPlaceholderText('Ingresa el nombre del autor')

        // const input = await screen.findByPlaceholderText('Ingresa el nombre del autor')
        expect(input).toBeInTheDocument();

        fireEvent.change(input, { target: { value: 'Homer' } })
    });

    test("Mensaje error al ingresar números", async () => {
        const { getByText, container, rerender } = render(
            <Provider store={store}>
                <Cita />
            </Provider>
        );

        // const input = container.querySelector('input[aria-label="Author Cita"]')
        // expect(input.value).toBe('');
        // const btnCita = screen.getByText("Obtener cita")

        const input = await screen.findByPlaceholderText('Ingresa el nombre del autor')
        const btnCita = await screen.findByLabelText('Obtener cita aleatoria')

        // expect(input).toBeInTheDocument();
        // expect(input.value).toMatch('Homer');

        await userEvent.clear(input);

        act(() => {
            fireEvent.change(input, { target: { value: 'Homer' } })
            fireEvent.click(btnCita)
        });

        render(
            <Provider store={store}>
                <Cita />
            </Provider>
        );

        await waitFor(() => {
            const textoError = screen.queryByText('Por favor ingrese un nombre válido')
            expect(textoError).toBeInTheDocument();

            // expect(getByText('Por favor ingrese un nombre válido')).toBeInTheDocument();

        });

    });

});
