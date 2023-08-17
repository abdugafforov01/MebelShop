import React from 'react'
import { Bag, Container,Image, Content, Dastavka, Form, Glavni, Icon, Inpu, Kontakt, Logo, Menu, Onas, Phone, Profile, Sertsa, Menyu, Telefon, Page, } from './style'
import logo from '../../../assets/img/LOGO.png'
import search from '../../../assets/img/search.png'
import phone from '../../../assets/img/phone.png'
import dastavka from '../../../assets/img/delivery.png'
import { Link } from 'react-router-dom'
import Foteer from '../../menyu'
import Blug from '../blog_page'
import { useState } from 'react'
import { useEffect } from 'react'
import { PulseLoader } from 'react-spinners'
import { Load } from '../../Layout/style'
import axios from 'axios'
import { useStoreg } from '../../../context/Storeg'
import { useActive } from '../../../context/Active'

export default function Blog() {
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
                <Link to='/corzina'> <Bag><i class="bi bi-bell-fill lock"></i></Bag></Link>
                {
                  local && <Image />
                }
                <Link to='/blog'><i class="bi bi-person-circle profil"></i></Link>
              </Menyu>
            </Content>
            <Foteer />
            <Page>
              <Link to='/'><Page.Title>Главная</Page.Title></Link>
              <Link to='/blog'><Page.Title>Личный кабинет</Page.Title></Link>
            </Page>
            <Blug />
          </Container>
      }
    </>

  )
}
