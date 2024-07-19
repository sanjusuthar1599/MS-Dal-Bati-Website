// eslint-disable-next-line no-unused-vars
import React from 'react'
import './AppDowload.css'
import { assets } from '../../../public/assets'

const AppDowload = () => {
  return (
    <div className='app-download' id='app-dowload'>
      <p>For Better Exprience Dowload <br /> Tomato App</p>
      <div className='app-download-plateforms'>
        <img src={assets.play_store} alt='' />
        <img src={assets.app_store} alt='' />

      </div>
    </div>
  )
}

export default AppDowload
