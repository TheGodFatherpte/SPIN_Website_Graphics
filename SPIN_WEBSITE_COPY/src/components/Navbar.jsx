import React from 'react'
import { logo } from '../assets'


const Navbar = () => (
    <nav  className=' w-full flex py-6 justify-between items-center navbar'>
      <img id="logo" src={logo} alt = "SPIN" className="w-[124px] h-[50px]"/> 

      <div id = "navbar" className='all'>
        <div className='lefter'>
            <div className='text'> Combos </div>
        </div>
        <div className='left'>
          <div className='text'> Menu </div>
        </div>
        <div className='center'>
          <div className='explainer'><span> Ordena ahora </span></div>
          <div className='text'>Acerca de nosotros</div>
        </div>
        <div className='right'>
          <div className='text'>Nuestro local</div>
        </div>
        <div className='righter'>
          <div className='text'>Contacto</div>
        </div>
      </div>
    </nav>
    
  )//prueba

export default Navbar