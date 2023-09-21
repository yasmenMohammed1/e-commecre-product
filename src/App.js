import React, { lazy, useState } from "react";
import Navbar from "./utils/Componants/Navbar";
import "./utils/Style/main.scss";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";

const Product = lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(import("./Pages/Product")), 30);
  });
});
function App() {
  const [cart, setCart] = useState([]);
  return (
    <div className="App">
      <header className="App-header">
        <Navbar
          removeFromCart={(item, index) => {
            setCart((prev) =>
              prev.filter(
                (prevItem, prevIndex) =>
                  prevIndex + prevItem.name != index + item.name
              )
            );
          }}
          cart={cart}
        />
      </header>
      <div className="body-container">
        <Routes>
          <Route index element={<Home />} />
          <Route
            path="product"
            element={
              <React.Suspense fallback={<>...</>}>
                <Product
                  setCart={(item) => {
                    setCart((prev) => [...prev, item]);
                  }}
                />
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
