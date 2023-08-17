import React from 'react'
import { Border, Card, Container, Content, Display, Flex, Head, Info, Predment, Sena, Desplay, Flax, Box, Coop, Pomog, Vrem, Vren, Comfort } from './style'
import img from '../../../assets/img/profit.png'
import time from '../../../assets/img/time.png'
import pro from '../../../assets/img/production.png'
import vec from '../../../assets/img/Vector.png'
import cop from '../../../assets/img/coop-icon.png'
import sup from '../../../assets/img/support-icon.png'
import del from '../../../assets/img/delivery-box-icon.png'
import re from '../../../assets/img/re-icon.png'
import vector from '../../../assets/img/Vector (1).png'
import Foter from '../../mail'
export default function Filterr() {
    return (
        <>
            <Container>Покупайте с выгодой!</Container>
            <Content>
                <Display>
                    <Sena>
                        <Sena.Img src={img} />
                        <Info>
                            <Info.Title>Лучшая цена</Info.Title>
                            <Info.Text>Предлагаем близкие к оптовым цены, которые дают возможность приобретать мебель дешевле, чем в розничных салонах и шоу-румах.</Info.Text>
                        </Info>
                    </Sena>
                    <Sena>
                        <Sena.Img src={time} />
                        <Info>
                            <Info.Title>Экономие времени</Info.Title>
                            <Info.Text>
                                Не нашли оптимальный вариант или нет
                                времени на поиски? Оставьте онлайн-заявку с критериями, и мы предложим вам
                                несколько достойных образцов.
                            </Info.Text>
                        </Info>
                    </Sena>
                </Display>
                <Flex>
                    <Sena>
                        <Sena.Img src={vec} />
                        <Info>
                            <Info.Title>Прямые поставки</Info.Title>
                            <Info.Text>
                                С ведущих мебельных фабрик уменьшают срок
                                выполнения вашего заказа, даже если речь идет об изготовлении предметов по
                                индивидуальному проекту.
                            </Info.Text>
                        </Info>
                    </Sena>
                    <Sena>
                        <Sena.Img src={pro} />
                        <Info>
                            <Info.Title>Изготовление на заказ</Info.Title>
                            <Info.Text>
                                Принимаем заявки на изготовление
                                мебели по персональному дизайн-проекту от покупателей из любой точки России.
                                Просим быть готовыми к авансированной оплате персональных заказов.
                            </Info.Text>
                        </Info>
                    </Sena>
                </Flex>
            </Content>
            <Head>
                <Predment>Самые «вкусные» предложения</Predment>
                <Border />
                <Predment.Title>
                    Мы делаем всё
                    необходимое, чтобы покупатели получали доступ к актуальным новинкам, которые
                    представляет российский мебельный рынок. Познакомиться с каждой моделью,
                    сравнить цены на аналоги и выбрать лучшее вы можете прямо сейчас. Хотите
                    первыми узнавать о самых выгодных предложениях? Тогда подписывайтесь на
                    информационную рассылку!
                </Predment.Title>
                <Predment>Гарантированное качество</Predment>
                <Border />
                <Predment.Title>
                    Вся продукция сопровождается
                    гарантией производителя. В каталогах представлена только сертифицированная
                    мебель. Собственный контроль качества тщательно проверяет каждый образец
                    перед отправкой заказчику. Покупатели получают необходимые документы –
                    гарантийный талон и чек.
                </Predment.Title>
                <Predment>Впечатляющий ассортимент</Predment>
                <Border />
                <Predment.Title>
                    Ежедневно мы выбираем для
                    наших каталогов идеальные образцы из товарной матрицы производителей по всей
                    России. Модные расцветки, экологически безопасные материалы, надежные
                    комплектующие – у нас вы найдете мебель своей мечты!

                </Predment.Title>
            </Head>
            <Card>
                <Desplay>
                    <Box>
                        <Box.Title>Особенные условия для оптовиков</Box.Title>
                        <Box.Text>
                            Число наших оптовых
                            покупателей неуклонно возрастает и всё потому, что мы сумели предложить
                            владельцам мебельных магазинов наиболее выгодные условия.
                        </Box.Text>
                        <Coop src={cop} />
                    </Box>
                    <Box>
                        <Box.Title>Внимательный сервис</Box.Title>
                        <Box.Text>
                            Квалифицированные менеджеры
                            интернет-магазина ответят на все вопросы по ассортименту и предоставляемым
                            возможностям, а также помогут оформить заказ и проконтролируют реализацию
                            клиентских пожеланий при заказе мебели.
                        </Box.Text>
                        <Coop src={sup} />
                    </Box>
                </Desplay>
                <Flax>
                    <Box>
                        <Box.Title>Оперативная доставка</Box.Title>
                        <Box.Text>
                            Собственная курьерская служба
                            быстро привезет купленную мебель по указанному адресу. В российские регионы
                            доставка осуществляется силами транспортных компаний.
                        </Box.Text>
                        <Coop src={del} />
                    </Box>
                    <Box>
                        <Box.Title>Каждый пятый покупатель заказывает у насповторно!</Box.Title>
                        <Box.Text>
                            И мы благодарим всех, кто воспользовался нашим уникальным предложением, заказал мебель быстро и недорого и порекомендовал
                            друзьям и
                            знакомым.

                        </Box.Text>
                        <Coop src={re} />
                    </Box>
                </Flax>
            </Card>
            <Pomog.Title>Мы поможем сэкономить время, силы и деньги!</Pomog.Title>
            <Pomog>
                <Vrem>
                    <Vrem.Img src={vector} />
                    <Vrem.Text>
                        Время.
                        Примем вашу заявку в кротчайшие сроки. При необходимости
                        подберем для вас достойные варианты по заданным критериям.
                    </Vrem.Text>
                </Vrem>
                <Vrem>
                    <Vrem.Img src={vector} />
                    <Vrem.Text>
                        Силы.
                        Закупим оптом или закажем на фабрике, избавив от длительных
                        обсуждений заказа с исполнителем. Курируем все этапы работы над
                        заказом.
                    </Vrem.Text>
                </Vrem>
                <Vrem>
                    <Vrem.Img src={vector} />
                    <Vrem.Text>
                        Деньги.
                        Вы точно купите мебель дешевле, чем в розницу.
                    </Vrem.Text>
                </Vrem>
            </Pomog>
            <Comfort>
                На чем мы не экономим?
                На вашем комфорте и
                качестве мебели!
            </Comfort>
            <Foter/>
        </>

    )
}
