import { Link, createLazyFileRoute } from '@tanstack/react-router';

export const Route = createLazyFileRoute('/')({
  component: Index,
})

function Index() {
  return (
    <>
    <LoginPages/>
    </>
  )
}

import logo1 from '@/assets/mobycare/logo1.png'
const LoginPages = ()=>{
  return(
    <>
    <div className="font-sans text-gray-900 antialiased p-2 px-4 ">
            <div className="min-h-screen flex flex-col sm:justify-start items-center pt-6 sm:pt-0 bg-[#f8f4f3]">
                            <div>
                                <div className="avatar">
            <div className="w-24 mask mask-squircle">
                <img src={logo1} />
            </div>
            </div>
                </div>

                <div className="w-full sm:max-w-md mt-6 px-6 py-4 bg-white shadow-md overflow-hidden sm:rounded-lg">

                        <div className="py-8">
                            <center>
                                <span className="text-2xl font-semibold">Selamat Datang di </span>
                        <h2 className="font-bold text-3xl">MOBY <span className="bg-[#f84525] text-white px-2 rounded-md">CARE</span></h2>
                        <p className='text-sm leading-relaxed my-4'>Aplikasi pemantauan tumbuh kembang anak yang terintegrasi antara kesehatan ibu dan anak, pendidikan parenting dan psikologi anda</p>
                            </center>
                        </div>

                     

                 
                        <div className='flex justify-center'>     
    <ul className="steps steps-horizontal">
  <li className="step step-primary"></li>
  <li className="step "></li>
  <li className="step"></li>
  <li className="step"></li>
</ul></div>
                        <div className="flex items-center justify-between mt-4  pt-10 py-2">
                              
                        <Link to="/login" className="ms-4 inline-flex items-center px-4 py-2 bg-[#93E6D7] border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-red-800 focus:bg-gray-700 active:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition ease-in-out duration-150">
           Skip
        </Link>{' '}
                              
   
   <div className='flex justify-end'>
   {/* <Link to="/login" className="ms-4 inline-flex items-center px-4 py-2 bg-[#2F5BA8] border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-red-800 focus:bg-gray-700 active:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition ease-in-out duration-150">
           BACK
        </Link>{' '} */}
        <Link to="/step2" className="ms-4 inline-flex items-center px-4 py-2 bg-[#f84525] border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-red-800 focus:bg-gray-700 active:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition ease-in-out duration-150">
           Next
        </Link>{' '}
   </div>
                              

                        </div>
                        <div>
                     
                        </div>
                        
                </div>
            </div>
        </div>
    </>
  )
}