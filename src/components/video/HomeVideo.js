import React, { useState } from 'react'
import { doc, getDoc } from "@firebase/firestore";
import { db } from '../../config/firebase'
import './video.css'
import useDocumentTitle from '../../useDocumentTitle';

const HomeVideo = () => {
    useDocumentTitle('Video | Michael O. Wilson')
    const [movies, setMovies] = useState([]);


    const docRef = doc(db, 'news', 'RzKgOEdO5DNPnw8Ew696')
    getDoc(docRef)
    .then((doc) => {
      setMovies({
        id: doc.id,
        data: doc.data()
      })
      console.log(setMovies);
    })
    .catch (err => {
    console.log(err.message)
    })

    
  return (
    <div>
      <h1>Video</h1>
      <div className='home-video-container'>
        <div key={movies.id}>
          <div className='video'>
            <iframe width="400" height="315" src={movies.url} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </div>
        </div>  
      </div> 
    </div>
  )
}

export default HomeVideo