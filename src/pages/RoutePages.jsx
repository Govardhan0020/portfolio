import React from 'react'
import { HashRouter, Route, Routes } from 'react-router-dom'
import { Home } from './Home'
import { About } from "./About"
import { Contact } from "./Contact"
import { Projects } from "./Projects"
import { Navbar } from '../components/Navbar'

export const RoutePages = () => {
  return (
    <>
            <Navbar />
            <Routes>
                <Route index path="/" element={ <Home /> } />
                <Route exact path="/about" element={   <About />   } />
                <Route exact  path="/contact" element={ <Contact /> } />
                <Route exact path="/projects" element={ <Projects /> } />
                 <Route exact path='*' element={  <h1>  Page not Found </h1>  }  />
            </Routes>


    </>
  )
}
