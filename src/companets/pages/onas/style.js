import styled from "styled-components";
import {ReactComponent as puf} from '../../../assets/svg/puf.svg'


export const Container = styled.div` 
padding:0 20px;
margin: 0 auto;
max-width:1440px ;
`
export const Content = styled.div` 
display: flex;
align-items: center;
justify-content: space-around;
padding-top:45px;
padding-bottom:30px;
`
export const Logo = styled.img` 
cursor: pointer;
`
export const Menu = styled.div` 
display: flex;
gap: 30px;
`
export const Glavni = styled.h4` 
font-style: normal;
font-weight: 400;
font-size: 14px;
color: #414141;
:hover{
    color: red;
}
`
export const Onass = styled.h4` 
font-style: normal;
font-weight: 400;
font-size: 14px;
color: #414141;
:hover{
    color: red;
}
`
export const Kontakt = styled.div`
font-style: normal;
font-weight: 400;
font-size: 14px;
color: #414141;
:hover{
    color: red;
}
`
export const Form = styled.div` 
background: #F9F9F9;
width: 280px;
height: 40px;
display: flex;
align-items: center;
border-radius:5px;  
box-shadow:0 0 8px #ccc;
`
export const Icon = styled.img` 
margin-left:15px;
`
export const Inpu = styled.input` 
border: 0;
outline: 0;
background:none;
padding-left: 10px;
`
export const Phone = styled.div` 
display: flex;
align-items: center;
gap: 11px;
`
Phone.Img = styled.img` 

`
Phone.Title = styled.a` 
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 16px;
color: #414141;
`
export const Dastavka = styled.div` 
display: flex;
align-items: center;
gap: 10px;
`
Dastavka.Img = styled.img` 

`
Dastavka.Title = styled.a` 
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 16px;
color: #414141;
`
export const Sertsa = styled.div` 

`
export const Bag = styled.div` 

`
export const Profile = styled.div` 

`
export const Menyu = styled.div` 
display: flex;
align-items: center;
gap: 30px;
position: relative;
`
export const Telefon = styled.div` 
display: f;
gap: 30px;
`
export const Loft = styled.div` 
display: flex;
justify-content: space-between;
align-items: center;
padding-top:54px;

`
export const Mebel = styled.div` 
padding-left:100px;
`
Mebel.Title = styled.h6` 
font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 14px;
letter-spacing: 0.08em;
color: #245462;
`
Mebel.Text = styled.h5` 
width: 421px;
font-style: normal;
font-weight: 400;
font-size: 24px;
line-height: 28px;
color: #414141;
`
Mebel.Info = styled.h6` 
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 20px;
width: 421px;
color: #686868;

`
export const Pichka = styled.img` 

`
export const Image = styled(puf)` 
position: absolute;
top: 5px;
left: 65px;
`
