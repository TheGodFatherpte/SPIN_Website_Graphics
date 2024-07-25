import React from 'react'
import styles from '../style'
import Button from './Button'
const CTA = () => (
  <section className={`styles.flexCenter ${styles.marginY} ${styles.padding} 
  sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow `}>

    <div className='flex-1 flex flex-col'>
      <h2 className={styles.heading2} >
        Apply Today!
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5 max-w-[470px] mt-5`}>
        Everithing you need to fill out the form above
        to become one of our insurance agents and grow your business.
      </p>
    </div>

    <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>

      <Button />
      
    </div>
    
  </section>
)


export default CTA