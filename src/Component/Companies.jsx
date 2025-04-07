import Marquee from "react-fast-marquee";
import { CTA, mark, hexis, avery, sonax, xpel } from '../assets/index'

const Companies = () => {
  return (
    <div className="w-10/12 m-20 lg:m-24">
      <h2 className="text-4xl lg:text-5xl font-semibold font-Montserrat text-center m-8 text-slate-900">Our Trusted Brands</h2>
      <Marquee pauseOnHover loop={0} gradient gradientColor="#D4D4D4" gradientWidth={200} autoFill speed={100} className="flex gap-7 w-full" >
        <img src={mark } className="w-32 m-6" alt="logo" />
        <img src={ hexis} className="w-32 m-6" alt="logo" />
        <img src={avery } className="w-32 m-6" alt="logo" />
        <img src={ xpel} className="w-32 m-6" alt="logo" />
        <img src={ sonax} className="w-32 m-4" alt="logo" />
      </Marquee>
      <Marquee pauseOnHover loop={0} gradient gradientColor="#D4D4D4" direction="right" gradientWidth={200} autoFill speed={110} className="flex gap-7" >
        <img src={mark } className="w-32 m-6" alt="logo" />
        <img src={ hexis} className="w-32 m-6" alt="logo" />
        <img src={avery } className="w-32 m-6" alt="logo" />
        <img src={ xpel} className="w-32 m-6" alt="logo" />
        <img src={ sonax} className="w-32 m-4" alt="logo" />
      </Marquee>
    </div>
  )
}

export default Companies