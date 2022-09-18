import React, { useState, useEffect } from 'react'
import { collection, onSnapshot, query, orderBy } from "@firebase/firestore";
import { db } from '../../config/firebase'
import './video.css'
import useDocumentTitle from '../../useDocumentTitle';

const Video = () => {
    useDocumentTitle('Video | Michael O. Wilson')

    const [movies, setMovies] = useState([]);
    useEffect(() => {
        const collRef = collection(db, 'movies')

        const q = query(collRef, orderBy('createdAt', 'desc'))

        const fetchVideos = onSnapshot(q, snapshot => {
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
        <h1>Video</h1>
        <div className='video-container'>
            {movies.map(movie => (
                <div key={movie.id}>
                    <div className='video'>
                        <iframe width="400" height="315" src={movie.data.url} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Video