import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App";
import "./index.css";
// import AppAchats from "./AppAchats";
import App from "./App";
// import { Provider } from "react-redux";
// import store from "./Redux/store";
// import { BrowserRouter } from "react-router-dom";
// import AppAchatsWithDb from "./AppAchatsWithDb";
import AppAchatsRedux from "./AppAchatsRedux";
import { Provider } from "react-redux";
import store from "./Redux/store";
// import AppEfm2023 from "./AppEfm2023";
// import { BrowserRouter } from "react-router-dom";
// import Salutaion from "./Salutation";
// import { BrowserRouter } from "react-router-dom";
// import Card from './Card';
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <Card></Card> */}
    {/* <App></App> */}
    {/* <Salutaion></Salutaion>
    <Stagiaire></Stagiaire> */}
    {/* <BrowserRouter>
    
      <App/>
    </BrowserRouter> */}
    {/* <BrowserRouter>
      <App></App>
    </BrowserRouter> */}
    {/* <AppEfm2023></AppEfm2023> */}
     {/* <Provider store={store}>
<Products></Products>
     </Provider> */}
     {/* <Provider store={store}>
    <AppAchatsRedux></AppAchatsRedux></Provider> */}
      {/* <AppAchatsWithDb></AppAchatsWithDb> */}
      <App></App>
  </React.StrictMode>
);
