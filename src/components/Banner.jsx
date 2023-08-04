import React, { useContext } from 'react'
import { AppContext } from '../context/app_context'

const Banner = () => {

    let { clickedProfile, galacticHome, getRandomIntInclusive } = useContext(AppContext)

    let random = getRandomIntInclusive(0, galacticHome.length-1)
  return (
    <div className='banner'>
      <img src={galacticHome[2].url} alt="" srcset="" />
    </div>
  )
}

export default Banner
