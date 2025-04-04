// import {avery} from '../assets/index'
import {bentely} from '../assets/index'

const Hero = () => {
    return (
        <div className='w-11/12 h-8/12 rounded-3xl  -mt-14  '>
    
            <video
                src={bentely}
                loop
                autoPlay
                muted
                className='w-full h-full object-cover rounded-2xl border-1 border-slate-800 overflow-hidden p-0 m-0 '
            />
           <div className="w-8/12 absolute top-58">
            <h1 className='font-Montserrat text-6xl font-semibold p-9 '>Redefining Car Care – Protection, Perfection, Performance</h1>
            {/* <p className='text-slate-900 p-9 '>At MH31 Wash & Detailing Studio, we bring precision, expertise, and high-quality care to every vehicle. From deep cleaning to advanced ceramic coating, we ensure your car looks pristine and stays protected for the long run.</p> */}
           </div>
        </div>
    )
}

export default Hero