import React from 'react';
import Navbar from '../Navbar';
import { useRedirect } from '../../utils/useRedirect';

const Layout = ({ children }: any) => {

  // if (typeof window !== 'undefined') {
  //   useRedirect();
  // }

  return (
    <div className="">
      <Navbar />
      {children}
    </div>
  )
}

export default Layout;
