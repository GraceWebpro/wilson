import React from 'react'
import useDocumentTitle from '../../useDocumentTitle'
import HomeNews from '../news/HomeNews'
import './home.css'


const Home = () => {
  useDocumentTitle('Home | Michael O. Wilson')

  return (
    <div>
        
        <h4>Home</h4>
        <HomeNews />
    </div>
  )
}

export default Home