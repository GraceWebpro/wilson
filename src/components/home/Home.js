import React from 'react'
import useDocumentTitle from '../../useDocumentTitle'
import HomeMusic from '../music/HomeMusic'
import HomeVideo from '../video/HomeVideo'
import HomeNews from '../news/HomeNews'

import './home.css'


const Home = () => {
  useDocumentTitle('Home | Michael O. Wilson')

  return (
    <div>
        <HomeVideo />
        <HomeMusic />
        <HomeNews />
    </div>
  )
}

export default Home