import { Heart } from "lucide-react";
import { useState } from "react";

export default function SkillCard({ name }: { name: string }) {
	const [liked, setLiked] = useState(false);
	const likes = liked ? 1 : 0;

	return (
		<article className="group relative rounded-3xl border border-slate-100 bg-gradient-to-br from-white to-slate-50/50 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md dark:border-slate-800 dark:from-slate-900 dark:to-slate-950">
			<div className="flex justify-between items-start gap-4">
				<div className="space-y-2">
					<span className="inline-flex items-center rounded-md bg-indigo-50 px-2 py-1 text-xs font-medium text-indigo-700 ring-1 ring-inset ring-indigo-700/10 dark:bg-indigo-400/10 dark:text-indigo-400 dark:ring-indigo-400/30">
						Skill
					</span>
					<h2 className="text-xl font-bold tracking-tight text-slate-900 transition-colors group-hover:text-indigo-600 dark:text-slate-50 dark:group-hover:text-indigo-400">
						{name}
					</h2>
					<p className="text-sm font-medium text-slate-500 dark:text-slate-400">
						{likes} {likes === 1 ? "like" : "likes"}
					</p>
				</div>

				<button
					className={`inline-flex size-11 items-center justify-center rounded-full border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:scale-105 active:scale-95 dark:border-slate-800 dark:bg-slate-900 ${
						liked
							? "text-rose-500 border-rose-100 bg-rose-50/50 dark:border-rose-950 dark:bg-rose-950/30"
							: "text-slate-400 hover:text-rose-500 hover:border-rose-100 hover:bg-rose-50/30 dark:hover:border-rose-950 dark:hover:bg-rose-950/20"
					}`}
					onClick={() => setLiked((current) => !current)}
					type="button"
				>
					<Heart
						className={`transition-transform duration-300 ${liked ? "scale-110 animate-pulse" : ""}`}
						fill={liked ? "currentColor" : "none"}
						size={20}
					/>
				</button>
			</div>
		</article>
	);
}
