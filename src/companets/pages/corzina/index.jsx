import React from 'react'
import { Container, Bag, Imag, Telefon, Content, Dastavka, Form, Glavni, Icon, Inpu, Kontakt, Logo, Menu, Onas, Phone, Sertsa, Menyu, Row, } from './style'
import { Link } from 'react-router-dom'
import logo from '../../../assets/img/LOGO.png'
import search from '../../../assets/img/search.png'
import phone from '../../../assets/img/phone.png'
import dastavka from '../../../assets/img/delivery.png'
import { useState } from 'react'
import { useEffect } from 'react'
import { useActive } from '../../../context/Active'
import axios from 'axios'
import Foteer from '../../menyu'
import List from '../../list'
import { PulseLoader } from 'react-spinners'
import Foter from '../../mail'
import { useStoreg } from '../../../context/Storeg'
import { Load } from '../../Layout/style'
export default function Corzina() {
    const [data, setData] = useState([])
    const [active, setActive] = useActive()
    const [local, setLocal] = useState(false)
    const [store, setStore] = useStoreg()
    const [counter, setCounter] = useState([])
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 1000)
    }, [])
    useEffect(() => {
        const d = JSON.parse(localStorage.getItem('loft'))
        if (d) {
            setCounter([...d])
        }
        else {
            setCounter([])
        }
    }, [store])
    useEffect(() => {
        axios.get('https://6427fbdc46fd35eb7c492488.mockapi.io/student', {
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(res => {
                let active = res.data.filter(res => res.active == true);
                setData(active)
            }
            )
            .catch(error => (error, 'xato'))
    }, [active])
    useEffect(() => {
        let res = JSON.parse(localStorage.getItem('loft'));
        if (res) {
            setLocal(true)
        }
        else {
            setLocal(false)
        }
    }, [store])
    return (
        <>
            {
                loading ?
                    <Load><PulseLoader /></Load>
                    :

                    <div>
                        <Container>
                            <Content>
                                <Link to='/'> <Logo src={logo} /></Link>
                                <Menu>
                                    <Link to='/'><Glavni>Главная</Glavni></Link>
                                    <Link to="/onas"><Onas>О нас</Onas></Link>
                                    <Link to='/contact'><Kontakt>Контакты</Kontakt></Link>
                                </Menu>
                                <Form>
                                    <Icon src={search} />
                                    <Inpu />
                                </Form>
                                <Telefon>
                                    <Phone>
                                        <Phone.Img src={phone} />
                                        <Phone.Title href='tel:8 (964) 89 99 119'>8 (964) 89 99 119</Phone.Title>
                                    </Phone>
                                    <Dastavka>
                                        <Dastavka.Img src={dastavka} />
                                        <Dastavka.Title href="#">Доставка</Dastavka.Title>
                                    </Dastavka>
                                </Telefon>
                                <Menyu>
                                    <Sertsa className={data.length > 0 ? "favourite" : ""}><i class="bi bi-heart-fill hart"></i></Sertsa>
                                    <Bag><i class="bi bi-bell-fill lock"></i></Bag>
                                    {
                                        local && <Imag />
                                    }
                                    <Link to='/blog'><i class="bi bi-person-circle profil"></i></Link>
                                </Menyu>
                            </Content>
                            <Foteer />
                            <Row>
                                <Row.Title>Ваша корзина</Row.Title>
                                <Row.Title>{counter.length}</Row.Title>
                            </Row>
                            {
                                counter.map(item => <List key={item.id} value={item} />)
                            }
                        </Container>
                        <Foter />
                    </div>
            }
        </>

    )
}
