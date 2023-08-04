import React, { useContext } from 'react'
import Header from '../components/Header'
import { AppContext } from '../context/app_context'
import Search from '../components/Search'
import Banner from '../components/Banner'
import ProfileHead from '../components/ProfileHead'
import Intro from '../components/Intro'
import PhotoList from '../components/PhotoList'
import FriendsList from '../components/FriendsList'
import CreatePost from '../components/CreatePost'
import Feed from '../components/Feed'

const Profile = ( { parent, profile} ) => {

    // console.log('PROFILE PARENT:', parent)
    let { showSearch, clickedProfile, mainProfile } = useContext(AppContext)

    const mobile = () => {
        return (
            
            <div className='mobileProfileContainer'>
                <Header parent="mobileProfile" />
                { showSearch && <Search parent="mobile"/>}
                <Banner />
                <ProfileHead parent="mobile"/>
                {/* <hr /> */}
                <FriendsList parent="mobile"/>
                <hr />
                <div className="createPost">
                    <div className="top">
                        <img src={mainProfile?.image} alt="" srcset="" className='profilePic'/>
                        <input type="text" placeholder={`Write something to ${clickedProfile.name}...`} className='bar'/>
                    </div>
                    <hr />
                    <div className="bottom">
                        <div className="post">
                            <img src="https://static.xx.fbcdn.net/rsrc.php/v3/yD/r/4lAYcqypgif.png" alt="" srcset="" className='icon'/>
                            <p>Write Post</p>
                        </div>
                        <div className="">
                            <img src="https://static.xx.fbcdn.net/rsrc.php/v3/yD/r/4lAYcqypgif.png" alt="" srcset="" className='icon'/>
                            <p>Share Photo</p>
                        </div>
                    </div>
                </div>
                <Feed />
                {/* <img src={profile.image}/> */}
                {/* <div className="profileBody">
                    <div className="leftSide">
                        <Intro />
                        <PhotoList />
                    </div>
                    <div className="rightSide">
                        <Feed />
                    </div>
                </div> */}
            </div>
        )
    }
    const tablet = () => {
        return (
            <>
            <Header parent="tablet"/>
            { showSearch && <Search />}
            <div className='tabletProfileContainer'>
                {/* <h1>{parent}</h1>
                <h1>TABLET PROFILE</h1>
                <p>{profile.name} profile</p>
                <img src={profile.image}/> */}
                <Banner />
                <ProfileHead />
                <div className="profileBody">
                    <div className="leftSide">
                        <Intro />
                        <PhotoList />
                        <FriendsList />
                    </div>
                    <div className="rightSide">
                        <CreatePost />
                        <Feed />
                    </div>
                </div>
            </div>
            </>
        )
    }
    const desktop = () => {
        return (
            <>
                <Header parent="desktop"/>
                <div className='desktopProfileContainer'>
                { showSearch && <Search />}
                {/* <h1>{parent}</h1> */}
                {/* <h1>DESKTOP PROFILE</h1> */}
                {/* <p>{profile.name} profile</p>
                <img src={profile.image}/> */}
                <Banner />
                <ProfileHead />
                <div className="profileBody">
                    <div className="leftSide">
                        <Intro />
                        <PhotoList />
                        <FriendsList />
                    </div>
                    <div className="rightSide">
                        <CreatePost />
                        <Feed />
                    </div>
                </div>
                </div>
            </>
        )
    }
  
    if( parent === "mobile" ) return mobile()
    if( parent === "tablet" ) return tablet()
    if( !parent ) return desktop() // dont know why parent is undefined...
}

export default Profile