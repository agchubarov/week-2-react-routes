import React from 'react'
import { Link } from 'react-router-dom'
import Header from './header'

const DashboardMain = () => {
  return (
    <div>
      <Header />
      <div className="flex items-center justify-center h-screen">
        <div className="bg-indigo-800 text-white font-bold rounded-lg border shadow-lg p-10">
          <div id="title">Main</div>
          <Link to="/dashboard/profile/cf0307ab-c980-41ce-87fb-dca85e379ba6">Go To Profile</Link>
          <Link to="/dashboard">Go To Root</Link>
        </div>
      </div>
    </div>
  )
}

DashboardMain.propTypes = {}

export default DashboardMain
