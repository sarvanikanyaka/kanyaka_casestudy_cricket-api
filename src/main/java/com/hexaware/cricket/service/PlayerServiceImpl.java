package com.hexaware.cricket.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hexaware.cricket.entity.Player;
import com.hexaware.cricket.repository.PlayerRepository;

@Service
public class PlayerServiceImpl implements PlayerService {

    @Autowired
    private PlayerRepository playerRepository;

    @Override
    public Player savePlayer(Player player) {
        return playerRepository.save(player);
    }

    @Override
    public List<Player> getAllPlayers() {
        return playerRepository.findAll();
    }

    @Override
    public Player getPlayerById(Integer id) {
        return playerRepository.findById(id).orElse(null);
    }

    @Override
    public Player updatePlayer(Integer id, Player player) {

        Player existing = playerRepository.findById(id).orElse(null);

        existing.setPlayerName(player.getPlayerName());
        existing.setJerseyNumber(player.getJerseyNumber());
        existing.setRole(player.getRole());
        existing.setTotalMatches(player.getTotalMatches());
        existing.setTeamName(player.getTeamName());
        existing.setCountryStateName(player.getCountryStateName());
        existing.setDescription(player.getDescription());

        return playerRepository.save(existing);
    }

    @Override
    public void deletePlayer(Integer id) {
        playerRepository.deleteById(id);
    }
}