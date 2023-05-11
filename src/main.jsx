import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Auth0Provider } from '@auth0/auth0-react'

// const domain = process.env.REACT_APP_AUTH0_DOMAIN;
// const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Auth0Provider
    domain="dev-yha5anxudy7534wm.us.auth0.com"
    clientId="bHgj4h8jOIP8FrpULkT4HdpvzIThUDc3"
    redirectUri={window.location.origin}
    >
    <App />
    </Auth0Provider>
  </React.StrictMode>,
)
