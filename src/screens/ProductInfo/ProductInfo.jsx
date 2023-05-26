import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';


const Item = styled(Paper)(() => ({
  // backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  // ...theme.typography.body2,
  padding: 1,
  textAlign: 'left',
  // color: theme.palette.text.secondary,
}));

export const getById = async id => {
  const result = await axios.get(`products/${id}`);
  return result.data;
};

const ProductDetails = () => {
    const { id } = useParams();
     const [item, setItem] = useState([]);
     useEffect(() => {

   async function getProductById() {
      try {
          const result = await getById(id);
        setItem(result);

      }
      catch (error) {
       console.log(error)
      }
    }
     getProductById();
     }, [id]);
    
  const { name,
    category,
    perCategory,
    sample,
          price,
          discount,
          manufacturer,
          country,
          delivery,
          payments,
          sort,
          clasification,
          field,
          packadge,
          type,
          weight,
    description,
  avatar} = item;
    return (
            
      
        <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        
        <Grid xs={6} md={4} >
              <Item>
                <div>
                <p>Id: {id}</p>
                <p>Заголовок: {name}</p>
                <p>Категорія:  {category}</p>
                <p>Підкатегорія:  {perCategory}</p>
                <p>Шаблон:  {sample}</p>
                <p>Ціни:  {price}</p>
                <p>Знижки:  {discount}</p>
                <p>Виробник:  {manufacturer}</p>
                <p>Країна виробник:  { country}</p>
                <p>Доставка:  { delivery}</p>
                <p>Спосіб прийому платежів:  {payments}</p>
                <p>Сорт:  {sort}</p>
                <p>Класифікація:  {clasification}</p>
                <p>Види:  {field}</p>
                <p>Упаковка:  {packadge}</p>
                <p>Тип:  {type}</p>
                  <p>Вага:  {weight}</p>
                  </div>
          </Item>
        </Grid>
        <Grid xs={6} md={8}>
              <Item><div>
               
                <img src={avatar} alt='phot' width={211} height={294} /></div>
                <div>
                  <p>Опис:  {description}</p>
                  </div>
              </Item>
        </Grid>
      </Grid>
    </Box>
         
                
        );
          
         
 
}

export default ProductDetails;