import { CTA } from '../assets/index.js'
import { motion, useInView } from 'motion/react';
import { useRef } from 'react';


const CallToAction = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  
  
  const whatsappRedirect = () => {
    const phone = "9595843562"
    const msg = "hey, there i want to book my slot for [enter your service]"
    const encodedUrlComponent = encodeURIComponent(msg);
    const url = `https://wa.me/${phone}?text=${encodedUrlComponent}`
    window.open(url, "_blank");
  }

  return (
    <motion.div
    ref={ref}
    initial={{ opacity: 0.3, y: 60 }}
    animate={isInView ? { opacity: 1, y: 0 } : {}}
    transition={{ duration: 2, ease: 'easeOut',type:'spring', bounce:0.3 }}
    className="h-auto w-11/12">

    <div className='mt-20 flex lg:flex-row flex-col p-8 border border-slate-300 shadow-2xl shadow-amber-100 bg-blue-500 rounded-4xl lg:h-[400px] h-auto w-full justify-between'>
      <div className="flex flex-col lg:w-[50%] w-full">
        {/* text section */}
        <h4 className="text-3xl lg:text-5xl font-Montserrat font-semibold text-neutral-900 mb-9">
          Book Your Car Detailing Today
        </h4>
        <p className="text-xl font-Roboto text-neutral-800 mb-9">
          Enhance your car’s beauty and protection with expert detailing services. Book now and give your vehicle the treatment it deserves.
        </p>
        <button className='mt-4 py-2 px-3 lg:w-6/12 w-full bg-amber-500 rounded-xl text-black font-Roboto hover:bg-amber-300 hover:scale-105 duration-300 mb-3' onClick={whatsappRedirect}>Book an Appointment</button>
      </div>
      <div className=" flex justify-center ">
        {/* img section */}
        <img src={CTA} alt="car" className='' />
      </div>
    </div>
    </motion.div>
  )
}

export default CallToAction