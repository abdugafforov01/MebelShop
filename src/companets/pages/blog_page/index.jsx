import React from 'react'
import { Box, Btn, Container, Content, Display, Flax, Flex, Formu, Inpo, Inpu, Inpum, Prav, Tovar } from './style'
import cash from '../../../assets/img/cashback.png'
import vecto from '../../../assets/img/Vector (3).png'
import vector from '../../../assets/img/Vector (2).png'
import mebel from '../../../assets/img/image 2 (1).png'
import mebe from '../../../assets/img/image 3 (1).png'
import meb from '../../../assets/img/image 4.png'
import me from '../../../assets/img/image 5.png'
import { Form } from 'antd'
import Foter from '../../mail'

export default function Blug() {
    return (
        <>
            <Container>
                <Container.Title>Бонусная программа</Container.Title>
                <Prav>
                    <Prav.Title>У вас 0 бонусных баллов</Prav.Title>
                    <Prav.Text>Правила бонусной программы</Prav.Text>
                </Prav>
            </Container>
            <Box>
                <Box.Img src={cash} />
                <Box.Title>Возвращаем до 7% на бонусный счет</Box.Title>
                <Box.Img src={vector} />
                <Box.Title>1 бонус = 1 рубль</Box.Title>
                <Box.Img src={vecto} />
                <Box.Title>Оплачивайте бонусами до 20% от покупки</Box.Title>
            </Box>
            <Flex.Title>Личные данные</Flex.Title>
            <Display>
                <Flax>
                    <Flex>
                        <Form>
                            <Inpu.Text>Имя</Inpu.Text>
                            <Inpu placeholder='Дмитрий' />
                        </Form>
                        <Form>
                            <Inpu.Text>E-mail</Inpu.Text>
                            <Inpu placeholder='morlibae@gmail.com' />
                        </Form>
                    </Flex>
                    <Flex>
                        <Form>
                            <Inpu.Text>Фамилия</Inpu.Text>
                            <Inpu placeholder='Галькевич' />
                        </Form>
                        <Form>
                            <Inpu.Text>Номер телефона</Inpu.Text>
                            <Inpu placeholder='+7 (901) 784-65-45' />
                        </Form>
                    </Flex>
                    <Formu>
                        <Inpu.Text>Город</Inpu.Text>
                        <Inpu placeholder='Москва' />
                    </Formu>
                    <Formu>
                        <Inpu.Text>Улица</Inpu.Text>
                        <Inpum placeholder='Святоозерская' />
                    </Formu>
                    <Flex>
                        <Form>
                            <Inpu.Text>Дом/Корпус</Inpu.Text>
                            <Inpo placeholder='16/1' />
                        </Form>
                        <Form>
                            <Inpu.Text>Квартира</Inpu.Text>
                            <Inpo placeholder='29' />
                        </Form>
                    </Flex>
                    <Btn>Изменить</Btn>
                </Flax>
                <Content>
                    <Content.Title>Мои заказы</Content.Title>
                    <Tovar>
                        <table className='table me-5 tablee'>
                            <thead>
                                <tr>
                                    <th>Товар</th>
                                    <th>Цена</th>
                                    <th>Дата</th>
                                    <th>Статус</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><img src={mebel}></img>Кускен Navy Blue</td>
                                    <td>16990</td>
                                    <td>01.05.2020</td>
                                    <td>Ожидается</td>
                                </tr>
                                <tr>
                                    <td><img src={mebe} />Стелла Дуб Сонома</td>
                                    <td>28490</td>
                                    <td>01.05.2020</td>
                                    <td>Оплачено 50%</td>
                                </tr>
                                <tr>
                                    <td><img src={meb} />Вилли Pink</td>
                                    <td>21990</td>
                                    <td>01.05.2020</td>
                                    <td>Доставлено</td>
                                </tr>
                                <tr>
                                    <td><img src={me} />Шерона Barhat Grey</td>
                                    <td>21990</td>
                                    <td>01.05.2020</td>
                                    <td>Отменен</td>
                                </tr>
                            </tbody>
                        </table>
                    </Tovar>
                </Content>
            </Display>
            <Foter/>
        </>

    )
}
