import * as React from 'react';
import { Link } from 'react-router-dom';
import {  useState } from 'react';
import { useDispatch} from 'react-redux';
import {  addProduct } from 'redux/user/operations';
import {  ListContainer, InfoContainer } from '../screens/Product/Product.styled';
import {  Form, ProductTitle, Title, AddButton, BackButton } from './ProductForm.styled'; 
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import { TextField } from '@mui/material';
import photo from '../images/Drag and drop.png';
import pictute2 from '../images/Drag and drop (1).png';
import pictute3 from '../images/Drag and drop (2).png';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


export default function ProductForm() {
const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [category, setNumber] = useState('');
  const [id, setId] = useState('');
  const [preCategory, setPreCategory] = useState('');
  const [sample, setSample] = useState('');
  const [price, setPrice] = useState('');
  const [discount, setDiscount] = useState('');
  const [manufacturer, setManufacturer] = useState('');
  const [country, setCountry] = useState('');
  const [delivery, setDelivery] = useState('');
const [payments, setPayments] = useState('');
  const [sort, setSort] = useState('');
  const [clasification, setClasification] = useState('');
  const [field, setField] = useState('');
  const [packadge, setPackadge] = useState('');
  const [type, setType] = useState('');
  const [weight, setWeight] = useState('');
  const [description, setDescription] = useState('');
  
  
 const handleChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        return setName(value);
      case 'category':
        return setNumber(value);
      case 'productId':
        return setId(value);
      case 'preCategory':
        return setPreCategory(value);
      case 'sample':
        return setSample(value);
      case 'price':
        return setPrice(value);
      case 'discount':
        return setDiscount(value);
      case 'manufacturer':
        return setManufacturer(value);
      case 'country':
        return setCountry(value);
      case 'delivery':
        return setDelivery(value);
      case 'payments':
        return setPayments(value);
       case 'sort':
        return setSort(value);
      case 'clasification':
        return setClasification(value);
      case 'field':
        return setField(value);
      case 'packadge':
        return setPackadge(value);
      case 'type':
        return setType(value);
      case 'weight':
        return setWeight(value);
      case 'description':
        return setDescription(value);
      default:
        throw new Error('Unexpected type of field');
   }
  };

   const handleSubmit = e => {
    e.preventDefault();
    dispatch(
        addProduct({
          name,
          category,
          id,
          preCategory,
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
          description
        })
     );
     
  };


 
  return (
    <Form>
      
      <ProductTitle>Оголошення № 123456789</ProductTitle>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={3}>
        <Grid xs="auto" m={1}>
          <Item><ListContainer>
          <Title>Загальні</Title>
          
              
               <FormControl onSubmit={handleSubmit} sx={{ m: 1, width: '49ch' }} size="small" variant="outlined">
                   <FormHelperText m={0} id="outlined-weight-helper-text">Id</FormHelperText>
          <OutlinedInput 
             value={id}
                    type="text"
                    name="productId"
                    title='name'
                    onChange={handleChange}
                   placeholder='123456789'
          />
         
              </FormControl>
              
               <FormControl action='/' method='post' onSubmit={handleSubmit}  sx={{ m: 1,width: '49ch' }} size="small" variant="outlined">
                   <FormHelperText id="outlined-weight-helper-text">Заголовок</FormHelperText>
                   
          <OutlinedInput
                   value={name}
                    type="text"
                    name="name"
                    title='name'
                    
                    onChange={handleChange}
                   placeholder='Транспорт'
                    required
         
          />
         </FormControl>
                  
     <FormControl onSubmit={handleSubmit}  sx={{ m: 1, width: '49ch' }} size="small" variant="outlined">
                   <FormHelperText id="outlined-weight-helper-text">Категорія</FormHelperText>
          <OutlinedInput
           value={category}
                  type="text"
                    name="category"
                title='category'
                placeholder='Транспорт'
                    onChange={handleChange}
        required
                      />
                      </FormControl>
                       
                    <FormControl sx={{ m: 1, width: '49ch' }} size="small" variant="outlined">
                   <FormHelperText id="outlined-weight-helper-text">Прекатегорія</FormHelperText>
          <OutlinedInput
            value={preCategory}
                  type="text"
                name="preCategory"
                placeholder='Транспорт'
                   title='preCategory'
                    onChange={handleChange}
          required
          />

              </FormControl>
              
                  <FormControl sx={{ m: 1, width: '49ch' }} size="small" variant="outlined">
                   <FormHelperText id="outlined-weight-helper-text">Шаблон</FormHelperText>
          <OutlinedInput
            value={sample}
                  type="text"
                    name="sample"
                title='sample'
                placeholder='Транспорт'
          onChange={handleChange}
        
          required
          />

              </FormControl>
        <FormControl sx={{ m: 1, width: '49ch' }} size="small" variant="outlined">
          
                  <FormHelperText id="outlined-weight-helper-text">Ціни</FormHelperText>
          <OutlinedInput
            value={price}
                  type="price"
                    name="price"
                title='price'
                placeholder='122'
          onChange={handleChange}
                  required 
                  endAdornment={<InputAdornment  position="end">грн</InputAdornment>}
                />
                </FormControl>
                 
              
                <FormControl sx={{ m: 1,  width: '49ch' }} size="small" variant="outlined">
                  <FormHelperText id="outlined-weight-helper-text">Знижки</FormHelperText>
          <OutlinedInput
          value={discount}
                  type="discount"
                name="discount"
                placeholder='122'
                   title='discount'
          onChange={handleChange}
          required 
            endAdornment={<InputAdornment  position="end">грн</InputAdornment>}
            
          />

        </FormControl>
       
       
        <Title> Параметри:</Title>
       
        <FormControl sx={{ m: 1,  width: '49ch' }} size="small" variant="outlined">
                <OutlinedInput
                  value={manufacturer}
                  type="manufacturer"
                  name="manufacturer"
                  placeholder='Україна'
                  title='manufacturer'
                  onChange={handleChange}
                  required
          
 
                  startAdornment={<InputAdornment position="start">Виробник:</InputAdornment>}
         
       />

              </FormControl>

               <FormControl sx={{ m: 1,  width: '49ch' }} size="small" variant="outlined">
                <OutlinedInput
                  value={country}
                  type="country"
                  name="country"
                  placeholder='Україна'
                  title='country'
                  onChange={handleChange}
                  required
          
 
                  startAdornment={<InputAdornment position="start">Країна-виробник:</InputAdornment>}
         
       />

              </FormControl>
              <FormControl sx={{ m: 1,  width: '49ch' }} size="small" variant="outlined">
                <OutlinedInput
                  value={delivery}
                  type="delivery"
                  name="delivery"
                  placeholder='Самовивіз,Нова Пошта,Meest'
                  title='delivery'
                  onChange={handleChange}
                  required
          
 
                  startAdornment={<InputAdornment position="start">Доставка:</InputAdornment>}
         
       />

        </FormControl>
        
             <FormControl sx={{ m: 1,  width: '49ch' }} size="small" variant="outlined">
                <OutlinedInput
                  value={payments}
                  type="payments"
                  name="payments"
                  placeholder='Приватбанк,Моно банк,Розрахунковий рахунок,Готівка'
                  title='payments'
                  onChange={handleChange}
                  required
          
 
                  startAdornment={<InputAdornment position="start">Способ прийому платежів:</InputAdornment>}
         
       />

        </FormControl>
       
      <FormControl sx={{ m: 1,  width: '49ch' }} size="small" variant="outlined">
                <OutlinedInput
                  value={sort}
                  type="sort"
                  name="sort"
                  placeholder='Вищий'
                  title='sort'
                  onChange={handleChange}
                  required
          
 
                  startAdornment={<InputAdornment position="start">Сорт:</InputAdornment>}
         
       />

        </FormControl>
       
               <FormControl sx={{ m: 1,  width: '49ch' }} size="small" variant="outlined">
                <OutlinedInput
                  value={clasification}
                  type="clasification"
                  name="clasification"
                  placeholder='Зерниста'
                  title='clasification'
                  onChange={handleChange}
                  required
          
 
                  startAdornment={<InputAdornment position="start">Кваліфікація:</InputAdornment>}
         
       />

              </FormControl>
              
                    <FormControl sx={{ m: 1,  width: '49ch' }} size="small" variant="outlined">
                <OutlinedInput
                  value={field}
                  type="field"
                  name="field"
                  placeholder='Червона ікра'
                  title='field'
                  onChange={handleChange}
                  required
          
 
                  startAdornment={<InputAdornment position="start">Види:</InputAdornment>}
         
       />

              </FormControl>
              
              <FormControl sx={{ m: 1,  width: '49ch' }} size="small" variant="outlined">
                <OutlinedInput
                  value={packadge}
                  type="packadge"
                  name="packadge"
                  placeholder='Жерстяна банка'
                  title='packadge'
                  onChange={handleChange}
                  required
          
 
                  startAdornment={<InputAdornment position="start">Упаковка:</InputAdornment>}
         
       />

        </FormControl>
        
            <FormControl sx={{ m: 1,  width: '49ch' }} size="small" variant="outlined">
                <OutlinedInput
                  value={type}
                  type="type"
                  name="type"
                  placeholder='Морська риба'
                  title='type'
                  onChange={handleChange}
                  required
          
 
                  startAdornment={<InputAdornment position="start">Тип:</InputAdornment>}
         
       />

        </FormControl>
       
       <FormControl sx={{ m: 1,  width: '49ch' }} size="small" variant="outlined">
                <OutlinedInput
                  value={weight}
                  type="weight"
                  name="weight"
                  placeholder='81'
                  title='weight'
                  onChange={handleChange}
                  required
          
 
                  startAdornment={<InputAdornment position="start">Вага:</InputAdornment>}
         
       />

        </FormControl>
      
        </ListContainer></Item>
        </Grid >
          <Grid xs="auto" m={1} >
          <Item> <InfoContainer>
          <div>
           
                <img src={photo} alt='фото' width={211} height={294} />
                <img src={pictute2} alt='фото' width={211} height={294} />
                <img src={pictute3} alt='фото'width={211} height={294}/>
          </div>
              <div>
                 <TextField
          sx={{ m: 1,  width: '81ch' }}
          value={description}
                  type="description"
                  name="description"
                  placeholder='СПЕЦПОСОЛ 80г - Оптимальная порция для застолья. Такого количества икры хватит на целых 10 тарталеток!
Это свежая икра, засоленная по специальной рецептуре. Икра с Аляски, она имеет отличный вкус, и при этом справедливую цену.Может быть представлена икрой форели или икрой атлантического лосося.
Икра «Спецпосол» производится на специализированном заводе, который сертифицирован в соответствии с межд'
                  title='description'
                  onChange={handleChange}
                  required
          multiline
          rows={7}
         
        />
           
              </div>
              <><AddButton type="submit"  > Зберігти і вийти</AddButton>
                <Link to={`/products`}>
              < BackButton> Назад</BackButton>
                </Link></>
              
        </InfoContainer></Item>
        </Grid>
        
      </Grid>
        
       
      </form>
      </Form>
  );
}