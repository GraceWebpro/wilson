import React, { useState, useEffect } from 'react'
import { collection, onSnapshot, orderBy, query } from "@firebase/firestore";
import { db } from '../../config/firebase'
import { Link } from 'react-router-dom';
import './news.css'
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
      <div className='news-container'>
      {isNews.map(isNews => {
        return (
          <div key={isNews.id} className='news' >
            <Link className='img' to={`/news/${isNews.id}`}>
              <img src={isNews.image} alt={isNews.title} width={320} height={320} />
            </Link>
            <p>{isNews.date}</p>
            <hr style={{ width: '60%'}} />
            <Link to={`/news/${isNews.id}`}><h4>{isNews.title}</h4></Link>
            <Link to={'/news/' + isNews.id}><button>Read More</button></Link>
          </div>
        )
      })}
      </div> 
    </div>
  )
}

export default News