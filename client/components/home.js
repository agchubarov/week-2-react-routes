import React from 'react'
import { Link } from 'react-router-dom'
import Header from './header'


const Home = () => {
  return (
    <div>
      <Header />
      <div className="flex items-center justify-center h-screen">
        <div className="bg-indigo-800 text-white font-bold rounded-lg border shadow-lg p-10">
          hello world dashboard 
          <Link to="/"> go to root </Link>  
          
          {/* add your routes here */}
        </div>
      </div>
    </div>
  )
}

Home.propTypes = {}

export default React.memo(Home)
