import styled from "styled-components";

export const Container = styled.div` 
display: flex;
justify-content: space-between;
padding-top:40px;
`
Container.Title = styled.h5` 
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 19px;
color: #414141;
`
export const Prav = styled.div` 
display: flex;
gap: 18px;
`
Prav.Title = styled.h5` 
font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 14px;
color: #414141;
`
Prav.Text = styled.h5` 
font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 14px;
color: #245462;
`
export const Box = styled.div` 
width: 1240px;
height: 57px;
background: #F8F8F8;
margin: 0 auto;
margin-top:30px;
display: flex;
align-items: center;
gap: 10px;
justify-content: center;
`
Box.Img = styled.img` 
margin:0 30px;
`
Box.Title = styled.h5` 
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 130%;
color: #414141;
padding-top:8px;
`
export const Display = styled.div` 
position: relative;
display: flex;
align-items: center ;
justify-content: space-between;
padding-bottom:150px;
`
export const Flex = styled.div` 
display: flex;
gap: 10px;
padding-top:28px;
`
export const Content = styled.div`

`
Flex.Title = styled.h4` 
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 19px;
color: #414141;
padding-top:42px;
`
export const Form = styled.div` 
`
export const Inpu = styled.input` 
background: #FCFCFC;
outline: none;
box-shadow: inset 1px 1px 5px rgba(0, 0, 0, 0.07);
border: 0;
width: 207px;
height: 38px;
padding:10px;
font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 14px;
color: #686868;
`
Inpu.Text = styled.h6` 
font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 14px;
color: #969696;
`
export const Formu = styled.div` 
padding-top:25px;
`
export const Inpum = styled.input` 
background: #FCFCFC;
outline: none;
box-shadow: inset 1px 1px 5px rgba(0, 0, 0, 0.07);
border: 0;
width: 428px;
height: 38px;
padding:10px;
font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 14px;
color: #686868;
`
export const Inpo = styled.input` 
background: #FCFCFC;
outline: none;
box-shadow: inset 1px 1px 5px rgba(0, 0, 0, 0.07);
border: 0;
width: 110px;
height: 38px;
padding:10px;
font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 14px;
color: #686868;
`
export const Btn = styled.button` 
width: 101px;
height: 40px;
background: #245462;
border: 0;
font-style: normal;
font-weight: 400;
font-size: 13px;
line-height: 15px;
color: #FFFFFF;
position: absolute;
left: 380px;
margin-top:20px;
:hover{
    background-color:#1B26DB;
    transition: 0.5s;
}
:active{
    background: none;
    border: 1px solid #1B26DB;
    color: black;
}
`
export const Flax = styled.div` 
padding-left:50px;
`
Content.Title = styled.h5` 
text-align: left;
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 19px;
padding-bottom:30px;
color: #414141;

`
export const Tovar = styled.div` 
padding-right:80px;
`