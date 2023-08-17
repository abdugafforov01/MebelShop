import React from 'react'
import { Aksiya, Container, Content, Head, Icon, Kitchen } from './style'
import kitchen from '../../assets/img/kitchen-icon.png'
import bedroom from '../../assets/img/bedroom-icon.png'
import children from '../../assets/img/childrensroom-icon.png'
import close from '../../assets/img/closet-icon.png'
import office from '../../assets/img/office-icon.png'
import livin from '../../assets/img/livingroom-icon.png'
import etc from '../../assets/img/etc.png'




export default function Foteer() {
  return (
    <Container>
        <Head>
            <Content>
                <Kitchen src={kitchen}/>
                <Content.Title>Кухни</Content.Title>
            </Content>
            <Content>
                <Kitchen src={bedroom}/>
                <Content.Title>Спальни</Content.Title>
            </Content>
            <Content>
                <Kitchen src={livin}/>
                <Content.Title>Гостинные</Content.Title>
            </Content>
            <Content>
                <Kitchen src={close}/>
                <Content.Title>Прихожие</Content.Title>
            </Content>
            <Content>
                <Kitchen src={office}/>
                <Content.Title>Офисная мебель</Content.Title>
            </Content>
            <Content>
                <Kitchen src={children}/>
                <Content.Title>Детская</Content.Title>
            </Content>
            <Aksiya>Акция</Aksiya>
            <Icon src={etc}/>
        </Head>
    </Container>
  )
}
