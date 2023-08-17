import styled from "styled-components";
import {ReactComponent as puf} from '../../assets/svg/puf.svg'
 
export const Nav = styled.div` 
height: 38px;
width: 100%;
background-color:#313131;
`
export const Content = styled.div` 
display: flex;
justify-content: space-between ;
padding:0 80px;
align-items: center;
line-height: 38px;
`
export const Menu = styled.div` 
display: flex;
gap: 30px;
padding-top:8px;
`
export const Glavni = styled.h4` 
cursor: pointer;
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 16px;
color: #FFFFFF;
`
export const Menyu = styled.h4` 
cursor: pointer;
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 16px;          
color: #FFFFFF;
:hover{
    color: red;
}
`
export const Contact = styled.h4` 
cursor: pointer;
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 16px;
color: #FFFFFF;
:hover{
    color: red;
}
`
export const Num = styled.h4` 
a{
    font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 16px;
color: #FFFFFF;
}
`
export const Info = styled.div` 
display: flex;
align-items: center;
gap: 30px;
padding-top:3px;
`
export const Dastavka = styled.img` 
cursor: pointer;

`
export const Logo = styled.img` 
cursor: pointer;

`
export const Head = styled.div` 
display: flex;
justify-content: space-between;
padding: 32px 80px 0 80px;
align-items: center;
`
export const Lokal = styled.div` 
display: flex;
align-items: center;
gap: 30px;
position: relative;
`
export const Mebel = styled.div` 

`
export const Wish = styled.div` 
cursor: pointer;

`
export const Bag = styled.div` 
cursor: pointer;

`
export const From = styled.div` 
display: flex;
justify-content: center;
`
export const Search = styled.input` 
width: 880px;
height: 45px;
background-color:#FFFCFC;
outline: none;
border: 0;
margin-left: 10px;
`
export const Formu = styled.div` 
width: 940px;
height: 50px;
border: 1px solid #E6E6E6;
display: flex;
align-items: center;
border-radius: 5px;
`
export const Ikon = styled.img` 
margin-left:20px;
`
export const Image = styled(puf)` 
position: absolute;
top: 5px;
left: 65px;
`