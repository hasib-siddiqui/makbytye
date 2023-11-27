import React from "react";
import ReactDOM from "react-dom/client";
import Nav from "./Components/Nav";
import "./index.css";
import App from "./App";
import Hero from "./Components/Hero";
import Our from "./Components/Our";
import Footer from "./Components/Footer";
import Product from "./Components/Product";
import Service from "./Components/Service";
import {
  ChakraBaseProvider,
  extendBaseTheme,
  ChakraProvider,
} from "@chakra-ui/react";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <React.StrictMode>
      <ChakraProvider>
        <Nav />
        <Hero />
        <Our />
        <Product
          heading="🌐 Explore"
          subheading="Our World"
          text=" Discover innovative solutions tailored to elevate your [industry]
            experience. From cutting-edge technologies to personalized services,
            we're committed to transforming your journey with us."
          img="https://media.istockphoto.com/id/1356364287/photo/close-up-focus-on-persons-hands-typing-on-the-desktop-computer-backlit-keyboard-screens-show.webp?b=1&s=170667a&w=0&k=20&c=yCgo02F66I8b1rgmnSXTyeN42k16-rti3iWszjZijWM="
        />
        <Service 
        heading=''
        subheading=''
        img=""
        text=""
         />
        <Product
          heading="📈 Client Success Stories:"
          text="Explore success stories from clients who have experienced the [Your Company Name] difference. Their achievements reflect our dedication to delivering results and building lasting partnerships."
          img="https://media.istockphoto.com/id/1474157611/photo/predictive-analytics-data-visualization-business-forecasting-concept-data-analytics-for.jpg?s=1024x1024&w=is&k=20&c=o0YTKFqYA5DyrBIRCXe2QvKC1Hh2uv59gEaBV5Uzk3c="
        />
        <Service />
        <Footer />
      </ChakraProvider>
    </React.StrictMode>
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
