import { testimonials } from "../constants/constant"
import Marquee from "react-fast-marquee"
import { motion, useInView } from 'motion/react';
import { useRef } from 'react';

const Testimonial = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  return (
    <motion.div
    ref={ref}
    initial={{ opacity: 0.3, y: 60 }}
    animate={isInView ? { opacity: 1, y: 0 } : {}}
    transition={{ duration: 2, ease: 'easeOut',type:'spring', bounce:0.3 }}
     className='mt-20 p-8 flex flex-col rounded-2xl border bg-neutral-200/30 shadow-lg h-auto w-11/12 border-slate-300'>
      <h3 className='text-3xl lg:text-5xl font-Montserrat font-semibold text-neutral-900'>What our customers say about us</h3>
      <h4 className="font-Roboto italic text-xl mt-6 text-neutral-700">"Real Stories, Real Shine"</h4>
      <p className="font-roboto lg:text-2xl text-xl mt-4 text-neutral-800">Hear from our happy customers who trust MH31 Wash & Detailing Studio for superior car care.</p>
      <div className="h-auto w-full bg-amber-500 rounded-box space-x-4 p-12 flex mt-12">
        <Marquee pauseOnHover loop={0} speed={90} className='flex gap-7' gradient gradientColor="#FE9A00" gradientWidth={10}>
         
        {testimonials.map((testimonial, index) => (
          <div className="relative carousel-item lg:h-[500px] h-[300px] w-[220px] lg:w-[300px] rounded-4xl flex shrink-0 mr-7 " key={index}>
            <img src={testimonial.carimg} className=" object-cover h-full w-full rounded-4xl" />
            <div className="absolute inset-0 p-6  hover:backdrop-blur-2xl duration-700 rounded-4xl group flex hover:border-2 border flex-col justify-end">
              <div className="flex items-center gap-4 justify-baseline">
                <img src={testimonial.imgsrc} alt="" className="rounded-full size-14 group-hover:block hidden duration-700" />
                <h4 className="text-xl group-hover:block hidden duration-700 font-Montserrat">{testimonial.reviewer}</h4>
              </div>
              <p className="group-hover:block hidden duration-700 mt-6 font-Roboto">{testimonial.review}</p>
            </div>
          </div>
        ))}
        </Marquee >
      </div>
    </motion.div>
  )
}

export default Testimonial