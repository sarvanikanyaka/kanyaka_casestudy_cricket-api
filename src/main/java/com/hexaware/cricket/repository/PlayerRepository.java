package com.hexaware.cricket.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.hexaware.cricket.entity.Player;

public interface PlayerRepository extends JpaRepository<Player, Integer>{

}