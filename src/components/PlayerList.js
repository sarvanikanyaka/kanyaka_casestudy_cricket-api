import { useEffect, useState } from "react";
import { getPlayers } from "../services/api";
import { useNavigate } from "react-router-dom";

export default function PlayerList() {
  const [players, setPlayers] = useState([]);
  const [search, setSearch] = useState("");
  const nav = useNavigate();

  // Load all players
  const load = () => {
    getPlayers()
      .then(res => setPlayers(res.data))
      .catch(err => alert(err.message));
  };

  useEffect(() => { load(); }, []);

  // Search by country/state
  const handleSearch = () => {
    if (!search) {
      alert("Enter country/state");
      return;
    }

    fetch(`http://localhost:8080/api/players/getPlayersByCountryOrState/${search}`)
      .then(res => res.json())
      .then(data => setPlayers(data))
      .catch(() => alert("Error fetching data"));
  };

  return (
    <div className="container">
      <h2>🏏 Cricket Team Management</h2>

      <button onClick={() => nav("/add")}>Add Player</button>

      <br/><br/>

      {/* 🔍 Search */}
      <input
        placeholder="Enter country/state"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <button onClick={handleSearch}>Search</button>
      <button onClick={load}>Reset</button>

      <table border="1" width="100%" style={{ marginTop: "20px" }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Jersey</th>
            <th>Role</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {players.map(p => (
            <tr key={p.playerId}>
              <td>{p.playerId}</td>
              <td>{p.playerName}</td>
              <td>{p.jerseyNumber}</td>
              <td>{p.role}</td>
              <td>
                <button onClick={() => nav(`/edit/${p.playerId}`)}>
                  Edit
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}