
const players = [
  { name: "ياب ستام في التمام", coins: 100, pos: 1 },
  { name: "فريق كبير", coins: 100, pos: 2 },
  { name: "The Jokers", coins: 100, pos: 3 },
  { name: "الاسطوره انتوني", coins: 100, pos: 4 },
  { name: "♪♪", coins: 100, pos: 5 },
  { name: "Elgeheny FC", coins: 100, pos: 6 },
  { name: "الاسطى عبدو", coins: 100, pos: 7 },
  { name: "joee", coins: 100, pos: 8 },
  { name: "asewin", coins: 100, pos: 9 },
  { name: "zyad 97", coins: 100, pos: 10 },
];

const multipliers = [1.5, 1.6, 1.7, 1.8, 1.9, 2.0, 2.1, 2.2, 2.3, 2.4];
let round = 1;

function renderStandings() {
  const list = players
    .map(p => `<li>${p.name} - Coins: ${p.coins}</li>`)
    .join("");
  document.getElementById("standings").innerHTML = `<h3>Standings</h3><ul>${list}</ul>`;
}

function renderLeaderboard() {
  const sorted = [...players].sort((a, b) => b.coins - a.coins);
  const list = sorted
    .map(p => `<li>${p.name} - Coins: ${p.coins}</li>`)
    .join("");
  document.getElementById("leaderboard").innerHTML = `<h3>Leaderboard</h3><ul>${list}</ul>`;
}

function renderBettingPanel() {
  let html = "<h3>Betting Panel</h3><p>(Demo only — bets not active yet)</p>";
  document.getElementById("betting-panel").innerHTML = html;
}

function renderSharkChipPanel() {
  let html = "<h3>Shark Chip</h3><p>(Demo only — shark chip not active yet)</p>";
  document.getElementById("shark-chip-panel").innerHTML = html;
}

function nextRound() {
  round++;
  alert("Starting Round " + round);
  render();
}

function render() {
  renderStandings();
  renderBettingPanel();
  renderSharkChipPanel();
  renderLeaderboard();
}

render();
