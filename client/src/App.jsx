import React from 'react'

import SeatLayout from './pages/SeatLayout'
import Navbar from './components/Navbar'
import Movies from './pages/Movies'
import MyBookings from './pages/MyBookings'

import { Routes, Route, useLocation } from 'react-router-dom'

import Home from './pages/Home'
import MovieDetails from "./pages/MovieDetails";
import Favourite from './pages/Favourite'

import { Toaster } from 'react-hot-toast'
import Footer from './components/Footer'



const App = () => {


  const location = useLocation();


  // Hide Navbar/Footer on admin routes
  const isAdminRoute = location.pathname.startsWith('/admin');


  // Hide Footer only on Movie Details page
  // Example: /movies/324544
  const hideFooter = location.pathname.startsWith('/movies/');



  return (
    <>

      <Toaster/>


      {/* Navbar hidden for admin route */}
      {!isAdminRoute && <Navbar/>}



      <Routes>

        <Route 
          path='/' 
          element={<Home/>}
        />


        <Route 
          path='/movies' 
          element={<Movies/>}
        />


        {/* Movie Details page */}
        <Route 
          path='/movies/:id' 
          element={<MovieDetails/>}
        />


        {/* Seat Selection page */}
        <Route 
          path='/movies/:id/:date' 
          element={<SeatLayout/>}
        />



        <Route 
          path='/mybookings' 
          element={<MyBookings/>}
        />


        <Route 
          path='/favourite' 
          element={<Favourite/>}
        />


      </Routes>

          


      {/* Footer hidden on admin and MovieDetails page */}
      {!isAdminRoute && !hideFooter && <Footer/>}



    </>
  )
}

export default App