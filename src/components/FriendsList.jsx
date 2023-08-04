import React, { useContext } from 'react'
import { AppContext } from '../context/app_context'

const FriendsList = ( {parent} ) => {

  let { grabRandomCharacters, grabCharacters } = useContext(AppContext) 

  let friends = grabCharacters(9)

  const mobile = () => {
    let friends = grabCharacters(12)
    return(
      <div className="friendsList">
          <p className='bold'>Friends</p>
        <p className='mutes'>1,730 (119 mutual)</p>
      <div className="pics">
        { friends.map((friend) => {
          return (
            <div className="container">
              <img src={friend.image}/>
              <p className="name">{friend.name}</p>
            </div>
          )
        }) }
      </div>
        <button className="all">See all friends</button>

    </div>
  )
  }
  const other = () => {
  return (
      <div className="friendsList">
        <div className="title">
          <div className="top">
            <p className='bold'>Friends</p>
            <p className='all'>See all friends</p>
          </div>
          <p className='mutes'>1,730 (119 mutual)</p>
        </div>
        <div className="pics">
          { friends.map((friend) => {
            return (
              <div className="container">
                <img src={friend.image}/>
                <p className="name">{friend.name}</p>
                <p className="mutuals">3 mutual friends</p>
              </div>
            )
          }) }
        </div>

      </div>
    )
  }

  return parent === 'mobile' ? mobile() : other()
}

export default FriendsList
