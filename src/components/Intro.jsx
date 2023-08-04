import React, { useContext } from 'react'
import { AppContext } from '../context/app_context'

const Intro = () => {

    let { clickedProfile } = useContext(AppContext)

  return (
    <div className='intro'>
        <h3>Intro</h3>
        <p className="loca">
            <img src='https://a.slack-edge.com/production-standard-emoji-assets/14.0/google-large/1f30c.png'/> <span className='text'>Lives in</span>
            <span className="location">{clickedProfile.location.name} {clickedProfile.origin.name !== "unknown" && clickedProfile.origin.name}</span>
        </p>
      <p><img src='https://a.slack-edge.com/production-standard-emoji-assets/14.0/google-large/1f47d.png'/> {clickedProfile.species}</p>
      <p><img src='https://a.slack-edge.com/production-standard-emoji-assets/14.0/google-large/1f194.png'/> {clickedProfile.gender}</p>
      <p ><img src='https://a.slack-edge.com/production-standard-emoji-assets/14.0/google-large/1f550.png'/> Joined {clickedProfile.created}</p>
    </div>
  )
}

export default Intro
