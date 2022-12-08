import { act, fireEvent, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import Noticias from '../features/news/Noticias'
import { customRender } from '../test-utils'

describe("Pruebas en <Noticias />", () => {

    let renderComponent = () => customRender(<Noticias />)

    test("Renderizado inicial con título", async () => {
        renderComponent();

        expect(screen.getByText('Noticias de los Simpsons')).toBeInTheDocument();
    });

    test("Snapshot de <Noticias />", async () => {
        let { asFragment } = customRender(<Noticias />)
        let fragment = asFragment()

        expect(fragment).toMatchSnapshot();
    });
});
