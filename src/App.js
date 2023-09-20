import React, { lazy } from "react";
import Navbar from "./utils/Componants/Navbar";
import "./utils/Style/global.css";
import "./utils/Style/main.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";

const Product = lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(import("./Pages/Product")), 30000);
  });
});
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
      </header>
      <div className="body-container">
        <Routes>
          <Route index element={<Home />} />
          <Route
            path="product"
            element={
              <React.Suspense fallback={<>...</>}>
                <Product />
              </React.Suspense>
            }
          />
          <Route path="*" element={<>404</>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
