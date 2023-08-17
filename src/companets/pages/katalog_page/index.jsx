import React from 'react'
import { Content, Display, Flex, Head, Main, Saidbar } from './style'
import Form from '../../card/form'
import Foter from '../../mail'
import { Slider } from 'antd';

export default function Katalag() {
    return (
        <>
            <Main>
                <Saidbar>
                    <Saidbar.Title>Раздел</Saidbar.Title>
                    <Saidbar.Select>
                        <option>Гостинные</option>
                        <option>Мягкая мебель</option>
                    </Saidbar.Select>
                    <Saidbar.Select>
                        <option>Мягкая мебель</option>
                    </Saidbar.Select>
                    <Saidbar.Select>
                        <option>Диваны</option>
                    </Saidbar.Select>
                    <Content>
                        <Content.Title>Цена</Content.Title>
                        <Slider range={{ draggableTrack: true, }} defaultValue={[20, 50]} />
                        <Flex>
                            <Flex.Title>2 000 ₽ </Flex.Title>
                            <Flex.Border />
                            <Flex.Text>102 000 ₽ </Flex.Text>
                        </Flex>
                    </Content>
                    <Head>
                        <Head.Title>Цвет</Head.Title>
                        <Display>
                            <div class="form-check cek"><input class="form-check-input bg-danger" type="checkbox" value="" id="flexCheckDefault" /></div>
                            <div class="form-check cek"><input class="form-check-input bg-success " type="checkbox" value="" id="flexCheckDefault" /></div>
                            <div class="form-check cek"><input class="form-check-input bg-body-secondary " type="checkbox" value="" id="flexCheckDefault" /></div>
                            <div class="form-check cek"><input class="form-check-input bg-secondary " type="checkbox" value="" id="flexCheckDefault" /></div>
                            <div class="form-check cek"><input class="form-check-input bg-warning" type="checkbox" value="" id="flexCheckDefault" /></div>
                            <div class="form-check cek"><input class="form-check-input bg-info" type="checkbox" value="" id="flexCheckDefault" /></div>
                        </Display>
                        <Head.Text>Бренд</Head.Text>
                        <div class="form-check ms-4 mt-2 ">
                            <input class="form-check-input fs-5" type="checkbox" value="" id="flexCheckDefault"/>
                             <label class="form-check-label" for="flexCheckDefault">Динс</label>
                        </div>
                        <div class="form-check ms-4 mt-2">
                            <input class="form-check-input fs-5" type="checkbox" value="" id="flexCheckDefault"/>
                             <label class="form-check-label" for="flexCheckDefault">Кускен</label>
                        </div>
                        <div class="form-check ms-4 mt-2">
                            <input class="form-check-input fs-5" type="checkbox" value="" id="flexCheckDefault"/>
                             <label class="form-check-label" for="flexCheckDefault">Эби</label>
                        </div>
                        <div class="form-check ms-4 mt-2">
                            <input class="form-check-input fs-5" type="checkbox" value="" id="flexCheckDefault"/>
                             <label class="form-check-label" for="flexCheckDefault">Реджио</label>
                        </div>
                        <div class="form-check ms-4 mt-2">
                            <input class="form-check-input fs-5" type="checkbox" value="" id="flexCheckDefault"/>
                             <label class="form-check-label" for="flexCheckDefault">Сайле</label>
                        </div>
                        <Head.Info>Показать еще</Head.Info>
                    </Head>
                </Saidbar>
                <Form />
            </Main>
            <Foter />
        </>
    )
}
