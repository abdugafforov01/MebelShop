import React from 'react'
import { Btn, Btns, Buttton, Chec, Chekd, Container, Content, Form, Formu, Inpu, Phone, Mail, Insta, Filtar, Flex, Adres,Mapp } from './style'
import phone from '../../../assets/img/phone.png'
import email from '../../../assets/img/mail.png'
import inst from '../../../assets/img/inst.png'
import yan from '../../../assets/img/yandex.png'
import Foter from '../../mail'

export default function Email() {
    return (
        <Container>
            <Container.Title>Свяжитесь с нами</Container.Title>
            <Flex>
                <Content>
                    <Form>
                        <Formu>
                            <Formu.Text>Ваше имя</Formu.Text>
                            <Inpu type="text" />
                        </Formu>
                        <Formu>
                            <Formu.Text>Ваш e-mail</Formu.Text>
                            <Inpu type="email" />
                        </Formu>
                    </Form>
                    <Chekd>
                        <Chec.Text>Сообщение</Chec.Text>
                        <Chec />
                    </Chekd>
                    <Buttton>
                        <Btns>Прикрепить файл</Btns>
                        <Btn>Отправить</Btn>
                    </Buttton>
                </Content>
                <Filtar>
                    <Phone>
                        <Phone.Img src={phone} />
                        <Phone.Title href="tel:8 (964) 89 99 119">8 (964) 89 99 119</Phone.Title>
                    </Phone>
                    <Mail>
                        <Mail.Img src={email} />
                        <Mail.Text href="email:mebel_loft_anapa@mail.ru">mebel_loft_anapa@mail.ru</Mail.Text>
                    </Mail>
                </Filtar>
                <Insta>
                    <Insta.Img src={inst} />
                    <Insta.Text>INSTAGRAM</Insta.Text>
                </Insta>
                <Adres>
                Адрес: г. Анапа, Анапское шоссе, 30 Ж/К Черное море
                </Adres>
            </Flex>
            <Mapp>
                <Mapp.Text>Адрес нашей компании</Mapp.Text>
                <Mapp.Img src={yan}/>
            </Mapp>
            <Foter/>
        </Container>
    )
}
