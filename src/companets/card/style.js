import styled from "styled-components";


export const Container = styled.div`
padding : 0 50px ;
`
export const Product = styled.div` 
width: 263px;
background: #FFFFFF;
box-shadow: 0px 1px 9px rgba(0, 0, 0, 0.11);
margin-top:40px;
position: relative;
`
export const Img = styled.img` 
margin-top:30px;
height: 250px;
width: 250px;
object-fit: cover;
cursor: pointer;
:hover{
    transform: scale(0.9);
}
`
export const Row = styled.div` 
text-align: center;
`
Product.Title = styled.h4` 
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 19px;
color: #414141;
padding:54px 0 6px 22px;
`
Product.Text = styled.h6` 
font-style: normal;
font-weight: 400;
font-size: 11px;
line-height: 13px;
color: #414141;
padding-left:22px;
`
Product.Price = styled.h2` 
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 19px;
color: #414141;
padding:9px 0 15px 22px
`
Product.Size = styled.p` 
font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 14px;
color: #414141;
padding:10px 0 8px 22px;
`
export const Flex = styled.div` 
display: flex;
justify-content: space-around;
`
export const Price = styled.div` 
`
Price.Title = styled.h5` 
font-style: normal;
font-weight: 400;
font-size: 9px;
line-height: 11px;
color: #C4C4C4;
`
Price.Text = styled.h4` 
font-style: normal;
font-weight: 400;
font-size: 9px;
line-height: 11px;
color: #414141;
`
export const Btns = styled.button`
width :223px ;
height: 40px;
background: #245462;
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 13px;
line-height: 15px;
color: #FFFFFF;
border: 0;
margin:20px;
border-radius:5px;
:hover{
    background-color:#339DD2;
    transition:0.2s;
}
:active{
    background: none;
    transition:none;
    color: black;
    border: 1px solid #245462;
}
`
export const Display = styled.div` 
display: flex;
flex-wrap:wrap;
width: 100%;
padding-left:30px;
`
export const Delete = styled.img` 
width: 18px;
height: 18px;
position: absolute;
right: 8px;
top: 5px;
cursor: pointer;
`
export const Sertsa = styled.div` 
   position: absolute;
   right: 35px;
   top: 2px;
   cursor: pointer;
   font-size: 18px;
`
export const Info = styled.div` 
  position: absolute;
   /* right: 63px; */
   left: 8px;
   top: 2px;
   cursor: pointer;
   font-size: 17px;
`



