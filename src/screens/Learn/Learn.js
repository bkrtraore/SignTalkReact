import React, { useEffect, useState } from 'react'
import './Learn.css'
import axios from 'axios'

const Learn = () => {
  const [word, setWord] = useState({})

  const getData = async () => {
    try {
      const {data}  = await axios.get(`api/v01/dictionary`)
      setWord(data)

    } catch (err) {
      console.error(err);
    }
  }


  useEffect(() => {
    getData()
  }, [])
  

  return (
    <>
      <div className='container'>
        <img src={word.url} alt={word.name} />
        <h1>{word.name}</h1>
        <button onClick={getData}>Generate</button>
      </div>
    </>
  );
}

export default Learn