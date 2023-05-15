import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Auth0Provider } from '@auth0/auth0-react'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Auth0Provider
    domain="dev-yha5anxudy7534wm.us.auth0.com"
    clientId="bHgj4h8jOIP8FrpULkT4HdpvzIThUDc3"
    redirectUri={"https://mashha.github.io/shopping-cart/"}
    >
    <App />
    </Auth0Provider>
  </React.StrictMode>,
)
