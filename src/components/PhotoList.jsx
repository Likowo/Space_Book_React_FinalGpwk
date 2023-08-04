import React, { useContext } from 'react'
import { AppContext } from '../context/app_context'
const PhotoList = () => {

  let {galacticHome} = useContext(AppContext)

  let arr = []

  const grabSome = (howMany) => {
    for(let i = 0; i < howMany; i ++){
      arr.push( galacticHome[i] )
    }
    // console.log(arr)
  }

  grabSome(9)

  
  return (
    <div className="photoList">
      <div className="top">
        <p className='bold'>Photos</p>
        <p className='all'>See all photos</p>
      </div>

      <div className="pics">
        { arr.map((pic) => {
          return (
            <div className="container" style={{ backgroundImage:`url(${pic.url})` }}>
              {/* <img src={pic.url}/> */}
            </div>
          )
        }) }
      </div>
    </div>
  )
}
export default PhotoList