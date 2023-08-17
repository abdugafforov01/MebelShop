import React from 'react'
import { Container, Content, Email, End, Flex, Gmail, Info, Insta, Kuxni, Lamil, Mobil, More, Prixoj, Shkaf } from './style'
import mail from '../../assets/img/mail.png'
import insta from '../../assets/img/inst.png'
import phone from '../../assets/img/phone.png'

export default function Foter () {
    return (
        <Container>
            <Content>
                <Content.Title>НАВИГАЦИЯ</Content.Title>
                <Flex>
                    <Kuxni>
                        <Kuxni.Title>Кухни</Kuxni.Title>
                        <Kuxni.Title>Спальни</Kuxni.Title>
                        <Kuxni.Title>Гостинные</Kuxni.Title>
                    </Kuxni>
                    <Prixoj>
                        <Prixoj.Title>Прихожие</Prixoj.Title>
                        <Prixoj.Title>Офисная мебель</Prixoj.Title>
                        <Prixoj.Title>Детская</Prixoj.Title>
                    </Prixoj>
                    <Shkaf>
                        <Shkaf.Title>Шкафы</Shkaf.Title>
                        <Shkaf.Title>Матрасы</Shkaf.Title>
                        <Shkaf.Title>Мягкая мебель</Shkaf.Title>
                    </Shkaf>
                </Flex>
                <End>
                    <End.Title>Акция</End.Title>
                    <End.Text>Новинки</End.Text>
                </End>
            </Content>
            <Info>
                <Lamil>LM</Lamil>
                <More>г. Анапа, Анапское шоссе,30 Ж/К Черное море</More>
                <Email>
                    <Mobil>
                        <Mobil.Img src={phone}/>
                        <Mobil.Title href="tel:8 (964) 89 99 119">8 (964) 89 99 119</Mobil.Title>
                    </Mobil>
                    <Insta>
                        <Insta.Img src={insta}/>
                        <Insta.Title>INSTAGRAM</Insta.Title>
                    </Insta>
                    <Gmail>
                        <Gmail.Img src={mail}/>
                        <Gmail.Title href="email:mebel_loft_anapa@mail.ru">mebel_loft_anapa@mail.ru</Gmail.Title>
                    </Gmail>
                </Email>
            </Info>
        </Container>
    )
}
