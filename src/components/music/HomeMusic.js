import React, { useState, useEffect } from 'react'
import { collection, onSnapshot, limit, orderBy, query } from "@firebase/firestore";
import { db } from '../../config/firebase'
import { Link } from 'react-router-dom';
import './music.css'

const HomeMusic = () => {

    const [isMusics, setMusic] = useState([]);
    useEffect(() => {
        const collRef = collection(db, 'music')

        const q = query(collRef, orderBy('createdAt', 'desc'), limit(3))

        const fetchNews = onSnapshot(q, snapshot => {
            setMusic(snapshot.docs.map(doc => {
                return {
                    id: doc.id,
                    title: doc.data().title,
                    image: doc.data().images,
                    subTitle: doc.data().subTitle,
                    content: doc.data().content,
                    date: doc.data().date,
                   
                }
            }))
            fetchNews();
        })
    },[])
  return (
    <div>
        <h5>Music</h5>
        <div  className='music-container'>
        {isMusics.map(isMusic => {
            return (
                <div key={isMusic.id} className='music'>
                    <a className='img' href={isMusic.homepage}>
                        <img src={isMusic.image} alt={isMusic.title} width={320} height={320} />
                    </a>
                    <h4><a href={isMusic.homepage}>{isMusic.title}</a></h4>
                    <p>{isMusic.month}</p>
                </div>   
            )
        })}
        <Link to='/music'><button>Music list</button></Link>
        </div>
    </div>
  )
}

export default HomeMusic