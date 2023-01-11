import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";


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
