import React, { useContext, useState } from 'react'
import { AppContext } from '../context/app_context'
import { Link } from 'react-router-dom'

const Header = ( { parent, windowWidth } ) => {

    let { showSearch, setShowSearch, mainProfile, clickedProfile, count, setCount } = useContext(AppContext)

    // const [ count, setCount ] = useState(0)

    const switchUnderline = (num) => {
            setCount(num)
        console.log(count)
    }


    const mobile = () => {
        return (
          <div className='header'>
            <div className="left">
                <img src="https://www.freeiconspng.com/thumbs/menu-icon/menu-icon-24.png" alt="" className="menu" />
                <Link to="/home">
                    <img src="https://logos-world.net/wp-content/uploads/2020/04/Facebook-Logo-700x394.png" alt="" className="logo" />
                </Link>
            </div>

            <div className="right">

                <div className="container">
                    <img src='https://www.pngall.com/wp-content/uploads/10/Plus-Symbol-Vector-PNG-Cutout.png' alt='plus' className='plus' />
                </div>
                <div className="" onClick={() => setShowSearch(!showSearch)}>
                    <img src='https://www.freeiconspng.com/thumbs/search-icon-png/search-icon-png-21.png' alt='search' className='search'/>
                </div>
                <div className="container">
                    <img src='https://www.freeiconspng.com/uploads/black-facebook-messenger-logo-29.png' alt='message' className='message'/>
                </div>

            </div>
          </div>
        )
    } 

    const mobileProfile = () => {
        return(
            <div className='header'>
                <div className="left">
                    <Link to="/home">
                        <p className='back' onClick={() => setShowSearch(false)}>◀</p>
                    </Link>
                </div>
                <h4 className='name'>{clickedProfile.name}</h4>

                <div className="right">
                    <div className="" onClick={() => setShowSearch(!showSearch)}>
                        <img src='https://www.freeiconspng.com/thumbs/search-icon-png/search-icon-png-21.png' alt='search' className='search'/>
                    </div>

                </div>
            </div>
        )
    }
    
    const tablet = () => {
        return(
            <div className='header'>
                <div className="left">
                    <Link to="/home">
                        <img src='https://static.vecteezy.com/system/resources/previews/022/368/198/non_2x/fantasy-alien-planet-moon-and-satellite-magical-fantasy-world-gradient-color-space-objects-with-bubbles-vector.jpg' alt='logo' className='logo' onClick={() => setShowSearch(false)}/>
                    </Link>
                    <div className="searchContainer" onClick={() => setShowSearch(true)}>
                        <img src='https://www.freeiconspng.com/thumbs/search-icon-png/search-icon-png-21.png' alt='search' className='search'/>

                    </div>
                </div>
                
                <div className="middle">
                    <p className={count === 0 && 'underline'} onClick={() => switchUnderline(0)}>🌏</p>
                    <p className={count === 1 && 'underline'} onClick={() => switchUnderline(1)}>🎥</p>
                    <p className={count === 2 && 'underline'} onClick={() => switchUnderline(2)}>💹</p>
                    <p className={count === 3 && 'underline'} onClick={() => switchUnderline(3)}>🫂</p>
                    <p className={count === 4 && 'underline'} onClick={() => switchUnderline(4)}>📰</p>
                </div>

                <div className="right">
                    <div className="iconContainer">
                        <img src='https://www.pngall.com/wp-content/uploads/10/Plus-Symbol-Vector-PNG-Cutout.png' alt='plus' className='' />
                    </div>
                    <div className="iconContainer">
                        <img src='https://www.freeiconspng.com/uploads/black-facebook-messenger-logo-29.png' alt='message' className=''/>
                    </div>
                    <img src='https://images.vexels.com/media/users/3/223298/isolated/preview/d3c070ed1d488a95f3789c88b7c95674-notifications-bell-icon-flat.png' alt='bell' className=''/>
                    <img src={mainProfile?.image} alt='selfie' className='selfie'/>
                </div>
            </div>
        )
    }

    const desktop = () => {
        return(
            <div className='header'>
                <div className="left">
                    <Link to="/home">
                        <img src='https://static.vecteezy.com/system/resources/previews/022/368/198/non_2x/fantasy-alien-planet-moon-and-satellite-magical-fantasy-world-gradient-color-space-objects-with-bubbles-vector.jpg' alt='logo' className='logo' onClick={() => setShowSearch(false)}/>
                    </Link>
                    <div className="searchContainer" onClick={() => setShowSearch(true)}>
                        <img src='https://www.freeiconspng.com/thumbs/search-icon-png/search-icon-png-21.png' alt='search' className='search'/>

                    </div>
                </div>
                <div className="middle">
                    <p className={count === 0 && 'underline'} onClick={() => switchUnderline(0)}>🌏</p>
                    <p className={count === 1 && 'underline'} onClick={() => switchUnderline(1)}>🎥</p>
                    <p className={count === 2 && 'underline'} onClick={() => switchUnderline(2)}>💹</p>
                    <p className={count === 3 && 'underline'} onClick={() => switchUnderline(3)}>🫂</p>
                    <p className={count === 4 && 'underline'} onClick={() => switchUnderline(4)}>📰</p>
                </div>

                <div className="right">
                    <div className="iconContainer">
                        <img src='https://www.pngall.com/wp-content/uploads/10/Plus-Symbol-Vector-PNG-Cutout.png' alt='plus' className=''/>
                    </div>
                    <div className="iconContainer">
                        <img src='https://www.freeiconspng.com/uploads/black-facebook-messenger-logo-29.png' alt='message' className=''/>
                    </div>
                    <img src='https://images.vexels.com/media/users/3/223298/isolated/preview/d3c070ed1d488a95f3789c88b7c95674-notifications-bell-icon-flat.png' alt='bell' className=''/>
                    <img src={mainProfile?.image} alt='selfie' className='selfie'/>
                </div>
            </div>
        )
    }


    if( parent ==="mobile" ){
        return mobile()
    }
    if( parent === "mobileProfile" ){
        return mobileProfile()
    }
    if( parent ==="tablet" ){
        return tablet()
    }
    if( parent ==="desktop" ){
        return desktop()
    }
}

export default Header
