import React, { useContext } from 'react'
import { AppContext } from '../context/app_context'

const CreatePost = ( {parent} ) => {

  let { mainProfile } = useContext(AppContext)

  const mobile = () => {
    return (
      <div className="createPost">
        <img src={mainProfile?.image} alt="" className='profilePic'/>
        <input type="text" placeholder={`What's on your mind?`} className='bar'/>
        <img src="https://static.xx.fbcdn.net/rsrc.php/v3/yD/r/4lAYcqypgif.png" alt="" className='icon'/>
      </div>
    )
  }

  const other = () => {
    return (
      <div className='container'>
          {/* whats on your mind ? */}
          <div className='post'>
            <img src={mainProfile?.image} alt="" className='yoda'/>
            <input type="text" placeholder={`What is on your mind, ${mainProfile?.name}?`} className='bar'/>
          </div>
          <hr />
          {/* three icons live , photo, feelings */}
          <div className='icons'>
            <div className="red">
            <img src="https://static.xx.fbcdn.net/rsrc.php/v3/yI/r/hk5Kx2QFmmk.png" alt="" className='images' /> <p>Live Video</p>
            </div>
            <div className="green">
            <img src="https://static.xx.fbcdn.net/rsrc.php/v3/yD/r/4lAYcqypgif.png" alt="" className='images' /> Photo/video
            </div>
            <div className='yellow'>
            <img src="https://static.xx.fbcdn.net/rsrc.php/v3/yO/r/2qUC865ACHv.png" alt="" className="images"/> Feeling/activity
            </div>
          </div>
        
      </div>
    )
  }

  return parent === "mobile" ? mobile() : other()
}

export default CreatePost
