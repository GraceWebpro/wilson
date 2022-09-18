import React, { useState, useEffect } from 'react'
import { collection, onSnapshot } from "@firebase/firestore";
import { db } from '../../config/firebase'
import './video.css'
import useDocumentTitle from '../../useDocumentTitle';

const Video = () => {
    useDocumentTitle('Video | Michael O. Wilson')

    const [movies, setMovies] = useState([]);
    useEffect(() => {
        const collRef = collection(db, 'video')

        const fetchVideos = onSnapshot(collRef, snapshot => {
            setMovies(snapshot.docs.map(doc => {
                return {
                    id: doc.id,
                    data: doc.data(),
                }
            }))

        })
    },[])
  return (
    <div>
        <center><p className='latest'>Latest Release</p></center>
        {movies.map(movie => (
            <div key={movie.id}>
                 <div className='video'>
                    <center><iframe className='iframe-2' width="600" height="500" src={movie.data.url} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe></center>
                </div>
            </div>
        ))}
    </div>
  )
}

export default Video