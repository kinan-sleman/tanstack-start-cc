import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/users/$username/skills/$skillid')({
  component: RouteComponent,
})

function RouteComponent() {
  const { username, skillid } = Route.useParams()
  return <div>Hello "/users/{username}/skills/{skillid} "!</div>
}
