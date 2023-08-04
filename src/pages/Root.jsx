import React from 'react'
import { Link } from 'react-router-dom'
const Root = () => {
    const hide = (toeNail) => {
        toeNail.classList.add('hide')
      }
  return (
    <div className='root'>
      <Link to='/home' className="mainLink" onClick={(e) => hide(e.target)}>
            <p className="acomment">
              The dopest social network in the galaxy...
            </p>
            <div className="innerBox" id="innerBoxRight">
                <div className="triangle-left">   </div>
                <div className="triangle-top">    </div>
                <div className="triangle-bottom"> </div>
                <div className="triangle-right">  </div>
                <div className="infoBox">
                    <p></p>
                    <p className = "spaceBook">  SPACEBOOK </p>
                    {/* <marquee class="marq" behavior="scroll" direction="right">
                        <img src="src/ricksspaceship-removebg-preview_360.png" width="125" height="50" alt="smile" vspace="0%" />
                    </marquee> */}
                   </div>
            </div>
         </Link>
    </div>

  )
}
export default Root