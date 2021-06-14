package com.gamification.event;

import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.ToString;

import java.io.Serializable;

/**
 * Event received when a multiplication has been solved in the system.
 * Provides some context information about the multiplication.
 */
@RequiredArgsConstructor
@Getter
@ToString
@EqualsAndHashCode
class MultiplicationSolvedEvent implements Serializable {

    /**
	 * 
	 */
	//private static final long serialVersionUID = 1L;
	private final Long multiplicationResultAttemptId;
    private final Long userId;
    private final boolean correct;
    MultiplicationSolvedEvent(){
		this.multiplicationResultAttemptId = null;
		this.userId = null;
		this.correct = false;
    }
}
