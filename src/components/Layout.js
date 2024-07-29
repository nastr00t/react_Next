import React from 'react'
import Navbar from './Navbar'
import NProgress from "nprogress"; // Importa NProgress para la barra de progreso
import nProgress from "nprogress"; // Importa nProgress, parece un error de duplicación
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import PropTypes from 'prop-types';


const Layout = ({ children,footer=true }) => {
  
  const router = useRouter();

  useEffect(() => {
    const handleRoutechange = (url) =>
    {
      NProgress.start();
     };
  });
  
  return (
    <>
      <Navbar />
      {children}
    </>
  )
}
Layout.PropTypes =
{
  children: PropTypes.node,
  footer:PropTypes.bool
};
export default Layout;