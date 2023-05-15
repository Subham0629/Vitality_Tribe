import React from 'react'
import { Routes, Route } from "react-router-dom"
import Home from '../Pages/Home'
import Login from '../Pages/Login'
import Signup from '../Pages/Signup'
import PagenotFound from '../Pages/PagenotFound'
import DashboardPage from '../Pages/DashboardPage'
import Food from '../Pages/Food'
import Exercise from '../Pages/Exercise'
import PrivateRoute from '../Components/ProvateRoute'

import CommunityPage from '../Pages/CommunityPage'

import UserDetails from '../Pages/UserDetails'
import Guides from '../Pages/Guides'
import Compare from '../Pages/Compare'
import Blog from '../Pages/Blog'

const MainRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/register' element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path='/dashboard' element={
        <PrivateRoute>
          <DashboardPage />
        </PrivateRoute>} />
      <Route path='/food' element={<PrivateRoute><Food /></PrivateRoute>} />
      <Route path="/exercise" element={<PrivateRoute><Exercise /></PrivateRoute>} />
      <Route path="/community" element={<PrivateRoute><CommunityPage /></PrivateRoute>} />
      <Route path="/compare/:userID" element={<PrivateRoute><Compare/></PrivateRoute>} />
      <Route path="*" element={<PagenotFound />} />
      <Route path='/userdetails' element={<PrivateRoute><UserDetails/></PrivateRoute>}/>
      <Route path="/guides" element={<Guides/>}/>
      <Route path="/blogs" element={<Blog/>}/>
    </Routes>
  )
}

export default MainRoutes