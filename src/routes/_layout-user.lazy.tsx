import Navbar_user from '@/components/babeng/Navbar_user';
import { Link, Outlet, createFileRoute, redirect } from '@tanstack/react-router'
// Fungsi untuk memeriksa apakah pengguna terautentikasi
const isAuthenticated = () => {
  // Implementasi logika autentikasi sesuai kebutuhan Anda
  // Misalnya, Anda dapat menggunakan konteks atau state manajemen keadaan autentikasi
  return true; // Gantilah dengan logika autentikasi sesuai kebutuhan
};

// Fungsi middleware untuk memeriksa autentikasi sebelum memuat rute
// @ts-ignore
const checkAuth = ({ context, location }) => {
  if (!isAuthenticated()) {
    throw redirect({
      to: '/login',
      search: {
        redirect: location.href,
      },
    });
  }
};
// @ts-ignore
export const Route = createFileRoute('/_layout-user')({
  beforeLoad: checkAuth, // Memanggil fungsi middleware autentikasi
  component: LayoutComponent,
})

function LayoutComponent() {
  const isAuthenticated = true; // Gantilah dengan logika autentikasi yang sesuai
  return (
    <>
      {isAuthenticated ? <LayoutComponent_Pages /> : <GotoLogin_Pages/>}
    </>
  );
}



function GotoLogin_Pages() {
  return (
    <div>
      <div>Login terlebih dahulu</div>
      <div className="flex gap-2">
        <Link
          to="/login"
          activeProps={{
            className: 'font-bold',
          }}
        >
         Go to Login
        </Link>
      </div>
    </div>
  );
}
// import { LuAperture, LuAppWindow, LuApple, LuBadgeAlert } from "react-icons/lu";
// import { useSelector } from 'react-redux';

import { ImBubbles,ImHome3 ,ImBook ,ImUser } from "react-icons/im";
function LayoutComponent_Pages() {
  const link_Style_active='active';
  return (
    <div>
    <Navbar_user/>
    <div className='w-full flex'>
      <div className='p-2 w-full'>
        <Outlet />
      </div>
      <div className="btm-nav">
  <Link to='/user/beranda' activeProps={{ className:link_Style_active }}>
  <ImHome3 /><span className="btm-nav-label">Beranda</span>
  </Link>
  <Link to='/user/komunitas' activeProps={{ className:link_Style_active }} >
  <ImBubbles /><span className="btm-nav-label">Komunitas</span>
  </Link>
  <Link to='/user/diary'  activeProps={{ className:link_Style_active }}>
   <ImBook /><span className="btm-nav-label">Diary</span>
  </Link>
  <Link to='/user/profile'  activeProps={{ className:link_Style_active }}>
    <ImUser/><span className="btm-nav-label">Profile</span>
  </Link>
</div>
      </div>
    </div>
  );
}