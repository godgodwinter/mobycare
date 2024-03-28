import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
// import { RouterProvider, createRouter } from '@tanstack/react-router'

import {
  NotFoundRoute,
  RouterProvider,
  createRouter,
} from '@tanstack/react-router'
// import { Route } from './routes/__root.tsx'
import { routeTree } from './routeTree.gen.ts'

import { Route as rootRoute } from './routes/__root.tsx'
import { Provider } from 'react-redux'
import { store } from './stores/store.ts'

const notFoundRoute = new NotFoundRoute({
  getParentRoute: () => rootRoute,
  component: () => '404 Not Found',
})

const router = createRouter({ routeTree ,notFoundRoute})

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

// Register the router instance for type safety
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
  <Provider store={store}>
  <RouterProvider router={router} />
  </Provider>,
    {/* <App /> */}
  </React.StrictMode>,
)
