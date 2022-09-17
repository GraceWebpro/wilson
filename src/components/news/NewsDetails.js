import React, { useState } from 'react'
import { doc, getDoc, query, orderBy, limit, onSnapshot, startAfter, endBefore, limitToLast } from "@firebase/firestore";
import { db } from '../../config/firebase'
import { Link } from 'react-router-dom'
import useDocumentTitle from '../../useDocumentTitle';
import './news.css'

const NewsDetail = (props) => {
    useDocumentTitle('News | Michael O. Wilson')
    const [isNews, setNews] = useState([]);
    const [page, setPage] = useState(1);
    const id = props.match.params.id;

    const docRef = doc(db, 'news', id)
    getDoc(docRef)
    .then((doc) => {
      setNews({
        id: doc.id,
          title: doc.data().title,
          image: doc.data().images,
          subTitle: doc.data().subTitle,
          content: doc.data().content,
          date: doc.data().date
      })
      console.log(setNews);
    })
    .catch (err => {
    console.log(err.message)
    })

  const showNext = (id) => {
    if(isNews.length === 0) {
      alert('Thats all we have for now !')
    } else {
      const fetchNextData = () => {
        const q = query(docRef, orderBy('createdAt', 'desc'), startAfter(isNews.date), limit(1))
        onSnapshot(q, snapshot => {
          const items = [];
          snapshot.forEach((doc) => {
            items.push({
                id: doc.id,
                title: doc.data().title,
                image: doc.data().images,
                homepage: doc.data().homepage,
                month: doc.data().month,
            })
          })
          setNews(items);
          setPage(page + 1)
         
        })
      }
      fetchNextData();
    }
  }

  const showPrevious = (id) => {
    const fetchPreviousData = () => {
      const q = query(docRef, orderBy('createdAt', 'desc'), endBefore(isNews.date), limitToLast(1))
      onSnapshot(q, snapshot => {
        const items = [];
          snapshot.forEach(doc => {
            items.push({
                id: doc.id,
                title: doc.data().title,
                image: doc.data().images,
                homepage: doc.data().homepage,
                month: doc.data().month,
            })
          })
          setNews(items);
          setPage(page - 1)
      })
    }
    fetchPreviousData();
  }

  return (
    <div className='mews-details'>
      <div key={isNews.id}>
        <img className='img' src={isNews.image} alt={isNews.title} />
        <p>{isNews.date}</p>
        <hr style={{ width: '60%'}} />
        <h3>{isNews.title}</h3>
        <h5>{isNews.subTitle}</h5>
        <p>{isNews.content}</p>
        {
          //show previous button only when we have item
          page === 1 ? '' :
          <button onClick={() => showPrevious({ id: isNews[0] }) }>Previous</button>
        }
        <button><Link to='/news'>News</Link></button>
        {
          //show next page if we have item
          isNews.length < 1 ? '' :
          <button onClick={() => showNext({ id: isNews[isNews.length - 1] }) }>Next</button>
        }
      </div>
    </div>
   
  )
}

export default NewsDetail