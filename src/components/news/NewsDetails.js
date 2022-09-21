import React, { useState } from 'react'
import { doc, getDoc } from "@firebase/firestore";
import { db } from '../../config/firebase'
import useDocumentTitle from '../../useDocumentTitle';
import './news.css'

const NewsDetail = (props) => {

  useDocumentTitle('News | Michael O. Wilson')
  const [isNews, setNews] = useState([]);

  const id = props.match.params.id;

  const docRef = doc(db, 'news', id)
  getDoc(docRef)
  .then((doc) => {
    const itsId = ({
      id: doc.id,
      title: doc.data().title,
      image: doc.data().images,
      subTitle: doc.data().subTitle,
      content: doc.data().content,
      date: doc.data().date
    })
    setNews(itsId)
    console.log(setNews);
  })
  .catch (err => {
  console.log(err.message)
  })

  
  return (
    <div className='mews-details'>
      <center>
        <div key={isNews.id}>
          <img className='img' src={isNews.image} width={300} height={320} alt={isNews.title} />
          <p>{isNews.date}</p>
          <center><hr style={{ width: '60%'}} /></center>
          <h3>{isNews.title}</h3>
          <h5>{isNews.subTitle}</h5>
          <p>{isNews.content}</p>
        </div>
      </center>
    </div>
   
  )
}

export default NewsDetail