import { waitFor, renderHook } from "@testing-library/react";
import "@testing-library/jest-dom";
import { firstLetterToUppercase } from "../features/news/helpers/firstLetterToUppercase";

describe("Pruebas del hook eachWordToUppercase", () => {

    test("Funcionamiento correcto del hook", async () => {

        const { result } = renderHook(() => firstLetterToUppercase("this is the way"))

        await waitFor(() => expect(result.current).toEqual("This Is The Way"));

    });
});