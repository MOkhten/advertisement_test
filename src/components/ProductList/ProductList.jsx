import React from "react";
import { useSelector } from "react-redux";
import { BsArrowLeft } from 'react-icons/bs';
import { selectProducts } from "redux/user/selector"; 
import { Table, Line, Body, Td, Tr, ProductLink, BackLinkHref } from './ProductList.styled';

const ProductList = () => {
  const product = useSelector(selectProducts);
  
  return (
    <>
    <BackLinkHref to={`/`}>
              <BsArrowLeft />
              Створити оголошення
            </BackLinkHref>
    
    <Table >
	<Line>
		<tr>
			<th>Id</th>
			<th>Назва</th>
			<th>Категорія</th>
			<th>Підкатегорія</th>
			<th>Шаблон</th>

		</tr>
	</Line>
	<Body>
          {product?.map(({ id, name, category, preCategory, sample  }) => {

            return (
              <Tr key={id} >
                
                <Td>{id}</Td>
                <ProductLink  to={`${id}`}>
                  <Td >{name} </Td>
                  </ProductLink >
                      <Td>{ category}</Td>
                      <Td>{ preCategory}</Td>
                      <Td>{ sample}</Td>
			
                  </Tr>
                    
                );
            })}
                   
            </Body>
      </Table>
      </>
    );
  
}


export default ProductList;