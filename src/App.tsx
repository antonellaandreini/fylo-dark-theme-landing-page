import React, { Suspense } from 'react';
// import { BrowserRouter } from 'react-router-dom';

import '@/theme';

// import Loading from '@/components/Loading';
// import AppRoutes from '@/routes/AppRoutes';
import Navbar from './components/navbar/Navbar';
import MainPage from './pages/mainPage/MainPage';
import Footer from './components/footer/Footer';

const App = () => (
  <Suspense>
    {/* <BrowserRouter basename={import.meta.env.VITE_APP_BASE_URL}>
      <AppRoutes />
    </BrowserRouter> */}
    <Navbar />
    <MainPage />
    <Footer />
  </Suspense>
);

export default App;
