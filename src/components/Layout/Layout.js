import React from 'react';
import Toolbar from '../Navigation/Toolbar';

const Layout = props => {
  return (
    <>
      <Toolbar/>
      <main className='main'>
        {props.children}
      </main>
      
    </>
  );
};

export default Layout;