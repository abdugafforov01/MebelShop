import React from 'react'
import { Route, Routes } from 'react-router'
import Layout from './companets/Layout'
import Add from './companets/add'
import Contact from './companets/pages/contact'
import Onas from './companets/pages/onas'
import Tavar from './companets/pages/tavar'
import Katalog from './companets/pages/katalog'
import Blog from './companets/pages/blog'
import Corzina from './companets/pages/corzina'

export default function App() {
  return (
    <Routes>
        <Route path='/' element={<Layout/>}/>
        <Route path='/add' element={<Add/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/onas' element={<Onas/>}/>
        <Route path='/tavar/:id' element={<Tavar/>}/>
        <Route path='/katalog' element={<Katalog/>}/>
        <Route path='/blog' element={<Blog/>}/>
        <Route path='/corzina' element={<Corzina/>}/>
    </Routes>
  )
}
