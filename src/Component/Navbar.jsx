import { X, Menu } from 'lucide-react'
import { useState } from 'react'

const Navbar = () => {

    const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false)

    const toggleNavbar = () => {
        setMobileDrawerOpen(!mobileDrawerOpen)
    }

    return (

        <div className='sticky top-6 my-6 mx-6 w-[60%] h-16 border-1 border-slate-300 rounded-xl  flex justify-between py-3 px-5 backdrop-blur-xl items-center z-50'>
            <h1 className='font-Montserrat font-bold lg:text-6xl text-3xl bg-gradient-to-r from-yellow-300 to-orange-300 text-transparent bg-clip-text'>MH31</h1>
            <div className='w-[57%] flex justify-between items-center gap-5'>
                <div>
                    <ul className='hidden lg:flex gap-6 items-center font-Roboto'>
                        <li className='hover:text-slate-200 cursor-pointer'>Services</li>
                        <li className='hover:text-slate-200 cursor-pointer'>About us</li>
                    </ul>
                </div>
                
             <button className='hidden lg:flex p-2 border-amber-100 bg-yellow-400 rounded-lg text-black font-Roboto hover:bg-amber-300 cursor-pointer'>Book service</button> 
                <button onClick={toggleNavbar} className="lg:hidden">
                    {!mobileDrawerOpen ? <Menu /> : <X />}
                </button>
            </div>
            {mobileDrawerOpen && (
                 <div className='lg:hidden fixed right-0 top-14 min-h-fit border rounded-b-lg  bg-neutral-800 flex flex-col justify-center items-center w-full  z-50'>
                     <ul className='font-Roboto text-white'>
                         <li className='py-2 hover:text-black'>Services</li>
                         <li className='py-2 hover:text-black'>About us</li>
                     </ul>
                 <button className='p-2 my-4 border-amber-100 bg-yellow-300 cursor-pointer hover:bg-amber-900 rounded-lg text-slate-900 font-Roboto '>Book service</button>
                 
             </div>
            )}
        </div>

    )
}

export default Navbar