import Navbar_1 from '@/components/babeng/Navbar_1';
import Sidebar_1, { SidebarItem, SidebarLabel } from '@/components/babeng/Sidebar_1';
import { RootState } from '@/stores/store';
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
export const Route = createFileRoute('/_layout-admin')({
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
import { LuAperture, LuAppWindow, LuApple, LuBadgeAlert } from "react-icons/lu";
import { useSelector } from 'react-redux';
function LayoutComponent_Pages() {
  const isVisible = useSelector((state: RootState) => state.sidebar.isVisible);
  const link_Style=`
  relative flex items-center 
   rounded-sm cursor-pointer
  transition-colors group text-sm
  hover:bg-emerald-50 text-gray-600
`;
const link_Style_active='font-bold bg-gradient-to-tr from-emerald-200 to-emerald-100 text-emerald-800';
  return (
    <div>
    <Navbar_1/>
    <div className='w-full flex'>
    <div className={isVisible ? '' : 'hidden md:block'}>
        <Sidebar_1  > 
  {/* <div className="divider divider-start divider-success font-bold font-sm">Overview</div> */}
  <SidebarLabel text={"Overview"} />
  <Link to="/admin/sekolah" className={link_Style} activeProps={{ className:link_Style_active }}><SidebarItem icon={<LuAppWindow size={20}/>} text="Dashboard" alert={false} active={true}  /></Link>
          <Link to="/admin/booking" className={link_Style} activeProps={{ className:link_Style_active }}><SidebarItem icon={<LuApple  size={20}/>} text="Booking" alert={false} active={false}/></Link> 
          <SidebarItem icon={<LuAperture size={20}/>} text="File" alert={false} active={false}/>
          <SidebarItem icon={<LuBadgeAlert size={20}/>} text="Profile" alert={false} active={false}/>
          <SidebarItem icon={<LuBadgeAlert size={20}/>} text="Card" alert={false} active={false}/>
          <SidebarItem icon={<LuBadgeAlert size={20}/>} text="Account" alert={false} active={false}/>
          <SidebarLabel text={"Management"} />
          <SidebarLabel text={"Other Case"} />
          <Link to="/admin/sekolah"><SidebarItem icon={<LuAppWindow size={20}/>} text="Random " alert={false} active={false}/></Link>
          <SidebarLabel text={"Pages"} />
          <Link to="/"><SidebarItem icon={<LuAppWindow size={20}/>} text="Login" alert={false} active={false}/></Link>
          <Link to="/"><SidebarItem icon={<LuAppWindow size={20}/>} text="Register" alert={false} active={false}/></Link>
          <Link to="/"><SidebarItem icon={<LuAppWindow size={20}/>} text="404" alert={false} active={false}/></Link>
        </Sidebar_1>
        </div>
        {/* <Link
          to="/layout-a"
          activeProps={{
            className: 'font-bold',
          }}
        >
          Layout A
        </Link> */}
      <div className='p-2 w-full'>
        <Outlet />
      </div>
      </div>
    </div>
  );
}