import { collection, limit, onSnapshot, orderBy, query, startAfter } from '@firebase/firestore'
import React, { useEffect, useState } from 'react'
import { db } from './config/firebase'
import { Link } from 'react-router-dom';


const Pagination = () => {
    const [newsL, setNewsL] = useState([]);
    const [lastDoc, setLastDoc] = useState();
    const [loading, setLoading] = useState(false);
    const [isEmpty, setIsEmpty] = useState(false);

    const collRef = collection(db, 'news')


    useEffect(() => {
        const q = query(collRef, orderBy('createdAt', 'desc'), limit(3))

        const fetchNews = onSnapshot(q, snapshot => {
            updateState(snapshot)
        })
    }, [])

    const updateState = (snapshot) => {
        const isCollectionEmpty = snapshot.size === 0;
        if(!isCollectionEmpty) {
            const list = snapshot.docs.map((doc) => {
                return {
                    id: doc.id,
                    title: doc.data().title,
                    image: doc.data().images,
                    subTitle: doc.data().subTitle,
                    content: doc.data().content,
                    date: doc.data().date,
                   
                }
            });
            const lastDoc = snapshot.docs[snapshot.docs.length - 1];
            setNewsL(newsL => [ ...newsL, ...list]);
            setLastDoc(lastDoc);
        } else {
            setIsEmpty(true);
        }
        setLoading(false);
    }

    const fetchMore = () => {
        setLoading(true);
        const q = query(collRef, orderBy('createdAt', 'desc'), startAfter(lastDoc), limit(3))
        onSnapshot(q, snapshot => {
           updateState(snapshot)
        })

    }

    if(newsL.length ===0){
        return <h1>Loading...</h1>
    }

  return (
    <div>
        <div className='news-container'>
      {newsL.map(isNews => {
        return (
          <div key={isNews.id} className='news' >
              <p>{isNews.id}</p>
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
      {loading && <h3>Loading...</h3>}
      {!loading && !isEmpty && <button onClick={fetchMore}>More</button>}
      {isEmpty && <h3>There are no more data</h3>}
    </div>
  )
}

export default Pagination