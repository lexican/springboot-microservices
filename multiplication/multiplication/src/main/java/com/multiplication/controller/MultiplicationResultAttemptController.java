package com.multiplication.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.multiplication.domain.MultiplicationResultAttempt;
import com.multiplication.service.MultiplicationService;

import lombok.extern.slf4j.Slf4j;

import java.util.List;
import java.util.Optional;

/**
 * This class provides a REST API to POST the attempts from users.
 */
@Slf4j
@RestController
@RequestMapping("/results")
final class MultiplicationResultAttemptController {

	private final MultiplicationService multiplicationService;
	private final int serverPort;

	@Autowired
	MultiplicationResultAttemptController(final MultiplicationService multiplicationService, @Value("${server.port}") int serverPort) {
		this.multiplicationService = multiplicationService;
		this.serverPort = serverPort;
	}

	

	// @CrossOrigin(origins = "http://localhost:3000")
	@PostMapping
	ResponseEntity<MultiplicationResultAttempt> postResult(
			@RequestBody MultiplicationResultAttempt multiplicationResultAttempt) {
		boolean isCorrect = multiplicationService.checkAttempt(multiplicationResultAttempt);
		MultiplicationResultAttempt attemptCopy = new MultiplicationResultAttempt(multiplicationResultAttempt.getUser(),
				multiplicationResultAttempt.getMultiplication(), multiplicationResultAttempt.getResultAttempt(),
				isCorrect);
		return ResponseEntity.ok(attemptCopy);
	}

	// @CrossOrigin(origins = "http://localhost:3000")
	@GetMapping
	ResponseEntity<List<MultiplicationResultAttempt>> getStatistics(@RequestParam("alias") String alias) {
		log.info("Retrieving result {} from server @ {}", serverPort);
		return ResponseEntity.ok(multiplicationService.getStatsForUser(alias));
	}

	// @CrossOrigin(origins = "http://localhost:3000")
	@GetMapping("/{resultId}")
	ResponseEntity<Optional<MultiplicationResultAttempt>> getResultById(final @PathVariable("resultId") Long resultId) {
		return ResponseEntity.ok(multiplicationService.getResultById(resultId));
	}

}
