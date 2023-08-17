import React from 'react'
import { Content, Bag, Telefon, Dastavka,Image, Form, Glavni, Icon, Inpu, Kontakt, Logo, Menu, Onass, Phone, Profile, Sertsa, Menyu, Container, Loft, Mebel, Pichka, } from './style'
import logo from '../../../assets/img/LOGO.png'
import search from '../../../assets/img/search.png'
import phone from '../../../assets/img/phone.png'
import dastavka from '../../../assets/img/delivery.png'
import sert from '../../../assets/img/add.png'
import bag from '../../../assets/img/bag.png'
import profile from '../../../assets/img/profile.png'
import { Link } from 'react-router-dom'
import pichka from '../../../assets/img/пикча.png'
import Filterr from '../onas_page'
import { useState } from 'react'
import { useEffect } from 'react'
import { PulseLoader } from 'react-spinners'
import { Load } from '../../Layout/style'
import axios from 'axios'
import { useActive } from '../../../context/Active'
import { useStoreg } from '../../../context/Storeg'


export default function Onas() {
    const [data, setData] = useState([])
    const [active, setActive] = useActive()
    const [local, setLocal] = useState(false)
    const [store, setStore] = useStoreg()

    useEffect(() => {
        let res = JSON.parse(localStorage.getItem('loft'));
        if (res) {
            setLocal(true)
        }
        else {
            setLocal(false)
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
                        <Content>
                            <Link to='/'> <Logo src={logo} /></Link>
                            <Menu>
                                <Link to='/'><Glavni>Главная</Glavni></Link>
                                <Link to="/onas"> <Onass>О нас</Onass></Link>
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
                                <Link to='/corzina'> <Bag><i class="bi bi-bell-fill lock"></i></Bag></Link>
                                {
                                    local && <Image />
                                }
                                <Link to='/blog'><i class="bi bi-person-circle profil"></i></Link>
                            </Menyu>
                        </Content>
                        <Loft>
                            <Mebel>
                                <Mebel.Title>О магазине</Mebel.Title>
                                <Mebel.Text>
                                    Интернет-магазин «Лофт Мебель»:
                                    купите хорошую
                                    мебель в один клик!
                                </Mebel.Text>
                                <Mebel.Info>Уникальный формат интернет-магазина позволит вам купить лучшую
                                    мебель крупнейших российских фабрик максимально быстро и по
                                    выгодной цене!

                                    Мы благодарим за доверие более десятка производителей, которые дали
                                    нам возможность представлять лучшие образцы их продукции в
                                    российском интернет-пространстве. Прямые договоры на поставку
                                    мебели с фабрик обеспечивают наиболее привлекательные условия для
                                    наших покупателей.
                                </Mebel.Info>
                            </Mebel>
                            <Pichka src={pichka} />
                        </Loft>
                        <Filterr />
                    </Container>
            }
        </>
    )
}
