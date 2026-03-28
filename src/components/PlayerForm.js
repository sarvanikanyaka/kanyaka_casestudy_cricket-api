import { useState, useEffect } from "react";
import { addPlayer, updatePlayer, getPlayerById } from "../services/api";
import { useNavigate, useParams } from "react-router-dom";

export default function PlayerForm() {
  const [p, setP] = useState({
    playerName: "",
    jerseyNumber: "",
    role: ""
  });

  const nav = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      getPlayerById(id)
        .then(res => setP(res.data))
        .catch(err => alert(err.message));
    }
  }, [id]);

  const change = e => {
    setP({ ...p, [e.target.name]: e.target.value });
  };

  const submit = e => {
    e.preventDefault();

    if (!p.playerName || !p.jerseyNumber || !p.role) {
      alert("All fields are required");
      return;
    }

    (id ? updatePlayer(id, p) : addPlayer(p))
      .then(() => {
        alert("Player saved successfully");
        nav("/");
      })
      .catch(err => alert(err.message));
  };

  return (
    <div className="container">
      <h2>{id ? "Edit Player" : "Add Player"}</h2>

      <form onSubmit={submit}>
        <input
          name="playerName"
          placeholder="Player Name"
          value={p.playerName}
          onChange={change}
        /><br/><br/>

        <input
          name="jerseyNumber"
          placeholder="Jersey Number"
          value={p.jerseyNumber}
          onChange={change}
        /><br/><br/>

        <input
          name="role"
          placeholder="Role (Batsman/Bowler)"
          value={p.role}
          onChange={change}
        /><br/><br/>

        <button type="submit">Save</button>
        <button type="button" onClick={() => nav("/")}>Back</button>
      </form>
    </div>
  );
}