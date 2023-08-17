import React from 'react'
import axios from 'axios'
import { Brela, Content, Display, Flex, Harakter, Mebel, Oplata, Page, Product, Raz, Sertsa, Slayd, Svet, Velvet, Yashi } from './style'
import { Rate } from 'antd';
import { ColorPicker } from 'antd';
import { useState } from 'react'
import Form from '../../card/form'
import Foter from '../../mail'
import { useParams } from 'react-router'
import { useEffect } from 'react';
import { Link } from 'react-router-dom' 


export default function Tovar() {
    const params = useParams();
    const [data, setData] = useState({})
    useEffect(() => {
        axios.get(`https://6427fbdc46fd35eb7c492488.mockapi.io/student/${params.id}`, {
            headers: {
                "Content-Type": "application/json"
            }
        }).then(res => setData({ ...res.data }))
            .catch(error => console.log(error))
    }, [params.id])
    return (
        <>
            <Page>
                <Link to='/'> <Page.Title>Главная</Page.Title></Link>
                <Page.Title>/</Page.Title>
                <Page.Title>Гостинные</Page.Title>
                <Page.Title>/</Page.Title>
                <Page.Title>Мягкая мебель</Page.Title>
                <Page.Title>/</Page.Title>
                <Page.Title>Диваны</Page.Title>
            </Page>
            <Content>
                <Mebel>
                    <Product src={data?.url} />
                </Mebel>
                <Velvet>
                    <Rate />
                    <Velvet.Title>{data?.name}</Velvet.Title>
                    <Velvet.Text>{data?.title}</Velvet.Text>
                    <Flex>
                        <Flex.Title>{data?.price}$</Flex.Title>
                        <Flex.Btn>Купить</Flex.Btn>
                        <Sertsa className={data?.length>0?"favourite":""}><i class="bi bi-heart-fill hart"></i></Sertsa>
                        <Flex.Text>Добавить в желаемое</Flex.Text>
                    </Flex>
                    <Display>
                        <Display.Title>Цвет</Display.Title>
                        <Display.Text>Количество</Display.Text>
                        <Display.Info>Размер (Д × Ш × В)</Display.Info>
                    </Display>
                    <Svet>
                        <ColorPicker
                            presets={[
                                {
                                    label: 'Recommended',
                                    colors: [
                                        '#000000',
                                        '#000000E0',
                                        '#000000A6',
                                        '#00000073',
                                        '#00000040',
                                        '#00000026',
                                        '#0000001A',
                                        '#00000012',
                                        '#0000000A',
                                        '#00000005',
                                        '#F5222D',
                                        '#FA8C16',
                                        '#FADB14',
                                        '#8BBB11',
                                        '#52C41A',
                                        '#13A8A8',
                                        '#1677FF',
                                        '#2F54EB',
                                        '#722ED1',
                                        '#EB2F96',
                                        '#F5222D4D',
                                        '#FA8C164D',
                                        '#FADB144D',
                                        '#8BBB114D',
                                        '#52C41A4D',
                                        '#13A8A84D',
                                        '#1677FF4D',
                                        '#2F54EB4D',
                                        '#722ED14D',
                                        '#EB2F964D',
                                    ],
                                },
                                {
                                    label: 'Recent',
                                    colors: [],
                                },
                            ]}
                        />
                        <Svet.Text>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                            <option>6</option>
                            <option>7</option>
                            <option>8</option>
                            <option>9</option>
                        </Svet.Text>
                        <Svet.Title>
                            <option>{data?.width} СМ × {data?.depth} СМ × {data?.heigth} СМ</option>
                        </Svet.Title>
                    </Svet>
                    <Brela>
                        <Brela.Title>Описание</Brela.Title>
                        <Brela.Text>Лаконичные линии и простые формы, безупречный стиль и индивидуальность – все это диван «Динс». Сдержанный скандинавский дизайн украсит любую современную обстановку. Элегантность, комфорт и функциональность, собранные воедино – «Динс» просто создан для размеренного отдыха в кругу семьи или компании друзей!</Brela.Text>
                    </Brela>
                </Velvet>
            </Content>
            <Harakter>
                <Harakter.Title>Характеристики</Harakter.Title>
                <Harakter.Text>Отзывы</Harakter.Text>
                <Harakter.Info>Доставка и оплата</Harakter.Info>
            </Harakter>
            <Oplata>
                <Raz>
                    <Raz.Title>Размер....................................................................218 × 95 × 90 (Дл. × Шир. × Выс.)</Raz.Title>
                    <Raz.Title>Спальное место....................................................195 × 144 × 44 (Дл. × Шир. × Выс.)</Raz.Title>
                    <Raz.Title>Посадочное место................................................50 × 44 (Глуб. × Выс.)</Raz.Title>
                    <Raz.Title>Каркас.....................................................................массив, фанера, ДВП, пружинная змейка</Raz.Title>
                    <Raz.Title>Механизм................................................................пантограф</Raz.Title>
                    <Raz.Title>Материал ножек....................................................массив</Raz.Title>
                    <Raz.Title>Наполнение подушек...........................................крошка ППУ, холлофайбер</Raz.Title>
                </Raz>
                <Yashi>
                    <Yashi.Title>Бельевой ящик.........................................есть</Yashi.Title>
                    <Yashi.Title>Зарядное устройство USB.........................................нет</Yashi.Title>
                    <Yashi.Title>Зарядное устройство USB.........................................нет</Yashi.Title>
                    <Yashi.Title>Съемный чехол.........................................нет</Yashi.Title>
                    <Yashi.Title>Декоративные подушки.........................................есть</Yashi.Title>
                    <Yashi.Title>Вариант доставки.........................................Россия</Yashi.Title>
                </Yashi>
            </Oplata>
            <Oplata.Title>Хиты продаж</Oplata.Title>
            <Form />
            <Foter />
        </>

    )
}
