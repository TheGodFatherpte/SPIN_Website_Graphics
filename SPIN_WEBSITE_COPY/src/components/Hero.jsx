import React, { useState } from "react";
import { people02 } from "../assets";
import styles from "../style";
import Form from "./Form";
import GetStarted from "./GetStarted";

const Hero = () => {
  const [isModalVisible, setModalVisible] = useState(false);

  const handleSuccess = () => {
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  
  return (
    
    <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      {/* Left Section */}
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
          <img src={people02} alt="discount" className="w-[32px] h-[32px] bg-white rounded-full mr-2" />
          <p className={`${styles.paragraph} ml-2`}>
            <span className=" text-white">Get appointed </span>
            with {" "}
            <span className=" text-white">us
            </span> Now!
          </p>
        </div>

        <div id ="spin" className="flex flex-row
      justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold 
          ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
            A new <br className="sm:block
          hidden" /> {" "}
            <span className="text-gradient">SPIN
            
            </span> {" "}

          </h1>
          <div className="ss:flex hidden md:mr-4 mr-0">
            <GetStarted />
          </div>
        </div>
        
        <h1 id ="Insurance" className=" font-poppins font-semibold 
          ss:text-[68px] text-[52px] text-white ss:leading-[100.8px] 
          leading-[75px] w-full">
          Insurance.
        </h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          We're excited to welcome you to partner with us. SPIN offers
          unparalleled financial strength and exceptional support for our
          partners. Join us today and experience the difference
        </p>
      </div>

      {/* Right Section */}
      <div id="form" className={` ${styles.paragraph} font-poppins mt-5 flex-1 max-w-4xl p-6 mx-auto
       rounded-md shadow-md shadow-gray-2000 dark:bg-gray-800 md:w-1/2 relative `}>
        <h2 className="text-lg font-semibold text-gray-700 capitalize dark:text-blue-400">Get appointed with SPIN</h2>
        <h3 className='text-lg font-shadow text-gray-700 capitalize dark:text-white'>Please complete the form below and
          one of our SPIN territoty managers will get in touch with you shortly.  </h3>
        <Form onSuccess={handleSuccess} />
      </div>
      
    </section>
    
    
  );
}

export default Hero;
