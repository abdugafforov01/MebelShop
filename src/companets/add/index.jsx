import axios from 'axios'
import React, { useState, useRef } from 'react'
import { useNavigate } from 'react-router'
import { useEffect } from 'react'
import { PulseLoader } from 'react-spinners'
import { Load } from '../Layout/style'



export default function Add() {
    const [loading, setLoading] = useState(false)
    const [dep, setDep] = useState(false)
    const navigate = useNavigate()
    const url = useRef()
    const name = useRef()
    const title = useRef()
    const price = useRef()
    const width = useRef()
    const depth = useRef()
    const heigth = useRef()

    const getData = () => {
    const product = {
            url: url.current.value,
            name: name.current.value,
            title: title.current.value,
            price: price.current.value,
            width: width.current.value,
            depth: depth.current.value,
            heigth: heigth.current.value,

        }
        if (product.url && product.title && product.price && product.width && product.depth && product.heigth) {
            axios.post('https://6427fbdc46fd35eb7c492488.mockapi.io/student', product, {
                headers: {
                    "Content-Type": "application/json"
                }
            })

                .then(data => {
                    setDep(!dep);
                    url.current.value = ""
                    name.current.value = ""
                    title.current.value = ""
                    price.current.value = ""
                    width.current.value = ""
                    depth.current.value = ""
                    heigth.current.value = ""

                })
                .then(res=>{
                    navigate('/')
                },)
        }
        else {
            alert('Formalar toldirilmagan')
        }

    }
    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
          setLoading(false)
        }, 1000)
      }, [])

    return (
       <>
       {
        loading?
        <Load><PulseLoader/></Load>
        :
        <div className=' d-flex justify-content-center pt-4 content '>
        <div className='my-5'>
            <div className='text-center fs-2 fw-bold text-info'>New Product</div>
            <div className='mt-3'>
                <input ref={url} className='form-control w' type="text" placeholder='Img url' />
            </div>
            <div className=' mt-4'>
                <input ref={name} className='form-control' type="text" placeholder='Name' />
            </div>
            <div className=' mt-4'>
                <input ref={title} className='form-control' type="text" placeholder='Title' />
            </div>
            <div className=' mt-4'>
                <input ref={price} className='form-control' type="number" placeholder='Price' />
            </div>
            <div className=' mt-4'>
                <input ref={width} className='form-control' type="number" placeholder='Width' />
            </div>
            <div className=' mt-4'>
                <input ref={depth} className='form-control' type="number" placeholder='Depth' />
            </div>
            <div className=' mt-4'>
                <input ref={heigth} className='form-control' type="number" placeholder='Heigth' />
            </div>
            <div className=' mt-4'>
                <button onClick={getData} className='btn btn-primary text-white btns'>Add product</button>
            </div>
        </div>

    </div>
       }
       </>
    )
}
