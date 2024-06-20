import React from "react";
import { Helmet } from "react-helmet";
import "./App.css";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <title>Dibyanjaya's Portfolio</title>
        <meta
          name="description"
          content="My personal react portfolio ~ Dibyanjaya"
        />
        <meta
          name="keywords"
          content="portfolio, react, Dibyanjaya, web development, developer"
        />
        <meta property="og:title" content="Dibyanjaya's Portfolio" />
        <meta
          property="og:description"
          content="My personal react portfolio ~ Dibyanjaya"
        />
        <meta property="og:image" content="%PUBLIC_URL%/og-image.png" />
        <meta property="og:url" content="https://www.yourwebsite.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Dibyanjaya's Portfolio" />
        <meta
          name="twitter:description"
          content="My personal react portfolio ~ Dibyanjaya"
        />
        <meta name="twitter:image" content="%PUBLIC_URL%/twitter-image.png" />
      </Helmet>
      <Home />
    </>
  );
}

export default App;
