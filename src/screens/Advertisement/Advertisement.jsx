import * as React from 'react';
import  { useEffect} from "react";
import {  useDispatch } from "react-redux";
import { fetchProducts } from 'redux/user/operations';

import ProductList from "components/ProductList/ProductList";


const Home = () => {
   const dispatch = useDispatch();
  
  useEffect(() => {
    
    dispatch(fetchProducts());
  }, [dispatch]);

  

  return (<>
      
           <ProductList />
    </>) 
}

export default Home;