import React from 'react'
import { Content, Nav, Menu, Glavni, Menyu, Contact, Info, Num, Dastavka, Head, Logo, Mebel, Lokal, Wish, Bag, From, Search, Formu, Ikon, Image } from './style'
import logo from '../../assets/img/доставка.png'
import mebel from '../../assets/img/LOGO.png'
import search from '../../assets/img/search.png'
import { Link, NavLink } from 'react-router-dom'
import { useState } from 'react'
import { useEffect } from 'react'
import { useActive } from '../../context/Active'
import axios from 'axios'
import { useStoreg } from '../../context/Storeg'
export default function Navbar() {
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
  return (
    <>
      <Nav>
        <Content>
          <Menu>
            <NavLink to='/'><Glavni>Главная</Glavni></NavLink>
            <NavLink to='/onas'><Menyu>О нас</Menyu></NavLink>
            <NavLink to='/contact'><Contact>Контакты</Contact></NavLink>
          </Menu>
          <Info>
            <Num><a href="tel:8 (964) 89 99 119">8 (964) 89 99 119</a></Num>
            <Dastavka src={logo} />
          </Info>
        </Content>
      </Nav>
      <Head>
        <Link to='/'><Mebel><Logo src={mebel} /></Mebel></Link>
        <From>
          <Formu>
            <Ikon src={search} />
            <Search placeholder='Поиск' />
          </Formu>
        </From>
        <Lokal>
          <Wish className={data.length > 0 ? "favourite" : ""}><i class="bi bi-heart-fill hart "></i></Wish>
          <Link to='/corzina'> <Bag><i class="bi bi-bell-fill lock"></i></Bag></Link>
          {
            local && <Image />
          }
          <Link to='/blog'><i class="bi bi-person-circle profil"></i></Link>
        </Lokal>
      </Head>
    </>
  )
}
