// import {avery} from '../assets/index'
import * as motion  from 'motion/react-client'
import { bentely } from '../assets/index'

const Hero = () => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
                duration: 2,
                scale: { type: "spring", visualDuration: 1, bounce: 0.1 }
            }}
            scro
         className='w-11/12 h-[500px] lg:h-[100vh] rounded-3xl -mt-14'
        >

            <video
                src={bentely}
                loop
                autoPlay
                muted
                className='w-full lg:h-[90vh] h-[50vh] object-cover rounded-2xl border-1 border-slate-800 overflow-hidden p-0 m-0 '
            />
            <div className="w-8/12 absolute lg:top-58 top-42">
                <h1 className='font-Montserrat text-4xl lg:text-6xl font-semibold p-9 '>Redefining Car Care – Protection, Perfection, Performance</h1>
                {/* <p className='text-slate-900 p-9 '>At MH31 Wash & Detailing Studio, we bring precision, expertise, and high-quality care to every vehicle. From deep cleaning to advanced ceramic coating, we ensure your car looks pristine and stays protected for the long run.</p> */}
            </div>
        </motion.div>
    )
}

export default Hero