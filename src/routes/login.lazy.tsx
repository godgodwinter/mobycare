import { Link, createLazyFileRoute } from '@tanstack/react-router';

export const Route = createLazyFileRoute('/login')({
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
                    {/* <a href="/">
                        <h2 className="font-bold text-3xl">MOBY <span className="bg-[#f84525] text-white px-2 rounded-md">CARE</span></h2>
                    </a> */}
                    <div className="avatar">
  <div className="w-24 mask mask-squircle">
    <img src={logo1} />
  </div>
</div>
                </div>

                <div className="w-full sm:max-w-md mt-6 px-6 py-4 bg-white shadow-md overflow-hidden sm:rounded-lg">

                        <div className="py-8">
                            <center>
                                <span className="text-2xl font-semibold">Sign in to AdminPanel</span>
                            </center>
                        </div>

                        <div>
                            <label className="block font-medium text-sm text-gray-700"  />
                            <input type='email' 
                                name='email'
                                placeholder='Email'
                                className="w-full rounded-md py-2.5 px-4 border text-sm outline-[#f84525]" />                        
                        </div>


                        <div className="mt-4">
                            <label className="block font-medium text-sm text-gray-700"  />
                            <div className="relative">
                                <input id="password" type="password" name="password" placeholder="Password" required  className = 'w-full rounded-md py-2.5 px-4 border text-sm outline-[#f84525]'/>

                                <div className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5">
                                    <button type="button" id="togglePassword" className="text-gray-500 focus:outline-none focus:text-gray-600 hover:text-gray-600">
                                                            
                                    </button>
                                </div>
                            </div>
                        </div>

                 

                        <div className="flex items-center justify-end mt-4">
                              

                                <Link to="/admin/sekolah" className="ms-4 inline-flex items-center px-4 py-2 bg-[#f84525] border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-red-800 focus:bg-gray-700 active:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition ease-in-out duration-150">
           Sign In
        </Link>{' '}
                            {/* <button className= 'ms-4 inline-flex items-center px-4 py-2 bg-[#f84525] border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-red-800 focus:bg-gray-700 active:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition ease-in-out duration-150'>
                                Sign In
                            </button> */}

                        </div>
                        
                </div>
            </div>
        </div>
    </>
  )
}