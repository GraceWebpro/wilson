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

        const q = query(collRef, orderBy('createdAt', 'asc'))

        const fetchUsers = onSnapshot(q, snapshot => {
            setMusic(snapshot.docs.map(doc => {
                return {
                    id: doc.id,
                    title: doc.data().title,
                    image: doc.data().images,
                    homepage: doc.data().homepage,
                    month: doc.data().month,
                }
            }))
            fetchUsers();
        })
    },[])
  return (
    <div>
        <h1>Music</h1>
        <div  className='music-container'>
        {isMusics.map(isMusic => {
            return (
                <div key={isMusic.id} className='music'>
                    <a href={isMusic.homepage}>
                        <img src={isMusic.image} alt={isMusic.title} width={320} height={320} />
                    </a>
                    <h4><a href={isMusic.homepage}>{isMusic.title}</a></h4>
                    <p>{isMusic.month}</p>
                </div>   
            )
        })}
        </div>
    </div>
  )
}

export default Music