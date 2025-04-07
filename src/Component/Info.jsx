import React from 'react'
import { CopyIcon } from 'lucide-react'

const Info = () => {

  const whatsappRedirect = () =>{
    const phone = "9146738164"
    const msg = "hey, there i want to know more about this service."
    const encodedUrlComponent = encodeURIComponent(msg);
    const url = `https://wa.me/${phone}?text=${encodedUrlComponent}`
    window.open(url,"_blank");
  }

  return (
    <div className='h-full w-11/12 mt-14 p-8'>
      <div className="h-auto w-full flex flex-col lg:flex-row gap-9 justify-between">
        <div>
          {/* text section */}
          <h3 className='font-Montserrat text-3xl lg:text-5xl font-semibold mb-7'>Get in Touch</h3>
          <p className='text-xl font-Roboto mb-5'>Contact Us for Expert Car Care Services.<br />
            Location: MH31 Wash & Detailing Studio, [Your Address]
          </p>
          <button className="bg-amber-300 py-2 px-4 hover:bg-amber-400 text-black font-Roboto rounded-xl hover:scale-110 duration-300 cursor-pointer mt-8" onClick={whatsappRedirect}>WhatsApp</button>
          <div className='bg-neutral-700 h-[150px] w-fit rounded-2xl shadow shadow-amber-400 p-3 mt-18'>
<h4 className='font-Montserrat font-semibold text-lg'>Open Hours</h4>
<table className='mt-4 font-Roboto'>
<tr className='border-b-2'>
    <th>Weekdays</th>
    <th>Weekends</th>
  </tr>
  <tr>
    <td className='p-2 mr-0.5'>9:00AM - 10:00PM</td>
    <td className='p-2 mr-0.5'>9:00AM - 10:00PM</td>
  </tr>

</table>
          </div>
        </div>
        <div className='rounded-xl object-cover lg:w-5/12 w-full '>
          {/* map and contact */}
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1006101.2758792272!2d77.78268617812499!3d21.124271399999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4eab12bd10cef%3A0xf6e67c2f0a066c27!2sG%20H%20Raisoni%20College%20of%20Engineering%20and%20Management%2C%20Nagpur%20(GHRCEMN)!5e1!3m2!1sen!2sin!4v1743994638441!5m2!1sen!2sin" width="600" height="450" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" className='w-full h-96 rounded-xl border-2 border-blue-500 shadow-lg'></iframe>
      <div className="flex mt-4 gap-4 w-full">
        <button className="bg-amber-300 py-2 px-3 text-black border rounded-xl flex gap-2 items-center font-Roboto">Email: example@mail.com <CopyIcon size={17} className='hover:cursor-pointer'/></button>
        <button className="bg-amber-300 py-2 px-3 text-black border rounded-xl flex gap-2 items-center font-Roboto">contact: (+91) 999999999 <CopyIcon size={17} className='hover:cursor-pointer'/></button>
      </div>
        </div>
      </div>
    </div>
  )
}

export default Info