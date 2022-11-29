import "./styles.css";

export default function App() {
  let gift = ["Mate", "Termo", "Botella", "Pelota"];
  let arrGift = gift.map((gift) => {
    return (
      <li>
        <h3>{gift}</h3>
      </li>
    );
  });
  return (
    <div className="App">
      <h1>Regalos:</h1>
      <ul>{arrGift}</ul>
    </div>
  );
}
