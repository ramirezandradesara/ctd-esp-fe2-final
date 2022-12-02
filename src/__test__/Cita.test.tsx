import { render, act, fireEvent, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import Cita from '../features/quote/Cita'
import { Provider } from "react-redux";
import { store } from '../app/store'
import userEvent from "@testing-library/user-event";
import { customRender } from '../test-utils'

describe("Pruebas en <Cita />", () => {

    const setup = () => customRender(
        <Provider store={store}>
            <Cita />
        </Provider>
    );

    test("Renderizado inicial", () => {
        let component = render(
            <Provider store={store}>
                <Cita />
            </Provider>
        );

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
    

    test("Mostrar mensaje de cargando", () => {
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


    test("Mostrar nombre del personaje ingresado", async () => {
        render(
            <Provider store={store}>
                <Cita />
            </Provider>
        );

        const input = screen.getByPlaceholderText('Ingresa el nombre del autor')

        expect(input).toBeInTheDocument();

        fireEvent.change(input, { target: { value: 'Homer' } })

        await waitFor(() => expect(screen.findByText("Homer Simpson")))
    });


    test("Mensaje error al ingresar números", async () => {
        setup()

        const input = await screen.findByPlaceholderText('Ingresa el nombre del autor')
        const btnCita = await screen.findByLabelText('Obtener cita aleatoria')

        act(() => {
            fireEvent.change(input, { target: { value: 'Homer' } })
            fireEvent.click(btnCita)
        });

        await waitFor(() => {
            const textoError = screen.findByText('Por favor ingrese un nombre válido')
            waitFor(() => {
                expect(screen.findByText('Por favor ingrese un nombre válido')).toBeInTheDocument();
            })
        })

    });


    test("Correcto funcionamiento del botón 'Borrar' ", async () => {
        render(
            <Provider store={store}>
                <Cita />
            </Provider>
        );

        const input = screen.getByPlaceholderText('Ingresa el nombre del autor');
        const btnBorrar = screen.getByText("Borrar");
        
        expect(input).toBeInTheDocument();

        fireEvent.change(input, { target: { value: 'Homer' } })

        await waitFor(() => expect(screen.findByText("Homer Simpson")))

        fireEvent.click(btnBorrar)

        await waitFor(() => expect(screen.findByText("No se encontro ninguna cita")))
    });

});
