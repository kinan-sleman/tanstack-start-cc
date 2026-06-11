import { createRouter as createTanStackRouter } from '@tanstack/react-router'
import { routeTree } from './routeTree.gen'

export function getRouter() {
  const router = createTanStackRouter({
    routeTree, // This is the route tree that we generated from the files in the `src/routes` directory.
    scrollRestoration: true, // This enables scroll restoration, which means that when you navigate back to a page, it will scroll to the position you were at when you left the page.
    defaultPreload: 'intent', // This means that when you hover over a link, it will preload the page that the link goes to. You can change this to 'viewport' to preload pages when they enter the viewport, or 'none' to disable preloading.
    defaultPreloadStaleTime: 0, // This means that preloaded pages will never be considered stale, so they will always be used when you navigate to them. You can change this to a number (in milliseconds) to specify how long preloaded pages should be considered fresh.
  })

  return router
}

declare module '@tanstack/react-router' {
  interface Register {
    router: ReturnType<typeof getRouter> // This adds the type of our router to the `Register` interface, which allows us to use it in our route components without having to import it.
  }
}
