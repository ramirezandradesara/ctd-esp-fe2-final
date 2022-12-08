import {  screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from '../App' 
import { customRender } from '../test-utils'

describe("Pruebas en <App />", () => {

    const renderComponent = () => customRender(<App />)

    test("Renderizado inicial con logo", async () => {
        renderComponent();

        expect(screen.getByAltText('The-Simpsons')).toBeInTheDocument();
    });

    test("Snapshot de <App />", async () => {
        const { asFragment } = customRender(<App />)
        const fragment = asFragment()

        expect(fragment).toMatchSnapshot();
    });
});
