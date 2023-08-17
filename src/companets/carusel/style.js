import styled from "styled-components";

export const Folder = styled.img`
height: 500px;
margin-top:30px;
`
export const Loft = styled.h1` 
font-family: 'Playfair Display';
font-style: normal;
font-weight: 700;
font-size: 50px;
line-height: 105.3%;
letter-spacing: 0.02em;
text-transform: uppercase;
color: #3C3C3C;
width: 216px;
`
export const Container = styled.div` 
position: relative;
`
export const Contex = styled.h6` 
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 140.8%;
letter-spacing: 0.02em;
color: #343434;
padding-top:15px;
padding-bottom:20px;
`
export const Btns = styled.button` 
width: 163px;
height: 45px;
background: #FFFFFF;
border: 0;
box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.07);
font-style: normal;
font-weight: 700;
font-size: 12px;
line-height: 140.8%;
cursor: pointer;
letter-spacing: 0.04em;
color: #414141;
border-radius:5px;
:hover{
    background-color:#D9D9D9;
    transition:0.2s;
}
:active{
    background:none;
    color: #414141;
    transition:none;
    border: 1px solid #414141 ;
}
`
export const Content = styled.div` 
position: absolute;
bottom:150px;
text-align:left;
left: 200px;
`
export const Product = styled.div` 
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 19px;
color: #414141;
padding-left:80px;
padding-top:30px;
`
export const Btn = styled.button` 
margin-right:80px;
margin-top:10px;
width: 150px;
height: 40px;
border: 0;
background-color:#48BFF3;
border-radius:10px;
:hover{
    background-color:#4E7AD4;
    transition:0.2s;
    color: #FFF;
}
:active{
    background:none;
    border:1px solid #48BFF3;
    color: black;
}
`
export const Flex = styled.div` 
display: flex;
justify-content: space-between;
align-items: center;
`
