package com.hexaware.cricket.service;

import java.util.List;
import com.hexaware.cricket.entity.Player;

public interface PlayerService {

    Player savePlayer(Player player);

    List<Player> getAllPlayers();

    Player getPlayerById(Integer id);

    Player updatePlayer(Integer id, Player player);

    void deletePlayer(Integer id);
}