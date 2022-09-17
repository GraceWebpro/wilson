import React, { useState, useEffect } from 'react'
import { collection, onSnapshot, orderBy, query } from "@firebase/firestore";
import { db } from '../../config/firebase'
import { Link } from 'react-router-dom';
import useDocumentTitle from '../../useDocumentTitle';

const News = () => {
    useDocumentTitle('News | Michael O. Wilson')


    const [isNews, setNews] = useState([]);
    useEffect(() => {
        const collRef = collection(db, 'news')

        const q = query(collRef, orderBy('createdAt', 'desc'))

        const fetchNews = onSnapshot(q, snapshot => {
            setNews(snapshot.docs.map(doc => {
                return {
                    id: doc.id,
                    title: doc.data().title,
                    image: doc.data().images,
                    subTitle: doc.data().subTitle,
                    content: doc.data().content,
                    date: doc.data().date
                }
            }))
            fetchNews();
        })
    },[])
  return (
    <div>
        <h1>News</h1>
        {isNews.map(isNews => {
            return (
                <div key={isNews.id} className='news-container'>
                    <div className='news'>
                    <Link to={`/news/${isNews.id}`}>
                      <img src={isNews.image} alt={isNews.title} width={320} height={320} />
                    </Link>
                    <p>{isNews.date}</p>
                    <hr />
                    <Link to={`/news/${isNews.id}`}><h4>{isNews.title}</h4></Link>
                    <Link to={'/news/' + isNews.id}><button>Read More</button></Link>
                    </div>
                </div>
            )
        })}
        
    </div>
  )
}

export default News