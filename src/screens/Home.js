import React from 'react'
import './Home.css'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
      <div className="App">
        <header className="App-header">
          <h1>
            Welcome to Sign Talk 
          </h1>
          <img src="/images/SIGN.png" className="App-logo" alt="logo" />
          <Link to="/learn">
            <button id="button-go" href="https://google.fr">
              C'est parti! 
            </button>
          </Link>
        </header>
      </div>
    </>
  )
}


export default Home