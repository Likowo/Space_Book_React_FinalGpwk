import React, { useContext } from 'react'
import '../styles/Mobile.css'
import { Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'
import Header from '../components/Header'
import { AppContext } from '../context/app_context'
import CreatePost from '../components/CreatePost'
import Stories from '../components/Stories'
import Feed from '../components/Feed'
import Search from '../components/Search'

const Mobile = () => {


    let { characters, showSearch } = useContext(AppContext)
    // console.log(...characters)
  return (
    <div className="mobile">
      {/* 
      {characters.map((character) => {
        return <li>{character.name}</li>
      })}  */}
      <div className="topHalf">
        <Header parent="mobile"/>
        { showSearch && <Search />}
        <CreatePost parent="mobile"/>
      </div>
      <Stories parent="mobile"/>
      <Feed parent="mobile"/>

      <Routes>
        <Route /> 
        <Route /> 
      </Routes>

    </div>
  )
}

export default Mobile
