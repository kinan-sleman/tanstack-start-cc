import { saveFavoritePokemonFn } from "#/server/pokemon";
import { createFileRoute } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { useState } from "react";

export const Route = createFileRoute("/favorite")({
	component: RouteComponent,
});

function RouteComponent() {
	const [name, setName] = useState("");
	const [status, setStatus] = useState("");
	const createPokemon = useServerFn(saveFavoritePokemonFn);

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setStatus("Saving...");
		try {
			await createPokemon({ data: { name } });
			setStatus("Favorite saved!");
      setName("");
		} catch (error) {
			setStatus(`Error: ${(error as Error).message}`);
      setName("");
		}
	};
	return (
		<div className="mx-auto max-w-8xl">
			<h1>Save A Pokemon</h1>
			<form action="" onSubmit={handleSubmit} className="mt-6 space-x-5">
				<input
					type="text"
					value={name}
					onChange={(e) => setName(e.target.value)}
					className="border p-2 rounded"
					placeholder="Pikachu"
				/>
				<button type="submit" className="bg-blue-500 text-white p-2 rounded">
					Save
				</button>
			</form>
			<p className="mt-4">{status}</p>
		</div>
	);
}
