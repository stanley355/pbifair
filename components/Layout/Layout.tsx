import React from 'react';
import Navbar from '../Navbar';
import RoadmapMobile from '../Roadmap/Mobile/RoadmapMobile';
import useResponsive from '../../utils/useResponsive';


const Layout = ({ children }: any) => {

  const {isDesktop} = useResponsive()
  return (
    <div className="">
      <Navbar />
      {children}
      {!isDesktop && <RoadmapMobile />}
    </div>
  )
}

export default Layout;
