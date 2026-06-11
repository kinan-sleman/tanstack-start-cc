import SkillCard from "#/components/SkillCard";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({ component: Home });
const skills = [
	{ id: 1, name: "React.js" },
	{ id: 2, name: "Next.js" },
	{ id: 3, name: "TypeScript" },
	{ id: 4, name: "Laravel" },
	{ id: 5, name: "NestJS" },
	{ id: 6, name: "Tailwind CSS" },
	{ id: 7, name: "Node.js" },
	{ id: 8, name: "PostgreSQL" },
	{ id: 9, name: "GraphQL" },
	{ id: 10, name: "Docker" },
	{ id: 11, name: "Git & GitHub" },
	{ id: 12, name: "REST APIs" },
	{ id: 13, name: "Redux Toolkit" },
	{ id: 14, name: "Zustand" },
	{ id: 15, name: "Prisma ORM" },
	{ id: 16, name: "Payload CMS" },
	{ id: 17, name: "Shopify Liquid" },
	{ id: 18, name: "WordPress" },
	{ id: 19, name: "Firebase" },
	{ id: 20, name: "Material UI" },
];
function Home() {
	return (
		<div className="p-8">
			<ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6">
        {skills.map((skill) => (
          <li key={skill.id}>
            <SkillCard name={skill.name} />
          </li>
        ))}
      </ul>
		</div>
	);
}
