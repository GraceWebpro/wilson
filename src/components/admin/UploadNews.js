import React from 'react'
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage'
import { collection, addDoc, serverTimestamp } from "@firebase/firestore";
import { storage, db } from '../../config/firebase'
import { useState } from 'react';

const UploadNews = () => {
  const [progress, setProgress] = useState()
  const [userInfo, setUserInfo] = useState({
    title: '',
    subTitle: '',
    content: '',
    date: '',
  })


  const onChange = (e) =>{
    setUserInfo({
      ...userInfo,
      [e.target.name]:e.target.value
    });
  }

  

  const [isFile, setFile] = useState(null);
  const imageAsFile = (e) => {
    setFile(e.target.files[0]);
  }

  const onSubmit = async (e) => {
    try {
      e.preventDefault()
      let file = isFile;

      const fileRef = ref(storage, `/news/${file.name}`)
      const uploadTask = uploadBytesResumable(fileRef, file)

      uploadTask.on(
        'state_changed',
        (snap) => {
          let percent = (snap.bytesTransferred / snap.totalBytes) * 100;
          setProgress(percent);
          console.log('Upload id' + percent + 'done');
        }, (err) => {
          console.log(err)
        }, () => {
          //download url
          getDownloadURL(uploadTask.snapshot.ref).then((downloadUrl) => {
            console.log('file available at', downloadUrl);
            const collRef = collection(db, 'news')
            addDoc(collRef, {
              title: userInfo.title,
              images: downloadUrl,
              subTitle: userInfo.subTitle,
              content: userInfo.content,
              date: userInfo.date,
              createdAt: serverTimestamp()
            })
            setUserInfo({
              ...userInfo,
              title: '',
              subTitle: '',
              content: '',
              date: '',
            })
            setFile(isFile);
          })
        }
      )
    } catch(error) { throw error}
  }
  return (
    <div>
        <center>
            <div className='new-container'>
                
              <h2>Upload Music</h2>
              <form onSubmit={onSubmit}>
                <input className='file' type='file' onChange={imageAsFile} />
                <input className='text' type='title' name='title' placeholder='title' value={userInfo.title} onChange={onChange} />
                <input className='text' type='subTitle' name='subTitle' placeholder='sub-title' value={userInfo.subTitle} onChange={onChange}  />
                <input className='month' type='date' name='date' value={userInfo.date} onChange={onChange}  />
                <textarea type='content' name='content' value={userInfo.content} onChange={onChange}  />
                <input className='submit' type='submit' value='submit' />
              </form>
              <p>{ progress }</p>
            </div>
        </center>
    </div>
    
  )
}

export default UploadNews