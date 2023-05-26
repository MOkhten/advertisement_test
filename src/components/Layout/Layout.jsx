import { Outlet } from 'react-router-dom';
import { Suspense } from "react";
import { Spiner } from 'components/Spiner';

const Layout = () => {

    return (
      <div>
        
         <Suspense fallback={<Spiner/>}>
        <Outlet />
      </Suspense>
            </div>
)
};

export default Layout;