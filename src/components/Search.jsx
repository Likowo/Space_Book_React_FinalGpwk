import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../context/app_context'
import { Link } from 'react-router-dom'

const Search = () => {

    let { showSearch, setShowSearch, search, setSearch, characters, setClickedProfile } = useContext(AppContext)

    const [ clicked, setClicked ] = useState(false)

    // useEffect(() => {
    //     console.log(clicked)
    //     console.log(search)
    // }, [clicked])

    // useEffect(() => {
    //     characters.filter((character) => {
    //         character.name.includes(search) && console.log(character.name)
    //     })
    // }, [search])

    const handleClick = (who, button) => {
        setShowSearch(false)
        setSearch('')
        if(button === 'character') setClickedProfile(who)
    }

  return (
    <div className='searchPopUp' onClick={() => setClicked(false)}>
        <div className="top">
            <p className='back' onClick={() =>handleClick(false, 'exit')}>⬅</p>
            <img src='https://www.freeiconspng.com/thumbs/search-icon-png/search-icon-png-21.png' className='searchIcon' style={{ display: clicked && 'none'}} />
            <input type='text' placeholder='Search Spacebook'
            onClick={() => setClicked(true)}
            onChange={(e) => setSearch(e.target.value)}
            value={search}/>
        </div>

        <div className="results">
            { !search ? 
            <p className='recent'>No Recent Searches</p> :
            characters.map((character) => {
                // console.log(character.name)
                if(character.name.toLowerCase().includes(search.toLowerCase())) return (
                    <Link to={`/profile/${character.name.replaceAll(' ', '')}`}>
                        <div className="searchItem" onClick={() => handleClick(character,'character')}>
                            <img src={character.image} alt="" />
                            <div className="right">
                                <h5>{character.name}</h5>
                                <p>Friend</p>
                            </div>
                        </div>
                    </Link>
                )
            })

            }

        </div>

    </div>
  )
}

export default Search
