import React, { useState } from "react";
import Product from "./Product";
import "./Product.css";
import Cart from "./Cart";

function ListProduct() {
  const [dataProduct, setDataProduct] = useState([
    { id: 1, name: "Cơm gà", image: "1.PNG", price: 120000 },
    { id: 2, name: "Gà rán", image: "2.PNG", price: 120000 },
    { id: 3, name: "Salat Cá Hồi", image: "3.PNG", price: 240000 },
    { id: 4, name: "Súp Bí Đỏ", image: "4.PNG", price: 140000 },
    { id: 5, name: "Salat Rau", image: "5.PNG", price: 100000 },
    { id: 6, name: "Pizza", image: "6.PNG", price: 220000 },
  ]);

  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <div>
      <h1>Shopping Cart</h1>

      <div className='shopping'>
        <i
          className='fa-solid fa-cart-shopping'
          onClick={() => setIsCartOpen(true)}
        ></i>
        <span className='quantity'>0</span>
      </div>

      <div>
        <div className='list-product'>
          {dataProduct.map((element, index) => (
            <Product key={index} elementProduct={element} />
          ))}
        </div>
      </div>

      {isCartOpen && <Cart setIsCartOpen={setIsCartOpen} />}
    </div>
  );
}

export default ListProduct;
