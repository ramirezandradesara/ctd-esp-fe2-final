import { act, fireEvent, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import Cita from '../features/quote/Cita'
import userEvent from "@testing-library/user-event";
import { customRender } from '../test-utils'

describe("Pruebas en <Cita />", () => {

    let renderComponent = () => customRender(<Cita />)

    test("Renderizado inicial sin cita", async () => {
        renderComponent();

        expect(screen.getByText('No se encontro ninguna cita')).toBeInTheDocument();
    });


    test("Mostrar mensaje de cargando", async () => {
        renderComponent()

        const btnAleatorio = screen.getByText("Obtener cita aleatoria");
        expect(btnAleatorio).toBeEnabled();

        userEvent.click(btnAleatorio);
        const loading = await screen.findByText('CARGANDO...');
        expect(loading).toBeInTheDocument();
    });


    test("Mostrar cita y nombre del personaje ingresado", async () => {
        renderComponent();

        const input = screen.getByPlaceholderText('Ingresa el nombre del autor');
        const btnCita = screen.getByText(/obtener/i);

        expect(input).toBeInTheDocument();

        userEvent.type(input, "Lisa");
        userEvent.click(btnCita);


        await waitFor(() => expect(screen.queryByText("Lisa Simpson")));
        await waitFor(() => expect(screen.queryByText("Shut up, brain. I got friends now. I don't need you anymore.")));
    });


    test("Mensaje error al ingresar números", async () => {
        renderComponent()

        const input = await screen.findByPlaceholderText('Ingresa el nombre del autor');
        const btnCita = screen.getByText(/obtener/i);

        userEvent.type(input, "1233");
        userEvent.click(btnCita);

        await waitFor(() => {
            expect(screen.getByText('Por favor ingrese un nombre válido')).toBeInTheDocument();
        })
    });


    test("Correcto funcionamiento del botón 'Borrar'", async () => {
        renderComponent()

        const input = screen.getByPlaceholderText('Ingresa el nombre del autor');
        const btnBorrar = screen.getByText("Borrar");
        const btnCita = screen.getByText(/obtener/i);

        userEvent.type(input, 'Homer');
        userEvent.click(btnCita);

        await waitFor(() => expect(screen.queryByText("Ingresa el nombre del autor")).not.toBeInTheDocument());

        fireEvent.click(btnBorrar);

        await waitFor(() => expect(screen.queryByText("Ingresa el nombre del autor")));
    });

    test("Snapshot de <Noticias />", async () => {
        let { asFragment } = customRender(<Cita />)
        let fragment = asFragment()

        expect(fragment).toMatchSnapshot();
    });
});
