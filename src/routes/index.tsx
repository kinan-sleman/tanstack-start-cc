import SkillCard from "#/components/SkillCard";
import { createFileRoute } from "@tanstack/react-router";

// the defination here always has to be `export const Route = createFileRoute(...)` 
// because the route tree generator looks for that specific export when it generates the route tree from the files in the `src/routes` directory. 
// The argument to `createFileRoute` is the path of the route, which should match the file path relative to the `src/routes` directory. 
// The object passed to `createFileRoute` should have a `component` property, which is the React component that should be rendered when the route is matched. In this case, we are rendering the `Home` component when the path is `/`.
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
			<ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {skills.map(({id,name}) => (
          <li key={id}>
            <SkillCard name={name} />
          </li>
        ))}
      </ul>
		</div>
	);
}
