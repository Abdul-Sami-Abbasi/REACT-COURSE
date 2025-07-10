import React, { useState } from 'react';

const ShoppingList = () => {
  // Step 1: State for shopping items
  const [items, setItems] = useState([]);

  // Step 2: State for form inputs
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState('');

  // Step 3: Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (name.trim() === '' || quantity.trim() === '') return;

    const newItem = { name, quantity };
    setItems([...items, newItem]);

    // Clear input fields
    setName('');
    setQuantity('');
  };

  return (
    <div>
      <h1>Shopping List</h1>

      {/* Form to add new item */}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Item name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="text"
          placeholder="Quantity"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        />

        <button type="submit">Add Item</button>
      </form>

      {/* Display shopping items */}
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item.name} — {item.quantity}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShoppingList;
