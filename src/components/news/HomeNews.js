import React, { useState, useEffect } from 'react'
import { collection, onSnapshot, limit, orderBy, query } from "@firebase/firestore";
import { db } from '../../config/firebase'
import { Link } from 'react-router-dom';
import './news.css'

const HomeNews = () => {

    const [isNews, setNews] = useState([]);
    useEffect(() => {
        const collRef = collection(db, 'news')

        const q = query(collRef, orderBy('createdAt', 'desc'), limit(3))

        const fetchNews = onSnapshot(q, snapshot => {
            setNews(snapshot.docs.map(doc => {
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
        <h5 style={{ marginTop: '20px' }}>News</h5>
      <div className='news-container'>
      {isNews.map(isNews => {
        return (
          <div key={isNews.id} className='news' >
            <Link className='img' to={`/news/${isNews.id}`}>
              <img src={isNews.image} alt={isNews.title} width={350} height={320} />
            </Link>
            <div className='spacer'></div>
            <p>{isNews.date}</p>
            <div className='spacer'></div>
            <center><hr style={{ width: '60%'}} /></center>
            <div className='spacer'></div>
            <Link to={`/news/${isNews.id}`}><h4>{isNews.title}</h4></Link>
            <Link to={'/news/' + isNews.id}><button className='submit'>Read More</button></Link>
          </div>
        )
      })}
      </div>
        <center><Link to='/news'><button className='h-submit'>View all news article</button></Link></center>
    </div>
  )
}

export default HomeNews