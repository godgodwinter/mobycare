import { Link, createLazyFileRoute } from '@tanstack/react-router';

export const Route = createLazyFileRoute('/step4')({
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
                                <span className="text-2xl font-semibold">Anak Tumbuh</span>
                        <h2 className="font-bold text-3xl"> <span className="bg-[#f84525] text-white px-2 rounded-md">Sehat</span></h2>
                        <h2 className="font-bold text-3xl"> <span className="text-2xl font-semibold">Orang Tua</span></h2>
                        <h2 className="font-bold text-3xl"> <span className="bg-[#f84525] text-white px-2 rounded-md">Senang</span></h2>
                            </center>
                        </div>

                     

                 
                        <div className='flex justify-center'>     
    <ul className="steps steps-horizontal">
  <li className="step step-primary"></li>
  <li className="step step-primary"></li>
  <li className="step step-primary"></li>
  <li className="step step-primary"></li>
</ul></div>
                        <div className="flex items-center justify-center mt-4 py-10">
                              

   
   
                                <Link to="/login" className="ms-4 inline-flex items-center px-10 py-6 bg-[#f84525] border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-red-800 focus:bg-gray-700 active:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition ease-in-out duration-150">
           Let's Get Started
        </Link>{' '}

                        </div>
                        
                </div>
            </div>
        </div>
    </>
  )
}