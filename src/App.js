import React from "react";
import { BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
        <Route path = "/" element={<h1>Home</h1>}/>
        <Route path = "/login" element={<h1>Login</h1>}/>
        <Route path = "/product" element={<h1>Product</h1>}/>
        <Route path = "/categories" element={<h1>Categories</h1>}/>
        <Route path = "/shopping-cart" element={<h1>Shopping Cart</h1>}/>
        <Route path = "/order-history" element={<h1>Order History</h1>}/>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;