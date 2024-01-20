'use client';
import { useRef, useState } from 'react';
import Image from 'next/image'
import classes from './image-picker.module.css'

export default function ImagePicker({ label, name }) {

  const imageInput = useRef();
  const [image, setImage] = useState();

  const handlePickClick = () => {
    imageInput.current.click();
  }
  const handleImage = (e) => {
    const file = e.target.files[0];
    if (!file) {
      setImage(null);
      return;
    }
    const fileReader = new FileReader();
    fileReader.onload = (url) => {
      setImage(fileReader.result)
    }
    fileReader.readAsDataURL(file);
  }
  return (
    <>
      <div className={classes.picker}>
        <label htmlFor={name}>{label}</label>
        <div className={classes.control} >

          <input type="file" id={name} accept='image/png ,image/jpeg' name={name}
            className={classes.input} ref={imageInput}
            onChange={(e) => { handleImage(e) }}
            multiple
            required
          />
          <button className={classes.button} type='button' onClick={handlePickClick}>Pick an Image</button>
          <div className={classes.preview}>
            {!image && <p>No image picked.</p>}
            {image && <Image src={image} alt='The image selected' fill />}
          </div>
        </div>
      </div>
    </>
  )
}