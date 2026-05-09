# Wanderlust

A production-style microservices-based travel booking application built using Java Spring Boot, Spring Cloud, JWT Authentication, Docker, and React.

The project demonstrates real-world backend engineering concepts such as API Gateway, Service Discovery, JWT Security, Dockerized microservices, and distributed system architecture.

---

# Project Architecture

Frontend (React/Vite)
↓
API Gateway
↓
Microservices
├── User Service
├── Booking Service
└── Eureka Service Registry
↓
MySQL

---

# Project Structure

Wanderlust/
│
├── wanderlust-backend/
│   ├── api-gateway/
│   ├── booking-service/
│   ├── user-service/
│   └── service-registry/
│
├── wanderlust-frontend/
│
├── docker-compose.yml
├── .gitignore
└── README.md

---

# Tech Stack

## Backend

* Java
* Spring Boot
* Spring Security
* Spring Cloud Gateway
* Eureka Server
* JWT Authentication
* Maven
* REST APIs

## Frontend

* React
* Vite
* Axios
* React Router DOM

## Database

* MySQL

## DevOps & Tools

* Docker
* Docker Compose
* Git
* GitHub

---

# Features

## User Service

* User Registration
* User Login
* JWT Token Generation
* Authentication Flow

## API Gateway

* Centralized Routing
* JWT Validation
* Protected API Access

## Eureka Server

* Service Registration
* Service Discovery

## Booking Service

* Booking Microservice Structure
* REST API Setup

## Docker Setup

* Multi-container architecture
* Shared Docker network
* Service dependency management
* MySQL container integration

---

# Docker Compose Services

The project uses Docker Compose to orchestrate multiple containers:

* mysql
* service-registry
* api-gateway
* user-service
* booking-service

---

# Setup Instructions

## Clone Repository

git clone https://github.com/sant0034/wanderlust.git

cd wanderlust

---

# Run Project Using Docker

## Start Containers

docker compose up --build

## Stop Containers

docker compose down

---

# Eureka Dashboard

http://localhost:8761

---

# API Gateway

http://localhost:8080

---

# API Endpoints

## User Registration

POST /register

## User Login

POST /login

---

# Dockerized Microservices

All backend services are containerized and connected through a shared Docker network using Docker Compose.

---


# Engineering Concepts Demonstrated

* Microservices Architecture
* API Gateway Pattern
* Service Discovery
* JWT Authentication
* RESTful APIs
* Docker Containerization
* Docker Networking
* Distributed Systems Basics
* Multi-service Orchestration

---

# Future Improvements

* OpenFeign Client
* Role-based Authentication
* Redis Caching
* Kafka/RabbitMQ
* CI/CD Pipeline
* Kubernetes Deployment
* Cloud Deployment
* Monitoring & Logging

---

# Author

Santosh Yadav
