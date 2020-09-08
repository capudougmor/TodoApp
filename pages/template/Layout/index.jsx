import React from 'react';
import GlobalStyles from '../../styles/globals'

import Menu from '../Menu';

export default function Layout({ children }) {
  return (
    <>
      <Menu />
      {children}

      <GlobalStyles/>
    </>
  );
};

