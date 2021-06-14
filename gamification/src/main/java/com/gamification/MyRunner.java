package com.gamification;


import java.util.ArrayList;
import java.util.Collection;
import java.util.Iterator;
import java.util.List;
import java.util.ListIterator;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Component;

import com.gamification.service.GameService;


@Component
public class MyRunner implements CommandLineRunner {

    private static final Logger logger = LoggerFactory.getLogger(MyRunner.class);

    @Autowired
    private GameService gameservice;

    @Override
    public void run(String...args) throws Exception {
    	
//        logger.info("# of users: {}", gameservice.count());
//
//        logger.info("All employees unsorted:");
//
//        Iterable < User > users = userservice.getAllUsers();
//        Iterator < User > iterator = users.iterator();
//        while (iterator.hasNext()) {
//            logger.info("{}", iterator.next().toString());
//        }

        logger.info("------------------------");

    }
}
