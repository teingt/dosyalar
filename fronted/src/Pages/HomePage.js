import React from 'react';
import { useSelector } from 'react-redux';
import HoaxSumbit from '../Components/HoaxSumbit';
import UserList from '../Components/UserList';

const HomePage = () => {
       const { isLoggedIn } = useSelector(store => ({isLoggedIn: store.isLoggedIn}))
       return (
       <div className="container">
        <div className="row">
         <div className="col">
          {isLoggedIn && <HoaxSumbit/>}
         </div>
        <div className="col">
              <UserList/>
         </div>
        </div>
       </div>
       );
};

export default HomePage;