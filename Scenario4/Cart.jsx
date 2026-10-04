import { useState } from "react";

function Cart() {
  const [cart, setCart] = useState([
    {
      id: 1,
      name: "Laptop",
      price: 900,
      quantity: 1,
    },
  ]);

  function increase(id) {
    setCart(
      cart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item,
      ),
    );
  }

  function decrease(id) {
    setCart(
      cart
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item,
        )
        .filter((item) => item.quantity > 0),
    );
  }

  function remove(id) {
    setCart(cart.filter((item) => item.id !== id));
  }

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="page">
      <h1>Shopping Cart</h1>

      {cart.length === 0 && <p>Your cart is empty.</p>}

      {cart.map((item) => (
        <div className="cart-item" key={item.id}>
          <div>
            <h3>{item.name}</h3>
            <p>${item.price}</p>
          </div>

          <div>
            <button onClick={() => decrease(item.id)}>-</button>

            <span> {item.quantity} </span>

            <button onClick={() => increase(item.id)}>+</button>
          </div>

          <button onClick={() => remove(item.id)}>Remove</button>
        </div>
      ))}

      <h2>Total: ${total}</h2>
    </div>
  );
}

export default Cart;
