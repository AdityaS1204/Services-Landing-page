import { services } from '../constants/constant';
import { motion, useInView } from 'motion/react';
import { useRef } from 'react';


const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });



  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0.3, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 2, ease: 'easeOut',type:'spring', bounce:0.3 }}
      className='w-11/12 h-auto p-8 rounded-2xl border border-slate-300 bg-neutral-300/20 shadow-2xl flex flex-col lg:flex-row md:flex-col justify-center gap-5'>
      <div className="mt-10 lg:mt-32 w-full lg:w-8/12">
        <h3 className='text-4xl lg:text-5xl font-Montserrat font-semibold text-slate-900'>What we offer</h3>
        <p className="text-base lg:text-xl mt-5 lg:mt-8 tracking-wide font-roboto text-slate-700 w-full lg:w-8/12">At MH31 Wash & Detailing Studio, we’re passionate about keeping your vehicle in its best shape — inside and out. Whether you’re looking for a quick foam wash, long-lasting ceramic coating, or a full interior and exterior makeover, we offer tailored services that match your car's needs and your lifestyle. </p>
        <p className='text-base lg:text-xl mt-5 lg:mt-8 tracking-wide font-roboto text-slate-700 w-full lg:w-8/12'>
          We combine high-quality products, expert techniques, and attention to detail to restore, protect, and enhance your car’s appearance. From daily drivers to luxury machines, we treat every vehicle like it’s our own.
        </p>
      </div>
      {/* <div className="h-auto w-full flex-col lg:flex-row flex gap-3 items-center"> */}
      <div className="w-full h-auto carousel carousel-center bg-amber-500 rounded-box max-w-md space-x-4 lg:p-14 px-14 py-7">
        {services.map((service, index) => (
          // relative z-40 h-96 w-80 m-6 border-2 p-0 rounded-4xl object-cover
          <div key={index} className="carousel-item relative h-auto w-[200px] lg:w-[300px] hover:cursor-pointer hover:shadow-2xl rounded-4xl ">
            <img src={service.imgsrc} alt={service.name} className='h-full w-full object-cover rounded-4xl' />
            <div className='absolute flex inset-0 p-8 z-50 text-transparent hover:text-white hover:cursor-pointer flex-col hover:backdrop-blur-xl rounded-4xl duration-700'>
              <h4 className='font-Montserrat font-semibold text-xl mb-10 mt-6'>{service.name}</h4>
              <p className='font-Roboto text-sm hover:text-neutral-200 '>{service.description.slice(0, 180)}...</p>
            </div>
          </div>
        ))}

      </div>
      {/* </div> */}
    </motion.div >
  )
}

export default Services