import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Register from "./pages/Register";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import { Container, Typography } from "@mui/material";
import Header from "./pages/Wireframe";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Drawer from "@mui/material/Drawer";

import logo from "./signin.JPG";
import black from "./black.jpg";
import white from "./white.jpg";
import rectangle from "./Rectangle.png";
import playbtn from "./Group.png";
import poly from "./Polygon.png";
import rec2 from "./retangle2.png";
import rec3 from "./smallRec.png";
import Footer from "./pages/F/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Bodylayouts from "./pages/Bodylayouts";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <>
  <App />
    {/* <Routes>
      <Route path="/" element={<Header />}>
        <Route path="" element={<App />} />
      </Route>
      <Route path="/sample" element={<Bodylayouts />} />
    </Routes> */}

    {/* <Router>
      <Routes>
        <Route path="/" element={<App />} />

        <Route path="/sample" element={<Bodylayouts />} />
      </Routes>
    </Router> */}
      </>
);

reportWebVitals();
