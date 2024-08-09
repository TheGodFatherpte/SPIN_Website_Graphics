import React from 'react'
import styles from '../style'


const Button = () => {
  return (
    <div className='container'>
      <button type='button' className={`py-4 px-6 
    font-poppins font-medium text-[18px] 
    text-primary bg-blue-gradient rounded-[10px] outline-none ${styles} rounded-[10px] `}>
        Get appointed now
        <i></i>
      </button>
    </div>

  )
}

export default Button