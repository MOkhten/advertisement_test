import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Table = styled.table`
width: 100%;
	border: none;
	margin-bottom: 20px;`

export const Line = styled.thead `
    padding: 10px;
	font-weight: 500;
	font-size: 16px;
	line-height: 20px;
	text-align: left;
	color: #444441;
	border-top: 2px solid #716561;
	border-bottom: 2px solid #716561;`

export const Body = styled.tbody`
    text-align: left;
	border-left: 1px solid #ddd;
	border-right: 1px solid #ddd;
	padding: 10px 15px;
	font-size: 14px;
	vertical-align: top;`

export const Td = styled.td`
     padding: 15px 0;
	 text-decoration: none;
    color: rgb(128, 128, 128);`

export const Tr = styled.tr`
   :nth-child(2n) {
    background: linear-gradient(0deg, rgba(245, 243, 247, 0.4), rgba(245, 243, 247, 0.4)), #FFFFFF;
} `

export const ProductLink = styled(Link)`
text-decoration: none;
color: black;
line-height: 1.4;
transition: color 250ms cubic-bezier(0.075, 0.82, 0.165, 1);
  &:hover {
    color: #ff4500;
  }`

  export const BackLinkHref = styled(Link)`
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 8px;
  text-decoration: none;
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
  font-size: 18px;
  line-height: 1.2;
  cursor: pointer;
  color: #373737;
  transition: color 250ms ease-in-out;
  &:hover {
    color: #5736a3;
  }
`;