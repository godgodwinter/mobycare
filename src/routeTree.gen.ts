/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

import { createFileRoute } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as LayoutguestBlogImport } from './routes/_layout_guest/blog'
import { Route as LayoutLayoutBImport } from './routes/_layout/layout-b'
import { Route as LayoutLayoutAImport } from './routes/_layout/layout-a'
import { Route as LayoutUserUserSekolahImport } from './routes/_layout-user/user/sekolah'
import { Route as LayoutUserUserProfileImport } from './routes/_layout-user/user/profile'
import { Route as LayoutUserUserKomunitasImport } from './routes/_layout-user/user/komunitas'
import { Route as LayoutUserUserDiaryImport } from './routes/_layout-user/user/diary'
import { Route as LayoutUserUserBookingbackupImport } from './routes/_layout-user/user/booking_backup'
import { Route as LayoutUserUserBookingImport } from './routes/_layout-user/user/booking'
import { Route as LayoutUserUserBerandaImport } from './routes/_layout-user/user/beranda'
import { Route as LayoutAdminAdminSekolahImport } from './routes/_layout-admin/admin/sekolah'
import { Route as LayoutAdminAdminBookingbackupImport } from './routes/_layout-admin/admin/booking_backup'
import { Route as LayoutAdminAdminBookingImport } from './routes/_layout-admin/admin/booking'

// Create Virtual Routes

const Step4LazyImport = createFileRoute('/step4')()
const Step3LazyImport = createFileRoute('/step3')()
const Step2LazyImport = createFileRoute('/step2')()
const RegisterLazyImport = createFileRoute('/register')()
const ProfileLazyImport = createFileRoute('/profile')()
const LoginLazyImport = createFileRoute('/login')()
const DatatableLazyImport = createFileRoute('/datatable')()
const AboutLazyImport = createFileRoute('/about')()
const LayoutUserLazyImport = createFileRoute('/_layout-user')()
const LayoutAdminLazyImport = createFileRoute('/_layout-admin')()
const LayoutLazyImport = createFileRoute('/_layout')()
const IndexLazyImport = createFileRoute('/')()

// Create/Update Routes

const Step4LazyRoute = Step4LazyImport.update({
  path: '/step4',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/step4.lazy').then((d) => d.Route))

const Step3LazyRoute = Step3LazyImport.update({
  path: '/step3',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/step3.lazy').then((d) => d.Route))

const Step2LazyRoute = Step2LazyImport.update({
  path: '/step2',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/step2.lazy').then((d) => d.Route))

const RegisterLazyRoute = RegisterLazyImport.update({
  path: '/register',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/register.lazy').then((d) => d.Route))

const ProfileLazyRoute = ProfileLazyImport.update({
  path: '/profile',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/profile.lazy').then((d) => d.Route))

const LoginLazyRoute = LoginLazyImport.update({
  path: '/login',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/login.lazy').then((d) => d.Route))

const DatatableLazyRoute = DatatableLazyImport.update({
  path: '/datatable',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/datatable.lazy').then((d) => d.Route))

const AboutLazyRoute = AboutLazyImport.update({
  path: '/about',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/about.lazy').then((d) => d.Route))

const LayoutUserLazyRoute = LayoutUserLazyImport.update({
  id: '/_layout-user',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/_layout-user.lazy').then((d) => d.Route))

const LayoutAdminLazyRoute = LayoutAdminLazyImport.update({
  id: '/_layout-admin',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/_layout-admin.lazy').then((d) => d.Route))

const LayoutLazyRoute = LayoutLazyImport.update({
  id: '/_layout',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/_layout.lazy').then((d) => d.Route))

const IndexLazyRoute = IndexLazyImport.update({
  path: '/',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/index.lazy').then((d) => d.Route))

const LayoutguestBlogRoute = LayoutguestBlogImport.update({
  id: '/_layout_guest/blog',
  getParentRoute: () => rootRoute,
} as any)

const LayoutLayoutBRoute = LayoutLayoutBImport.update({
  path: '/layout-b',
  getParentRoute: () => LayoutLazyRoute,
} as any)

const LayoutLayoutARoute = LayoutLayoutAImport.update({
  path: '/layout-a',
  getParentRoute: () => LayoutLazyRoute,
} as any)

const LayoutUserUserSekolahRoute = LayoutUserUserSekolahImport.update({
  path: '/user/sekolah',
  getParentRoute: () => LayoutUserLazyRoute,
} as any)

const LayoutUserUserProfileRoute = LayoutUserUserProfileImport.update({
  path: '/user/profile',
  getParentRoute: () => LayoutUserLazyRoute,
} as any)

const LayoutUserUserKomunitasRoute = LayoutUserUserKomunitasImport.update({
  path: '/user/komunitas',
  getParentRoute: () => LayoutUserLazyRoute,
} as any)

const LayoutUserUserDiaryRoute = LayoutUserUserDiaryImport.update({
  path: '/user/diary',
  getParentRoute: () => LayoutUserLazyRoute,
} as any)

const LayoutUserUserBookingbackupRoute =
  LayoutUserUserBookingbackupImport.update({
    path: '/user/booking_backup',
    getParentRoute: () => LayoutUserLazyRoute,
  } as any)

const LayoutUserUserBookingRoute = LayoutUserUserBookingImport.update({
  path: '/user/booking',
  getParentRoute: () => LayoutUserLazyRoute,
} as any)

const LayoutUserUserBerandaRoute = LayoutUserUserBerandaImport.update({
  path: '/user/beranda',
  getParentRoute: () => LayoutUserLazyRoute,
} as any)

const LayoutAdminAdminSekolahRoute = LayoutAdminAdminSekolahImport.update({
  path: '/admin/sekolah',
  getParentRoute: () => LayoutAdminLazyRoute,
} as any)

const LayoutAdminAdminBookingbackupRoute =
  LayoutAdminAdminBookingbackupImport.update({
    path: '/admin/booking_backup',
    getParentRoute: () => LayoutAdminLazyRoute,
  } as any)

const LayoutAdminAdminBookingRoute = LayoutAdminAdminBookingImport.update({
  path: '/admin/booking',
  getParentRoute: () => LayoutAdminLazyRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      preLoaderRoute: typeof IndexLazyImport
      parentRoute: typeof rootRoute
    }
    '/_layout': {
      preLoaderRoute: typeof LayoutLazyImport
      parentRoute: typeof rootRoute
    }
    '/_layout-admin': {
      preLoaderRoute: typeof LayoutAdminLazyImport
      parentRoute: typeof rootRoute
    }
    '/_layout-user': {
      preLoaderRoute: typeof LayoutUserLazyImport
      parentRoute: typeof rootRoute
    }
    '/about': {
      preLoaderRoute: typeof AboutLazyImport
      parentRoute: typeof rootRoute
    }
    '/datatable': {
      preLoaderRoute: typeof DatatableLazyImport
      parentRoute: typeof rootRoute
    }
    '/login': {
      preLoaderRoute: typeof LoginLazyImport
      parentRoute: typeof rootRoute
    }
    '/profile': {
      preLoaderRoute: typeof ProfileLazyImport
      parentRoute: typeof rootRoute
    }
    '/register': {
      preLoaderRoute: typeof RegisterLazyImport
      parentRoute: typeof rootRoute
    }
    '/step2': {
      preLoaderRoute: typeof Step2LazyImport
      parentRoute: typeof rootRoute
    }
    '/step3': {
      preLoaderRoute: typeof Step3LazyImport
      parentRoute: typeof rootRoute
    }
    '/step4': {
      preLoaderRoute: typeof Step4LazyImport
      parentRoute: typeof rootRoute
    }
    '/_layout/layout-a': {
      preLoaderRoute: typeof LayoutLayoutAImport
      parentRoute: typeof LayoutLazyImport
    }
    '/_layout/layout-b': {
      preLoaderRoute: typeof LayoutLayoutBImport
      parentRoute: typeof LayoutLazyImport
    }
    '/_layout_guest/blog': {
      preLoaderRoute: typeof LayoutguestBlogImport
      parentRoute: typeof rootRoute
    }
    '/_layout-admin/admin/booking': {
      preLoaderRoute: typeof LayoutAdminAdminBookingImport
      parentRoute: typeof LayoutAdminLazyImport
    }
    '/_layout-admin/admin/booking_backup': {
      preLoaderRoute: typeof LayoutAdminAdminBookingbackupImport
      parentRoute: typeof LayoutAdminLazyImport
    }
    '/_layout-admin/admin/sekolah': {
      preLoaderRoute: typeof LayoutAdminAdminSekolahImport
      parentRoute: typeof LayoutAdminLazyImport
    }
    '/_layout-user/user/beranda': {
      preLoaderRoute: typeof LayoutUserUserBerandaImport
      parentRoute: typeof LayoutUserLazyImport
    }
    '/_layout-user/user/booking': {
      preLoaderRoute: typeof LayoutUserUserBookingImport
      parentRoute: typeof LayoutUserLazyImport
    }
    '/_layout-user/user/booking_backup': {
      preLoaderRoute: typeof LayoutUserUserBookingbackupImport
      parentRoute: typeof LayoutUserLazyImport
    }
    '/_layout-user/user/diary': {
      preLoaderRoute: typeof LayoutUserUserDiaryImport
      parentRoute: typeof LayoutUserLazyImport
    }
    '/_layout-user/user/komunitas': {
      preLoaderRoute: typeof LayoutUserUserKomunitasImport
      parentRoute: typeof LayoutUserLazyImport
    }
    '/_layout-user/user/profile': {
      preLoaderRoute: typeof LayoutUserUserProfileImport
      parentRoute: typeof LayoutUserLazyImport
    }
    '/_layout-user/user/sekolah': {
      preLoaderRoute: typeof LayoutUserUserSekolahImport
      parentRoute: typeof LayoutUserLazyImport
    }
  }
}

// Create and export the route tree

export const routeTree = rootRoute.addChildren([
  IndexLazyRoute,
  LayoutLazyRoute.addChildren([LayoutLayoutARoute, LayoutLayoutBRoute]),
  LayoutAdminLazyRoute.addChildren([
    LayoutAdminAdminBookingRoute,
    LayoutAdminAdminBookingbackupRoute,
    LayoutAdminAdminSekolahRoute,
  ]),
  LayoutUserLazyRoute.addChildren([
    LayoutUserUserBerandaRoute,
    LayoutUserUserBookingRoute,
    LayoutUserUserBookingbackupRoute,
    LayoutUserUserDiaryRoute,
    LayoutUserUserKomunitasRoute,
    LayoutUserUserProfileRoute,
    LayoutUserUserSekolahRoute,
  ]),
  AboutLazyRoute,
  DatatableLazyRoute,
  LoginLazyRoute,
  ProfileLazyRoute,
  RegisterLazyRoute,
  Step2LazyRoute,
  Step3LazyRoute,
  Step4LazyRoute,
  LayoutguestBlogRoute,
])

/* prettier-ignore-end */
