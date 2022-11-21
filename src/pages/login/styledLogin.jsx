import styled from "styled-components";
export const Body = styled.div`
height: 98vh;
display: flex;
margin:auto;
background-color: #F2F2F2;
justify-content: space-around;
align-items:center ;
`

export const DivOne = styled.div`
background-color: #F2F2F2;
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
background-color: #d3151533;
width: 40%;
height: 100%;
@media (max-width: 767px){
width: 100%;
} 
`

export const Img = styled.img`
height:60%;
width: 100%;
`
