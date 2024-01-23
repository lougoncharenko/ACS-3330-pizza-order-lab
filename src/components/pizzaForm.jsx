import React, { useState } from "react";
import "./PizzaForm.css"; // Import your CSS file

function PizzaForm() {
  const [name, setName] = useState("");
  const [peperoni, setPeperoni] = useState(false);
  const [sausage, setSausage] = useState(false);
  const [extraCheese, setExtraCheese] = useState(false);
  const [peppers, setPeppers] = useState(false);
  const [onions, setOnions] = useState(false);

  return (
    <div className="PizzaFormContainer">
      <div className="pizzaOptions">
        <h1>Pizza Order</h1>
        <form>
        <label>
            Name:
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <p>Toppings</p>
          <label>
            <input
              type="checkbox"
              checked={peperoni}
              onChange={() => setPeperoni(!peperoni)}
            />
            Peperoni
          </label>
          <label>
            <input
              type="checkbox"
              checked={sausage}
              onChange={() => setSausage(!sausage)}
            />
            Sausage
          </label>
          <label>
            <input
              type="checkbox"
              checked={extraCheese}
              onChange={() => setExtraCheese(!extraCheese)}
            />
            Extra Cheese
          </label>

          <label>
            <input
              type="checkbox"
              checked={peppers}
              onChange={() => setPeppers(!peppers)}
            />
            Peppers
          </label>

          <label>
            <input
              type="checkbox"
              checked={onions}
              onChange={() => setOnions(!onions)}
            />
            Onions
          </label>
          <button type="submit">Submit</button>
        </form>
      </div>
      <div className="pizzaSummary">
        <h2>Order Summary</h2>
        <p>Name: {name}</p>
        <ul>
          {peperoni && <li>Pepperoni</li>}
          {sausage && <li>Sausage</li>}
          {extraCheese && <li>Extra Cheese</li>}
          {peppers && <li>Peppers</li>}
          {onions && <li>Onions</li>}
        </ul>
      </div>
    </div>
  );
}

export default PizzaForm;
