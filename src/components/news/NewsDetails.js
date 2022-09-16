import React, { useState } from 'react'
import { doc, getDoc } from "@firebase/firestore";
import { db } from '../../config/firebase'
import useDocumentTitle from '../../useDocumentTitle';

const NewsDetail = (props) => {
    useDocumentTitle('News | Michael O. Wilson')
    const [isNews, setNews] = useState([])
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
      })
      console.log(setNews);
    })
    .catch (err => {
    console.log(err.message)
    })

  return (
    <div>
        <div key={isNews.id}>
            <img src={isNews.image} alt={isNews.title} />
            <p>{isNews.date}</p>
            <h3>{isNews.title}</h3>
            <h5>{isNews.subTitle}</h5>
            <p>{isNews.content}</p>
        </div>
    </div>
  )
}

export default NewsDetail