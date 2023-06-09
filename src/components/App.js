import { Routes, Route} from "react-router-dom";
import { lazy } from 'react';
import Layout from "components/Layout/Layout";

const Home = lazy(() => import('screens/Advertisement/Advertisement'));
const Product = lazy(() => import("screens/Product/Product"));
const ProductInfo = lazy(() => import("screens/ProductInfo/ProductInfo"));

function App() {
   return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Product />} />
           <Route path="/products" element={<Home />} />
            <Route path="/products/:id"  element={<ProductInfo/>}/>
          <Route path="*" element={<Product />} />
          </Route>
        </Routes>
     
    </div>
  );
}

export default App;

