import {CopyrightIcon,Twitter,Instagram,Facebook} from 'lucide-react'

const Footer = () => {
  return (
    <div className='h-full rounded-4xl shadow-2xl shadow-amber-300 w-11/12 p-8 mt-14'>
      <div className='flex justify-evenly mb-8 lg:flex-row gap-4 flex-col'>
        {/* main div */}
        <h1 className="lg:text-9xl text-5xl mt-11 font-bold font-Montserrat bg-gradient-to-r from-neutral-400 to-white text-transparent bg-clip-text">MH31</h1>
        <div className="">
        <h2 className="text-xl font-semibold font-Roboto">Services</h2>
        <ul>
          <li className='hover:text-neutral-500 cursor-pointer font-Roboto'>Wash</li>
          <li className='hover:text-neutral-500 cursor-pointer font-Roboto'>Engine Cleaning</li>
          <li className='hover:text-neutral-500 cursor-pointer font-Roboto'>Interior Deep cleaning</li>
          <li className='hover:text-neutral-500 cursor-pointer font-Roboto'>Exterior Deep cleaning</li>
          <li className='hover:text-neutral-500 cursor-pointer font-Roboto'>Wrap</li>
          <li className='hover:text-neutral-500 cursor-pointer font-Roboto'>Window Films</li>
          <li className='hover:text-neutral-500 cursor-pointer font-Roboto'>PPFs</li>
        </ul>
        </div>
       
        <div className="">
        <h2 className="text-xl font-semibold font-Roboto">Policies</h2>
        <ul>
          <li className='hover:text-neutral-500 cursor-pointer font-Roboto'>Terms and Conditions</li>
          <li className='hover:text-neutral-500 cursor-pointer font-Roboto'>Policy</li>
          </ul>
        </div>
      </div>
      <hr />
      <div className='mt-8 flex justify-between'>
        {/* icon div */}
        <p className='font-Roboto text-md flex items-center'>Copyright<CopyrightIcon className='size-4 mx-1'/>  MH31</p>
        <div className='flex gap-3'>
<Twitter className='rounded-full border hover:cursor-pointer size-12 p-2
'/>
<Instagram className='rounded-full border hover:cursor-pointer size-12 p-2'/>
<Facebook className='rounded-full border hover:cursor-pointer size-12 p-2'/>
        </div>
      </div>

    </div>
  )
}

export default Footer