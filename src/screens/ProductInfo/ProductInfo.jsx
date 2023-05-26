import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

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
    
    const {  name, category, perCategory, price, discount } = item;
    return (
            
          <>
          <div >

            <div key={id}>
               <p>{id}</p>
              <p>{name}</p>
                            <p>{perCategory}</p>
                            <p>{price}</p>
                            <p>{discount}</p>
                            <p>{category}</p>
           
      </div>
                </div>
                </>
        );
          
         
 
}

export default ProductDetails;