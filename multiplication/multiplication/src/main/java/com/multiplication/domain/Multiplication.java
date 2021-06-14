package com.multiplication.domain;

import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.ToString;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;


/**
 * This class represents a Multiplication (a * b).
 */
@RequiredArgsConstructor
@Getter
@ToString
@EqualsAndHashCode
@Entity
public final class Multiplication implements Serializable {
	
	private static final long serialVersionUID = 1L;
	
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "MULTIPLICATION_ID")
    private Long id;

    // Both factors
    private final int factorA;
    private final int factorB;

    // Empty constructor for JSON/JPA
    Multiplication() {
        this(0, 0);
    }
}
