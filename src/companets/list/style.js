import styled from "styled-components";

export const Container = styled.div` 
background-color: #FFFF;
box-shadow:  0px 2px 4px rgba(0,0,0,0.87) ;
width: 100%;
margin-top: 20px;
display: flex;
align-items: center;
:hover{
    background-color:#EAEAEA;
}
cursor: pointer;
`
export const Img = styled.img` 
width: 100px;
height: 75px;
margin-right: 40px;
object-fit: contain;
`
export const Content = styled.div` 
width: 100%;
display: flex;
align-items: center;
margin-right: 20px;
padding: 20px 22px;
`
Content.Title = styled.h4` 
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 19px;
color: #414141;
padding-bottom: 20px;
`
Content.Count = styled.div` 
font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 14px;
color: #414141;
`
export const Close = styled.div ` 
width: 57px;
height: 120px;
background: #F9F9F9;
display: flex;
align-items: center;
justify-content: center;
cursor: pointer;
:hover{
    background-color:#CBCBCB    ;
    transition: 0.2s;
}
:active{
    background-color: #FFF;
    border: 1px solid;
}
`