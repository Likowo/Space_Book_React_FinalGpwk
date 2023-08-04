import React, { useContext } from 'react'
import { AppContext } from '../context/app_context'
import FeedItem from './FeedItem'

const Feed = ( {parent} ) => {

    let { grabCharacters, kQuote } = useContext(AppContext)

    const friends = grabCharacters(20)

  return (
    <div className='feedContainer'>
        { friends.map((friend, index) => {
            return <FeedItem friend={friend} index={index} parent={parent} kQuote={kQuote} key={index}/>
        }) }
    </div>
  )
}

export default Feed
