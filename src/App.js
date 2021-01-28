import React from 'react';
import pikachuBg from './assets/img/bg1.jpg';
import pokemonsBg from './assets/img/bg2.jpg';
import Header from './components/Header';
import Layout from './components/Layout';
import Footer from './components/Footer';

const App = () => {
  return (
    <>
      <Header title='header title' descr='Header descr' />
      <Layout
        id='1'
        title='Layout 1'
        urlBg={pikachuBg}
        descr='Descr 1' />
      <Layout />
      <Layout
        id='2'
        title='Layout 2'
        colorBg='gold'
        descr='Descr 2' />
      <Layout />
      <Layout
        id='3'
        title='Layout 3'
        urlBg={pokemonsBg}
        descr='Descr 3'
      />
      <Footer />
    </>
  )
};

export default App;