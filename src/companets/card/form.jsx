import React from 'react'
import{ useEffect } from 'react'
import { useState } from 'react'
import Card from '.'
import { Display } from './style'
import axios from 'axios';
import { useActive } from '../../context/Active'
 
export default function Form() {
    const [data, setData] = useState([])
    const [dep, setDep] = useState(false)
    const [active,setActive] = useActive()
    useEffect(() => {
        axios.get('https://6427fbdc46fd35eb7c492488.mockapi.io/student', {
          headers: {
            "Content-Type": "application/json"
          }
        })
          .then(data => {
            setData(data.data)
            setActive(!active)
          }
          )
          .catch(error=>(error,'xato'))
      }, [ dep])
    
  return (
    
    <Display>
    {
        data.map(item => <Card setDep={setDep} key={item.id} product={item} />)
    }
  </Display>
  )
}
