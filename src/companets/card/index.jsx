import { Btns, Container, Delete, Flex, Img, Price, Product, Row, Sertsa, } from '../card/style.js'
import React from 'react'
import img from '../../assets/img/del.jpg'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useStoreg } from '../../context/Storeg.jsx'

export default function Card({ product, setDep }) {
    const [store,setStore] = useStoreg()
    const addProduct = (item) => {
        setStore(!store )
        let res = JSON.parse(localStorage.getItem('loft'))

        if (res) {
            console.log(res)

            let result = res.filter(i => i.id == item.id);
            if (result.length > 0) {
                res.map(a => {
                    if (a.id == item.id) {
                        a.count = a.count + 1;
                    }
                    return a;
                })
                localStorage.setItem('loft', JSON.stringify(res))
            }
            else {
                item.count = 1;
                localStorage.setItem('loft', JSON.stringify([...res, item]))
            }
        }
        else{
            debugger
            item.count = 1;
            localStorage.setItem('loft',JSON.stringify([item
            ]))
        }
    }

    const navigate = useNavigate()
    const getId = (id) => {
        axios.get(`https://6427fbdc46fd35eb7c492488.mockapi.io/student/${id}`, {
            headers: {
                "Content-Type": "application/json"
            }
        }).then(res => putData(res.data))
            .catch(error => console.log(error))
    }
    const putData = (d) => {
        d.active = !d.active;
        axios.put(`https://6427fbdc46fd35eb7c492488.mockapi.io/student/${d.id}`, d, {
            headers: {
                "Content-Type": "application/json"
            }
        }).then(res => {
            setDep((data) => !data)
        })
            .catch(error => console.log(error))
    }

    const removeProduct = () => {
        axios.delete(`https://6427fbdc46fd35eb7c492488.mockapi.io/student/${product.id}`, {
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(data => {
                setDep((dep) => !dep)
            })
            .catch(error => console.log(error))
    }

    return (
        <Container>
            <Product>
                <Sertsa className={product?.active ? "favourite" : ""} onClick={() => getId(product?.id)}><i class="bi bi-heart-fill"></i></Sertsa>
                <Delete onClick={removeProduct}
                    src={img} />
                <Row>
                    <Img src={product?.url} onClick={() => navigate(`/tavar/${product?.id}`)} />
                </Row>
                <Product.Title>
                    {product?.name}</Product.Title>
                <Product.Text>{product?.title}</Product.Text>
                <Product.Price>{product?.price}$</Product.Price>
                <Product.Size>{product?.width}</Product.Size>
                <Flex>
                    <Price>
                        <Price.Title>{product?.depth}</Price.Title>
                        <Price.Text>{product?.height}</Price.Text>
                    </Price>
                    <Price>
                        <Price.Title>{product?.depth}</Price.Title>
                        <Price.Text>{product?.height}</Price.Text>
                    </Price>
                    <Price>
                        <Price.Title>{product?.depth}</Price.Title>
                        <Price.Text>{product?.height}</Price.Text>
                    </Price>
                </Flex>
                <Btns onClick={() => addProduct(product)} >Добавить в корзину</Btns>
            </Product>
        </Container>


    )
}
