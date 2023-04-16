import React from "react";
import "./App.css";
import { useDispatch } from "react-redux";
import { addProduct } from "./redux/slices/productSlice";
import { addItem } from "./redux/slices/cartSlice";

function App() {
  const dispatch = useDispatch();

  const handlerProducts = (e) => {
    e.preventDefault();
    dispatch(addProduct("product"));
  };

  const handlerCart = (e) => {
    e.preventDefault();
    dispatch(addItem("item"));
  };
  return (
    <div className="App">
      <h1>Template PF</h1>
      <button onClick={handlerProducts}>Create product</button>
      <button onClick={handlerCart}>Add to cart</button>
    </div>
  );
}

export default App;
