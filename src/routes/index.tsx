import { createFileRoute, notFound } from "@tanstack/react-router";
import { Shield, Swords, Heart, Zap, Sparkles } from "lucide-react";

interface PokemonData {
	name: string;
	weight: number;
	height: number;
	base_experience: number;
	sprites: {
		other: {
			"official-artwork": {
				front_default: string;
			};
		};
	};
	stats: Array<{
		base_stat: number;
		stat: {
			name: string;
		};
	}>;
	types: Array<{
		type: {
			name: string;
		};
	}>;
	abilities: Array<{
		ability: {
			name: string;
		};
	}>;
}

const POKEMON_API_URL = "https://pokeapi.co/api/v2/pokemon/ditto";

export const Route = createFileRoute("/")({
	component: Home,
	pendingComponent: async () => {
		return (
			<h3 className="text-center text-lg font-medium text-slate-500">
				Loading...
			</h3>
		);
	},
	pendingMs: 500,
	errorComponent: async ({ error }) => {
		return (
			<h3 className="text-center text-lg font-medium text-red-500">
				{error.message}
			</h3>
		);
	},
	loader: async (): Promise<PokemonData> => {
		const response = await fetch(POKEMON_API_URL);
		const data = await response.json();
		if(!data.abilities || data.abilities.length === 0) {
			throw notFound();
		}
		return data;
	},
	notFoundComponent: async () => {
		return (
			<h3 className="text-center text-lg font-medium text-slate-500">
				Pokemon not found.
			</h3>
		)
	}
});

function Home() {
	const data = Route.useLoaderData();
	const {
		abilities,
		base_experience,
		height,
		name,
		sprites,
		stats,
		types,
		weight,
	} = data;

	const statIcons: Record<string, React.ReactNode> = {
		hp: <Heart className="text-rose-500" size={18} />,
		attack: <Swords className="text-amber-500" size={18} />,
		defense: <Shield className="text-blue-500" size={18} />,
		speed: <Zap className="text-orange-500" size={18} />,
	};

	return (
		<div className="min-h-screen bg-slate-50 p-8 dark:bg-slate-950 flex items-center justify-center">
			<div className="w-full max-w-md overflow-hidden rounded-3xl border border-slate-100 bg-gradient-to-b from-purple-50/50 to-white p-6 shadow-xl dark:border-slate-800 dark:from-purple-950/20 dark:to-slate-900">
				<div className="relative flex justify-center bg-gradient-to-b from-purple-100 to-transparent rounded-2xl p-4 dark:from-purple-900/30">
					<span className="absolute top-3 right-3 inline-flex items-center gap-1 rounded-full bg-purple-50 px-2.5 py-1 text-xs font-semibold text-purple-700 ring-1 ring-inset ring-purple-700/10 dark:bg-purple-400/10 dark:text-purple-400 dark:ring-purple-400/30">
						<Sparkles size={12} /> XP {base_experience}
					</span>
					<img
						src={sprites.other["official-artwork"].front_default}
						alt={name}
						className="h-48 w-48 object-contain drop-shadow-md transition-transform duration-300 hover:scale-105"
					/>
				</div>

				<div className="mt-6 text-center space-y-2">
					<h1 className="text-3xl font-black capitalize tracking-tight text-slate-900 dark:text-slate-50">
						{name}
					</h1>

					<div className="flex justify-center gap-2">
						{types.map((t) => (
							<span
								key={t.type.name}
								className="rounded-full bg-purple-600 px-4 py-0.5 text-xs font-medium text-white shadow-sm dark:bg-purple-500"
							>
								{t.type.name}
							</span>
						))}
					</div>
				</div>

				<div className="mt-6 grid grid-cols-2 gap-4 rounded-2xl border border-slate-100 bg-white p-4 text-center shadow-sm dark:border-slate-800 dark:bg-slate-900/50">
					<div>
						<p className="text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500">
							Weight
						</p>
						<p className="text-lg font-bold text-slate-800 dark:text-slate-200">
							{weight / 10} kg
						</p>
					</div>
					<div className="border-l border-slate-100 dark:border-slate-800">
						<p className="text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500">
							Height
						</p>
						<p className="text-lg font-bold text-slate-800 dark:text-slate-200">
							{height / 10} m
						</p>
					</div>
				</div>

				<div className="mt-6 space-y-4">
					<h3 className="text-sm font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
						Base Stats
					</h3>
					<div className="space-y-3">
						{stats.map((s) => {
							if (["hp", "attack", "defense", "speed"].includes(s.stat.name)) {
								return (
									<div key={s.stat.name} className="flex items-center gap-4">
										<div className="flex w-24 items-center gap-2 capitalize text-sm font-medium text-slate-600 dark:text-slate-400">
											{statIcons[s.stat.name]}
											{s.stat.name}
										</div>
										<div className="h-2 flex-1 rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden">
											<div
												className="h-full rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 transition-all duration-500"
												style={{
													width: `${Math.min((s.base_stat / 150) * 100, 100)}%`,
												}}
											/>
										</div>
										<span className="w-8 text-right text-sm font-bold text-slate-700 dark:text-slate-300">
											{s.base_stat}
										</span>
									</div>
								);
							}
							return null;
						})}
					</div>
				</div>

				<div className="mt-6 space-y-2">
					<h3 className="text-sm font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
						Abilities
					</h3>
					<div className="flex flex-wrap gap-2">
						{abilities.map((a) => (
							<span
								key={a.ability.name}
								className="inline-flex items-center rounded-lg bg-slate-100 px-3 py-1 text-xs font-semibold capitalize text-slate-700 dark:bg-slate-800 dark:text-slate-300"
							>
								{a.ability.name.replace("-", " ")}
							</span>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}
