import React from 'react'
import { motion, useInView } from 'motion/react';
import { useRef } from 'react';

const Info = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  const whatsappRedirect = () => {
    const phone = "9730106133"
    const msg = "hey, there i want to know more about this service."
    const encodedUrlComponent = encodeURIComponent(msg);
    const url = `https://wa.me/${phone}?text=${encodedUrlComponent}`
    window.open(url, "_blank");
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0.3, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 2, ease: 'easeOut', type: 'spring', bounce: 0.3 }}
      className='h-full w-11/12 mt-14 p-8'>
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
                <td className='p-2 mr-0.5'>9:00AM - 11:00PM</td>
              </tr>

            </table>
          </div>
        </div>
        <div className='rounded-xl object-cover lg:w-5/12 w-full '>
          {/* map and contact */}
          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d660.2238073900846!2d79.01198248216379!3d21.15952644955067!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4eb006cb684bb%3A0x1c9a5efe902a4c13!2sMH%2031%20Car%20Wash%20and%20Detailing%20Studio!5e1!3m2!1sen!2sin!4v1744127672937!5m2!1sen!2sin" width="600" height="450" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" className='w-full h-[450px] rounded-xl border-2 border-blue-500 shadow-lg'></iframe>

        </div>
      </div>
    </motion.div>
  )
}

export default Info