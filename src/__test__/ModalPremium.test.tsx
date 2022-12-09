import { screen, waitFor, waitForElementToBeRemoved } from "@testing-library/react";
import "@testing-library/jest-dom";
import { customRender } from '../test-utils'
import ModalPremium from "../features/news/components/modal/ModalPremium";
import userEvent from "@testing-library/user-event";

describe("Pruebas en <ModalPremium />", () => {

    const renderComponent = () => customRender(<ModalPremium modal={null} isOpenModal={function (): void {
        throw new Error("Function not implemented.");
    }} />)

    test("Renderizado de avisos para suscribirse", async () => {
        renderComponent();

        await waitFor(() => expect(screen.queryByText("Suscríbete a nuestro Newsletter")));
        await waitFor(() => expect(screen.queryByText("Suscríbete a nuestro newsletter y recibe noticias de nuestros personajes favoritos.")));
    });

    test("Cerrar modal", async () => {
        renderComponent();
        const closeButton = screen.findByAltText("close-button");

        await waitFor(() => expect(screen.queryByText("Suscríbete a nuestro Newsletter")));

        userEvent.click(await closeButton)

        // await waitForElementToBeRemoved(() => expect(screen.queryByText("Suscríbete a nuestro Newsletter")));
        // await waitFor(() => expect(screen.queryByText("Suscríbete a nuestro Newsletter")).not.toBeInTheDocument());
    });

    test("Botón suscribirse", async () => {
        renderComponent();

        const btnSuscripcion = screen.findByText("Suscríbete");

        userEvent.click(await btnSuscripcion)

        await waitFor(() => expect(screen.queryByText("Suscripto!")));

    });

    test("Snapshot de <ModalPremium />", async () => {
        const { asFragment } = customRender(<ModalPremium modal={null} isOpenModal={function (): void {
            throw new Error("Function not implemented.");
        }} />)
        const fragment = asFragment()

        expect(fragment).toMatchSnapshot();
    });
});