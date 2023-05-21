import { useState } from "react";

function App() {
  const carList = ["Mercedes S600", "BMW", "Honda", "Suzuki"];
  const colorList = ["Black", "Yellow", "Red", "Blue"];
  const [selectedCar, setSelectedCar] = useState({
    car: carList[0],
    color: colorList[0],
  });
  const handleChange = (e) => {
    setSelectedCar({ ...selectedCar, [e.target.name]: e.target.value });
  };
  return (
    <div className="App">
      <div>
        Select a car
        <select name="car" onChange={handleChange}>
          {carList.map((car, index) => (
            <option key={index} value={car}>
              {car}
            </option>
          ))}
        </select>
      </div>
      <div>
        Select a color
        <select name="color" onChange={handleChange}>
          {colorList.map((color, index) => (
            <option key={index} value={color}>
              {color}
            </option>
          ))}
        </select>
      </div>

      <p>
        Your select a {selectedCar.car} - {selectedCar.color}
      </p>
    </div>
  );
}

export default App;
