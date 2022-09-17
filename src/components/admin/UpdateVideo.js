import React, { useState, useEffect } from 'react'
import { collection, getDocs, addDoc, onSnapshot, serverTimestamp } from "@firebase/firestore";
import { db } from '../../config/firebase'


const UpdateVideo = () => {
    const [url, setUrl] = useState('')


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
        fetchVideos()
    },[])

    useEffect(() => {
        getMovies()
    }, [])

    function getMovies() {
        const moviesCollRef = collection(db, 'video')
        getDocs(moviesCollRef)
        .then(response => {
            const movs = response.docs.map(doc => ({
                id: doc.id,
                data: doc.data(),
            }))
            setMovies(movs)
        }).catch(error => console.log(error.message))
    }

    const uploadVideo = async (e) => {
        e.preventDefault()
        if ( url === '' ){
            return
        }

        const movieCollRef = collection(db, 'video')
        addDoc(movieCollRef, {
            url,
            createdAt: serverTimestamp()
        }).then(response => {
            console.log(response)
        }).catch(error => {
            console.log(error.message)
            alert('video cant be saved')
        })
        alert('Video is saved successfully!')
    }

    return (
        <div>
            <center>
            <div className='video-container2'>
                
              <h2>Upload Video</h2>
              <button onClick={() => getMovies()}>Refresh Movies</button>

              <form onSubmit={uploadVideo}>
                <input className='url' type='url' name='homepage' placeholder='Video url' value={url} onChange={e => setUrl(e.target.value)}  />
                
                <input className='submit' type='submit' value='submit' />
              </form>
            </div>
            </center>
        </div>
    )
}

export default UpdateVideo;