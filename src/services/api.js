import axios from "axios";

const API = "http://localhost:8080/api/players";

export const getPlayers = async () => {
  try {
    return await axios.get(API);
  } catch (e) {
    throw new Error("Failed to fetch players");
  }
};

export const getPlayerById = async (id) => {
  try {
    return await axios.get(`${API}/${id}`);
  } catch (e) {
    throw new Error("Player not found");
  }
};

export const addPlayer = async (data) => {
  try {
    return await axios.post(API, data);
  } catch (e) {
    throw new Error("Failed to add player");
  }
};

export const updatePlayer = async (id, data) => {
  try {
    return await axios.put(`${API}/${id}`, data);
  } catch (e) {
    throw new Error("Failed to update player");
  }
};

export const deletePlayer = async (id) => {
  try {
    return await axios.delete(`${API}/${id}`);
  } catch (e) {
    throw new Error("Failed to delete player");
  }
};