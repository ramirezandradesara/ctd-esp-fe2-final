import { act, fireEvent, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import { customRender } from '../test-utils'
import Bio from "../features/bio/Bio";

describe("Pruebas en <Bio />", () => {

    let renderComponent = () => customRender(<Bio />)

    test("Renderizado inicial con el nombre y la biografía de Bart Simpson", async () => {
        renderComponent();

        const bioBart = "A los diez años, Bart es el hijo mayor y único varón de Homero y Marge, y el hermano de Lisa y Maggie. Los rasgos de carácter más prominentes y populares de Bart son su picardía, rebeldía y falta de respeto a la autoridad.";

        expect(screen.getByText('Bart Simpson')).toBeInTheDocument();
        expect(screen.getByText(bioBart)).toBeInTheDocument();
    });


    test("Renderizar nombre y biografía de Homero Simpson", async () => {
        renderComponent();
        const buttonHomero = screen.getByText('HOMERO')
        const bioHomero = "Como jefe de la familia, Homero y su esposa Marge tienen tres hijos: Bart, Lisa y Maggie. Homero trabaja en la planta de energía nuclear de Springfield como inspector de seguridad. Homero encarna muchos estereotipos de la clase trabajadora estadounidense: es obeso, inmaduro, franco, agresivo, calvo, perezoso, ignorante, poco profesional y adicto a la cerveza, a la comida chatarra y a la televisión";

        fireEvent.click(buttonHomero)

        await waitFor(() => expect(screen.queryByText("Homero Simpson")));
        await waitFor(() => expect(screen.queryByText(bioHomero)));
    });

    test("Snapshot de <Bio />", async () => {
        let { asFragment } = customRender(<Bio />)
        let fragment = asFragment()

        expect(fragment).toMatchSnapshot();
    });
});
