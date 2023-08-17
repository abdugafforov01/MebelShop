import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { PulseLoader } from 'react-spinners'
import Form from '../card/form'
import Carusel from '../carusel'
import Foter from '../mail'
import Foteer from '../menyu'
import Navbar from '../navbar'
import { Container, Load } from './style'


export default function Layout() {
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 1000)
  }, [])
  return (
    <>
      {
        loading ?
          <Load><PulseLoader /></Load>
          :
          <Container>
            <Navbar />
            <Foteer/>
            <Carusel />
            <Form />
            <Foter/>
          </Container>
      }
    </>

  )
}
