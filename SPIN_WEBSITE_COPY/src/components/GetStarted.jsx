import { arrowUp } from "../assets";
import styles from "../style";

const GetStarted = () => (
  <div className={`${styles.flexCenter} w-[140px] h-[140px] 
    rounded-full bg-blue-gradient p-[2px] cursor-pointer`}>
    <div className={`style.flexCenter bg-primary w-[100%] h-[100%] 
    rounded-full hover:scale-110 transition duration-300 `}>
      <div className={`${styles.flexStart} flex-row `}>
        <p className="font-poppins font-medium
           text-[18px] leading-[23px] m-4 p-2  animated sm:animate-pulse">
          <span className="text-gradient">Get
          </span>
        </p>
        <img src={arrowUp} alt="arrow" className="w-[23px] h-[80px]
           object-contain" />
      </div>
      <p className="font-poppins font-medium
           text-[18px] leading-[1px] m-4 mx-8  ">
        <span className="text-gradient">Started
        </span>
      </p>
    </div>
  </div>
)

export default GetStarted