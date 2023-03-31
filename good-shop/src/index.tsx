import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { UserProvider } from './contexts/User';
import { HomeProvider } from './contexts/Home';
import { MallProvider } from './contexts/Mall';
import { CartProvider } from './contexts/Cart';
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter } from 'react-router-dom';

const basename = window.location.pathname.split('/v/')[0] + '/v/';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <HomeProvider>
      <MallProvider>
        <CartProvider>
          <UserProvider>
            <ChakraProvider>
              <BrowserRouter basename={basename}>
                <App />
              </BrowserRouter>
            </ChakraProvider>
          </UserProvider>
        </CartProvider>
      </MallProvider>
    </HomeProvider>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
