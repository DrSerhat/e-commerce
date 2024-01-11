import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import CartProvider from './context/cartProvider.jsx';
import './index.css'
import MainLayout from './components/layouts/MainLayout.jsx';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CartProvider>
      <MainLayout>
        <App/>
      </MainLayout>
    </CartProvider>
  </React.StrictMode>,
);
