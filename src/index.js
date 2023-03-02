import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { AppProvider } from "./context/context";
import reportWebVitals from "./reportWebVitals";
import { Auth0Provider } from "@auth0/auth0-react";
import { UserProvider } from "./userContext";

//domain: dev-hfwhmvocsxoi62dn.us.auth0.com
//client ID:  Z70UA27FvVZzQpT1LN7JFLX6PI6BDg9C

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-hfwhmvocsxoi62dn.us.auth0.com"
      clientId="Z70UA27FvVZzQpT1LN7JFLX6PI6BDg9C"
      redirectUri={window.location.origin}
      cacheLocation="localstorage"
    >
      <UserProvider>
        <AppProvider>
          <App />
        </AppProvider>
      </UserProvider>
    </Auth0Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
