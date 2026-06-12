import { createServerFn } from "@tanstack/react-start";

const POKEMON_API_URL = "https://pokeapi.co/api/v2/pokemon/ditto";
export const getPokemonFn = createServerFn({ method: "GET" }).handler(
	async () => {
		const response = await fetch(POKEMON_API_URL);
		const data = await response.json();
		return data;
	},
);

export const saveFavoritePokemonFn = createServerFn({ method: "POST" })
	.inputValidator(({ name }: { name: string }) => {
		if (!name) {
			throw new Error("Name is required");
		}
	})
	.handler(async (data) => {
		await new Promise((resolve) => setTimeout(resolve, 1000));
		return data;
	});
