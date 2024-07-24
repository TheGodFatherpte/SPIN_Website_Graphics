import { discount } from "../assets";
import styles from "../style";

const Hero = () => {
  return (
    <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      {/* Left Section */}
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
          <img src={discount} alt="discount" className="w-[32px] h-[32px]" />
          <p className={`${styles.paragraph} ml-2`}>
            <span className=" text-white">Get appointed </span>
            with {" "}
            <span className=" text-white">us
            </span> Now!
          </p>
        </div>

        <div className="flex flex-row
      justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold 
          ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
            A new <br className="sm:block
          hidden" /> {" "}
            <span className="text-gradient">SPIN
            </span> {""}
              Insurance.
          </h1>

        </div>
      </div>

      {/* Right Section */}
      <section id="form" className="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800 md:w-1/2">
        <h2 className="text-lg font-semibold text-gray-700 capitalize dark:text-blue-400">Get appointed with Taurus</h2>
        <h3 className='text-lg font-shadow text-gray-700 capitalize dark:text-white'>Please complete the form below and one of our Taurus Marketing Representatives will be in touch shortly.  </h3>
        <form>
          <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
            <div>
              <label htmlFor="username" className="text-gray-700 dark:text-gray-200">Full name</label>
              <input id="username" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
            </div>

            <div>
              <label htmlFor="emailAddress" className="text-gray-700 dark:text-gray-200">Email Address</label>
              <input id="emailAddress" type="email" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
            </div>

            <div>
              <label htmlFor="password" className="text-gray-700 dark:text-gray-200">Phone number</label>
              <input id="password" type="password" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
            </div>

            <div>
              <label htmlFor="passwordConfirmation" className="text-gray-700 dark:text-gray-200">LOB</label>
              <input id="passwordConfirmation" type="password" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
            </div>
          </div>

          <div className="flex justify-end mt-6">
            <button className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">Save</button>
          </div>
        </form>
      </section>
    </section>
  );
}

export default Hero;
