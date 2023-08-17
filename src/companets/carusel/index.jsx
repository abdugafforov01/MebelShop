import React, { useEffect, useState } from 'react'
import mebell from '../../assets/img/mebel.png'
import { Btn, Btns, Container, Content, Contex, Flex, Folder, Loft, Product } from './style'
import { Carousel } from 'antd';
import { NavLink,Link } from 'react-router-dom';


export default function Carusel() {
    const [open, setOpen] = useState(false)
    const toggle = () => setOpen(!open)

    return (
        <>
            <Container>
                <Carousel autoplay>
                    <Folder src={mebell} />
                    <Folder src={mebell} />
                    <Folder src={mebell} />
                    <Folder src={mebell} />
                </Carousel>
                <Content>
                    <Loft>loft мебель</Loft>
                    <Contex>Современная и удобная мебель в Анапе</Contex>
                    <Link to='/katalog'><Btns>СМОТРЕТЬ КАТАЛОГ</Btns></Link>
                </Content>
                <Flex>
                    <Product>Хиты продаж</Product>
                    <NavLink to='/add'>
                        <Btn>Add Product</Btn>
                    </NavLink>
                </Flex>
            </Container>
        </>


    )
}
