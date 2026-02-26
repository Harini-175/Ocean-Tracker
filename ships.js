// Array of ships
const ships = [
  { name: "Ocean Queen", speed: 22, direction: "NE", destination: "Singapore", eta: "14 hrs" },
  { name: "Sea Falcon", speed: 18, direction: "NW", destination: "Chennai", eta: "2 days" },
  { name: "Blue Wave", speed: 25, direction: "E", destination: "Dubai", eta: "1 day" }
];

// Function to display ships
function displayShips() {
  const container = document.querySelector(".map");
  ships.forEach(ship => {
    const card = document.createElement("div");
    card.classList.add("ship-card");
    card.innerHTML = `
      <h2>${ship.name}</h2>
      <p>Speed: ${ship.speed} knots</p>
      <p>Direction: ${ship.direction}</p>
      <p>Destination: ${ship.destination}</p>
      <p>ETA: ${ship.eta}</p>
    `;
    container.appendChild(card);
  });
}

// Run when page loads
window.onload = displayShips;