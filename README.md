# Inventory Management System

## Overview

The Inventory Management System is a full-stack web application developed to manage products, customers, orders, and inventory efficiently. The application provides a user-friendly interface for managing inventory operations and ensures data integrity through business validation rules.

This project was developed as part of a technical assessment using FastAPI, React, PostgreSQL, Docker, and Render deployment.

---

## Features

### Product Management

* Add new products
* View all products
* Manage product inventory
* Unique SKU validation

### Customer Management

* Add customers
* View customer records
* Unique email validation

### Order Management

* Create customer orders
* Calculate total order amount
* Track order history

### Inventory Tracking

* Automatic stock reduction when an order is placed
* Prevents order creation when stock is insufficient
* Real-time inventory updates

---

## Technology Stack

### Backend

* FastAPI
* SQLAlchemy
* PostgreSQL
* Uvicorn

### Frontend

* React.js
* Axios
* Vite

### Database

* PostgreSQL

### Deployment

* Docker
* Docker Hub
* Render

---

## Project Structure

```text
inventory-management-system/
│
├── backend/
│   ├── app/
│   │   ├── main.py
│   │   ├── models.py
│   │   ├── schemas.py
│   │   └── database.py
│   ├── requirements.txt
│   └── Dockerfile
│
├── frontend/
│   ├── src/
│   └── package.json
│
└── README.md
```

## Installation and Setup

### Backend Setup

```bash
cd backend

python -m venv venv

source venv/bin/activate

pip install -r requirements.txt

uvicorn app.main:app --reload
```

### Frontend Setup

```bash
cd frontend

npm install

npm run dev
```

---

## API Documentation

Swagger UI:

https://inventory-backend-xsxj.onrender.com/docs

---

## Deployment Links

### GitHub Repository

https://github.com/Shivam9007/inventory-management-system

### Backend API

https://inventory-backend-xsxj.onrender.com

### Frontend Application

https://inventory-management-system-1-suw8.onrender.com

### Docker Hub Image

https://hub.docker.com/r/shivamx7713/inventory-backend

---

## Business Rules Implemented

* Unique Product SKU validation
* Unique Customer Email validation
* Inventory availability validation
* Automatic stock deduction after order creation
* PostgreSQL database integration
* Environment variable configuration
* Dockerized deployment

---

## Author

**Shivam Singh**

B.Tech (CSE - AI & ML)

Galgotias University
