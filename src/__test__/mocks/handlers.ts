
import { rest } from "msw";
import { API_URL } from "../../app/constants";
import { ICita } from "../../features/quote/types";

export const citaPorBusqueda: ICita = {
	cita: "Shut up, brain. I got friends now. I don't need you anymore.",
	personaje: 'Lisa Simpson',
	imagen: 'https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FLisaSimpson.png?1497567512083',
	direccionPersonaje: 'Right'
};

export const citaAleatoria: ICita = {
	cita: "I'm sleeping in the bath tub.",
	personaje: "Marge Simpson",
	imagen:
		"https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FMargeSimpson.png?1497567512205",
	direccionPersonaje: "Right",
};

export const handlers = [
	rest.get(API_URL, (req, res, ctx) => {
		const citaFinal = req.url.searchParams.get("character")
			? citaPorBusqueda
			: citaAleatoria;
		return res(ctx.status(200), ctx.json([citaFinal]));
	}),
];

