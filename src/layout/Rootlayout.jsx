
import { ThemeInit } from '../../.flowbite-react/init';
import Navbar from '../component/common/Navbar';
import { Outlet } from 'react-router';

const Rootlayout = () => {
    return (
        <div> 
      <ThemeInit/>
            <Navbar/>
            <Outlet/>
        </div>
    );
};

export default Rootlayout;