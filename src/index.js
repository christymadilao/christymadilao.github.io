import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Helmet } from "react-helmet";
import profile from "./components/profile.jpg";
import "./fonts/Fontspring-DEMO-apparel-black.otf";
import "./fonts/Fontspring-DEMO-apparel-bold.otf";
import "./fonts/Fontspring-DEMO-apparel-regular.otf";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Christy Madilao</title>
      <link rel="icon" type="image/jpg" href={profile} sizes="16x16" />
      <link rel="icon" type="image/jpg" href={profile} sizes="32x32" />
    </Helmet>
    <App />
  </React.StrictMode>
);
