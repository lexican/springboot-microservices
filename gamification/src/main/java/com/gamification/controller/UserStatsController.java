
package com.gamification.controller;

import com.gamification.domain.GameStats;
import com.gamification.service.GameService;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

/**
 * This class implements a REST API for the Gamification User Statistics service.
 */
@RestController
@RequestMapping("/stats")
class UserStatsController {

    private final GameService gameService;

    public UserStatsController(final GameService gameService) {
        this.gameService = gameService;
    }
    
    //@CrossOrigin(origins = "http://localhost:3000")
    @GetMapping
    public GameStats getStatsForUser(@RequestParam("userId") final Long userId) {
        return gameService.retrieveStatsForUser(userId);
    }
}
