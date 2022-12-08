import { act, fireEvent, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from '../App' 
import { customRender } from '../test-utils'

describe("Pruebas en <App />", () => {

    let renderComponent = () => customRender(<App />)

    test("Renderizado inicial con logo", async () => {
        renderComponent();

        expect(screen.getByAltText('The-Simpsons')).toBeInTheDocument();
    });

    test("Snapshot de <App />", async () => {
        let { asFragment } = customRender(<App />)
        let fragment = asFragment()

        expect(fragment).toMatchSnapshot();
    });
});
