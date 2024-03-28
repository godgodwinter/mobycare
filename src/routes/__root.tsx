import { createRootRoute, Link, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'

export const Route = createRootRoute({
  component: () => (
    <>
    {/* <NavbarTesting/> */}
    <div className='min-h-screen'>
      <Outlet /></div>
      <TanStackRouterDevtools />
    </>
  ),
})

// @ts-ignore
const NavbarTesting = ()=>{
  return (
    <>
    <div className="p-2 flex gap-2">
        <Link to="/" className="[&.active]:font-bold">
          Home
        </Link>{' '}
        <Link to="/about" className="[&.active]:font-bold">
          About
        </Link>
        <Link to="/profile" className="[&.active]:font-bold">
          Profile
        </Link>
        <Link to="/datatable" className="[&.active]:font-bold">
        datatable
        </Link>
        <Link to="/layout-a" className="[&.active]:font-bold">
        Layout A
        </Link>
        <Link to="/layout-b" className="[&.active]:font-bold">
        Layout B
        </Link>
        <Link to="/admin/sekolah" className="[&.active]:font-bold">
        Sekolah
        </Link><div className="dropdown">
  <div tabIndex={0} role="button" className="">Dropdown Menu</div>
  <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
    <li>   <Link to="/layout-a" className="[&.active]:font-bold">
        Layout A
        </Link></li>
    <li>   <Link to="/layout-b" className="[&.active]:font-bold">
        Layout B
        </Link></li>
  </ul>
</div>
      </div>
      <hr />

      {/*  */}
      </>
  )
}