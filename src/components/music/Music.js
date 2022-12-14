import React, { useState, useEffect } from 'react'
import { collection, onSnapshot, orderBy, query} from "@firebase/firestore";
import { db } from '../../config/firebase'
import './music.css'
import useDocumentTitle from '../../useDocumentTitle';


const Music = () => {
    useDocumentTitle('Music | Michael O. Wilson')


    const [isMusics, setMusic] = useState([]);
    useEffect(() => {
        const collRef = collection(db, 'music')

        const q = query(collRef, orderBy('createdAt', 'desc'))

        const fetchMusic = onSnapshot(q, snapshot => {
            setMusic(snapshot.docs.map(doc => {
                return {
                    id: doc.id,
                    title: doc.data().title,
                    image: doc.data().images,
                    homepage: doc.data().homepage,
                    month: doc.data().month,
                }
            }))
            fetchMusic();
        })
    },[])
  return (
    <div>
        <h1>Music</h1>
        <div  className='music-container'>
        {isMusics.map(isMusic => {
            return (
                <div key={isMusic.id} className='music'>
                    <a className='img' href={isMusic.homepage}>
                        <img src={isMusic.image} alt={isMusic.title} width={350} height={320} />
                    </a>
                    <center>
                        <h4 className='latest'><a href={isMusic.homepage}>{isMusic.title}</a></h4>
                    </center>
                    <p>{isMusic.month}</p>
                </div>   
            )
        })}
        </div>
    </div>
  )
}

export default Music