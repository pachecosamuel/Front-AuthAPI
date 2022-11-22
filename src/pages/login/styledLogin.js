import styled from "styled-components";
export const Body = styled.body`
padding:0;
height: 98vh;
width: 100%;
display: flex;
margin:auto;
background-color: #888080;
justify-content: space-around;
align-items:center ;
`

export const DivOne = styled.div`
background-color: #F2F2F2;
margin-top: 10;
margin-bottom:10;
padding: 0;
width: 60%;
height: 100%;
display: flex;
justify-content: center;
align-items: center;
@media (max-width: 767px){
display: none;
}
`

export const DivTwo = styled.div`
background-color: #E2000033;
width: 40%;
height: 100%;
@media (max-width: 767px){
width: 100%;
} 
`

export const Img = styled.img`
height:60%;
width: 100%;
margin: 0%;
`
