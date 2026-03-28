import { useEffect, useState } from "react";
import { getPlayers, deletePlayer } from "../services/api";
import { useNavigate } from "react-router-dom";

export default function PlayerList() {
  const [players, setPlayers] = useState([]);
  const nav = useNavigate();

  const load = () => {
    getPlayers()
      .then(res => setPlayers(res.data))
      .catch(err => alert(err.message));
  };

  useEffect(() => { load(); }, []);

  return (
    <div className="container">
      <h2>🏏 Cricket Team Management</h2>

      <button onClick={() => nav("/add")}>Add Player</button>

      <table border="1" width="100%" style={{ marginTop: "20px" }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Jersey</th>
            <th>Role</th>
            <th>Actions</th>
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
                <button onClick={() => nav(`/edit/${p.playerId}`)}>Edit</button>

                <button onClick={() => {
                  if (window.confirm("Are you sure to delete?")) {
                    deletePlayer(p.playerId)
                      .then(() => {
                        alert("Player deleted successfully");
                        load();
                      })
                      .catch(err => alert(err.message));
                  }
                }}>
                  Delete
                </button>

              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}