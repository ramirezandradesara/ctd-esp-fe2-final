import { rest } from 'msw'

const data = {
	quote: "Shut up, brain. I got friends now. I don't need you anymore.",
	character: 'Lisa Simpson',
	image: 'https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FLisaSimpson.png?1497567512083',
	characterDirection: 'Right'
}

const handlers = [
	rest.get('https://thesimpsonsquoteapi.glitch.me/quotes', (req, res, ctx) => {
		return res(
			ctx.status(200),
			ctx.json({
				results: data
			})
		);
	}),
];

export { data, handlers };
