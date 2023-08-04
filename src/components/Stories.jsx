import React, { useContext, useState } from 'react'
import { AppContext } from '../context/app_context'

const Stories = ( {parent} ) => {

  let { mainProfile, grabCharacters, characters, galacticHome  } = useContext(AppContext)

  const [ underline, setUnderline ] = useState(true)
  const tempArray = [1,2,3,4,5,6,7,8,9,10]

  let friends = grabCharacters(20)

  const toggleLine = () => {
    setUnderline(!underline)
  }

  const mobile = () => {
    return (
      <div className='storiesContainer'>
  
          <div className="options">
            <div className={underline && 'underline'} onClick={() => setUnderline(true)}>Stories</div>
            <div className={!underline && 'underline'} onClick={() => setUnderline(false)}>Reels</div>
          </div>
  
          <div className="stories">
            { friends.map((friend, index) => {
              return (
                <div className="story" style={{backgroundImage: `url(${galacticHome[index]?.url})`}} key={index}>
                  <img src={friend.image} alt='profile pic' className='avatar'/>
                  <p className='name'>{friend.name}</p>
                </div>
              )
            }) }
          </div>
        
      </div>
    )
  }

  const other = () => {
    return (
      <div className='storiesContainer'>
  
          <div className="options">
            <div className={underline && 'underline'} onClick={() => setUnderline(true)}>Stories</div>
            <div className={!underline && 'underline'} onClick={() => setUnderline(false)}>Reels</div>
          </div>
  
          <hr/>
  
          <div className="stories">
            { friends.map((friend, index) => {
              return (
                <div className="story" style={{backgroundImage: `url(${galacticHome[index]?.url})`}}>
                  <img src={friend.image} alt='profile pic' className='avatar'/>
                  <p className='name'>{friend.name}</p>
                </div>
              )
            }) }
          </div>
        
      </div>
    )
  }

  return parent === "mobile" ? mobile() : other()
}

export default Stories
