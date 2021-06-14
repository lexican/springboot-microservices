# springboot-microservices
Springboot Microservices

This is an Event driven Springboot microservices project that contains. 

1) Multiplication microservice that generates two random numbers for the end user to multiply.
2) Gamification microservice that assigns badge to user when the user gets the answer right.

The multiplication microservice communicate with the Gamification microservice using Message broker(RabbitMQ) while the Gamification microservice communicate with the Multiplication microservice using RestClient.

3) Service registry both registers itself with the registry and uses it to resolve its own host. Service Registry make our microservices as Eureka Clients so that as soon as we start a microservice it will get registered with Eureka Server automatically with a logical Service ID. Then, the other microservices, which are also Eureka Clients, can use Service ID to invoke REST endpoints.
4) Gateway aims to provide a simple, yet effective way to route to APIs and provide cross cutting concerns to them such as: security, monitoring/metrics, and resiliency.

5) The frontend built with React Js consumes the microservices.

To run the project perform the following actions.

1) git clone https://github.com/lexican/springboot-microservices.git
2) cd gamificaton, mvn install, mvn spring-boot:run
3) cd multiplication, mvn install, mvn spring-boot:run
4) cd service-registry, mvn install, mvn spring-boot:run
5) cd gateway, mvn install, mvn spring-boot:run
6) cd frontend, npm install, npm start

go to http://localhost:3000 on your browser.

<p>Thank you!</P>




