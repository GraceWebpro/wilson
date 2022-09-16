import React from 'react'
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage'
import { collection, addDoc, serverTimestamp } from "@firebase/firestore";
import { storage, db } from '../../config/firebase'
import { useState } from 'react';

const UploadMusic = () => {
  const [progress, setProgress] = useState()
  const [userInfo, setUserInfo] = useState({
    title: '',
    homepage: '',
    month: '',
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

      const fileRef = ref(storage, `/images/${file.name}`)
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
            const collRef = collection(db, 'music')
            addDoc(collRef, {
              title: userInfo.title,
              images: downloadUrl,
              homepage: userInfo.homepage,
              month: userInfo.month,
              createdAt: serverTimestamp()

            })
            setUserInfo({
              ...userInfo,
              title: '',
              homepage: '',
              month: '',
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
            <div className='container2'>
                
              <h2>Upload Music</h2>
              <form onSubmit={onSubmit}>
                <input className='file' type='file' onChange={imageAsFile} />
                <input className='text' type='title' name='title' placeholder='title' value={userInfo.title} onChange={onChange} />
                <input className='text' type='url' name='homepage' placeholder='url' value={userInfo.homepage} onChange={onChange}  />
                <input className='month' type='month' name='month' value={userInfo.month} onChange={onChange}  />
                <input className='submit' type='submit' value='submit' />
              </form>
              <p>{ progress }</p>
            </div>
        </center>
    </div>
    
  )
}

export default UploadMusic