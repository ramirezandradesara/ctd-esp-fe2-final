import { render, act, fireEvent, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import Cita from '../features/quote/Cita'
import { Provider } from "react-redux";
import { store } from '../app/store'
import userEvent from "@testing-library/user-event";

describe("Pruebas en <Cita />", () => {

    test("Renderizado inicial", () => {
        let component = render(
            <Provider store={store}>
                <Cita />
            </Provider>
        );

        expect(component.container).toBeInTheDocument();
    });


    test("Renderizado inicial sin cita", async () => {
        render(
            <Provider store={store}>
                <Cita />
            </Provider>
        );
        expect(screen.getByText('No se encontro ninguna cita')).toBeInTheDocument();
    });


    test("Mostrar mensaje de cargando", async () => {
        render(
            <Provider store={store}>
                <Cita />
            </Provider>
        );
        // const onChange = jest.fn()
        const btnAleatorio = screen.getByText("Obtener cita aleatoria")
        expect(btnAleatorio).toBeEnabled();

        userEvent.click(btnAleatorio)
        await waitFor(() => expect(screen.getByText('CARGANDO...')).toBeInTheDocument())
    });


    test("Mostrar nombre del personaje ingresado", async () => {
        render(
            <Provider store={store}>
                <Cita />
            </Provider>
        );

        const input = screen.getByPlaceholderText('Ingresa el nombre del autor')

        expect(input).toBeInTheDocument();

        userEvent.type(input, "Lisa")

        await waitFor(() => expect(screen.findByText("Lisa Simpson'")))
        await waitFor(() => expect(screen.findByText("Shut up, brain. I got friends now. I don't need you anymore.")))
    });


    test("Mensaje error al ingresar números", async () => {
        render(
            <Provider store={store}>
                <Cita />
            </Provider>
        );

        const input = await screen.findByPlaceholderText('Ingresa el nombre del autor')
        const btnCita = screen.getByTestId("quote-button")

        userEvent.type(input, "lisa")
        userEvent.click(btnCita)

        await waitFor(() => {
            expect(screen.getByText('Por favor ingrese un nombre válido')).toBeInTheDocument();
        })
    });


    test("Correcto funcionamiento del botón 'Borrar' ", async () => {
        render(
            <Provider store={store}>
                <Cita />
            </Provider>
        );

        const input = screen.getByPlaceholderText('Ingresa el nombre del autor');
        // const btnBorrar = screen.getByText("Borrar");
        const btnCita = screen.getByTestId("quote-button")
        const btnBorrar = screen.getByTestId("clean-button")

        expect(input).toBeInTheDocument();

        userEvent.type(input, 'Homer')
        userEvent.click(btnCita)

        await waitFor(() => expect(screen.findByText("Homer Simpson")))

        userEvent.click(btnBorrar)

        await waitFor(() => expect(screen.findByText("No se encontro ninguna cita")))
    });
});
