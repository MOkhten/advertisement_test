import styled from 'styled-components';



export const Form = styled.div`
margin-left: 30px;
display: inline-block;
width: 100%;
`
export const Input = styled.input`
display: flex;
  justify-content: space-between;
border: 1px solid #E5E0EB;
padding: 8px 12px 8px 12px;
width: 370px;
border-radius: 2px;
font-size: 14px;
position: relative;
:hover,
  :focus {
    border-color: lightblue;
    display: inline-flex;
    color: #1976d2;}
`


export const ProductTitle = styled.h1`
  font-family: 'Nunito';
font-weight: 700;
font-size: 48px;
line-height: 65px;
color: #665CD1;
`
export const Title = styled.h2`
font-family: 'Poppins';
font-weight: 600;
font-size: 14px;
line-height: 148%;
color: #1A141F;
margin-left: 10px;
`

export const AddButton = styled.button`
cursor: pointer;
display: inline-flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 8px 28px;
gap: 8px;
background: #665CD1;
margin-right: 22px;
border-radius: 4px;
font-family: 'Poppins';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 148%;
border: transparent;
text-align: center;
color: #FFFFFF;
width: 206px;
:hover,
  :focus {
    background: #FFFFFF;
border: 1px solid #665CD1;
color: #665CD1;}`


export const BackButton = styled.button`
display: inline-flex;
flex-direction: row;
justify-content: center;
width: 206px;
align-items: center;
padding: 8px 28px;
gap: 8px;
background: #FFFFFF;
border: 1px solid #665CD1;
border-radius: 4px;
font-family: 'Poppins';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 148%;
text-align: center;
color: #665CD1;
:hover,
  :focus {
   background: #665CD1;
color: #FFFFFF;}`
