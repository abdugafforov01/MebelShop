import React from 'react'
import { Close, Container, Content, Img } from './style'
import { useStoreg } from '../../context/Storeg'

export default function List({ value }) {
    const [store, setStore] = useStoreg()
    const removeItem = (id) => {
        let carts = JSON.parse(localStorage.getItem('loft'))
        if (carts) {
            let filter = carts.filter(item => item.id != id);
            if(filter.length>0){
                localStorage.setItem('loft',JSON.stringify(filter))
            }
            else{
                localStorage.removeItem('loft')
            }
            setStore(!store)
        }
    }
    return (
        <Container>
            <Content>
                <Img src={value?.url} />
                <div>
                    <Content.Title>{value?.name}</Content.Title>
                    <Content.Count>Количество: {value?.count}</Content.Count>
                </div>
            </Content>
            <Close onClick={() => removeItem(value.id)}>&#215;</Close>
        </Container>
    )
}
