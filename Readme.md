# Project Setup Guide

This project consists of two main parts: **Backend** and **Frontend**. Please follow the instructions below to set up each part properly.

---

---

## About the Project

This is a full-stack authentication project built with a **PHP Laravel API** for the backend and **Next.js** for the frontend, styled using **Tailwind CSS**.

### Features

- User registration form
- User login form
- JWT token stored in cookies
- Middleware authentication for protected routes
- Posts page (visible to authenticated users)
- Fully responsive design
- Light and dark theme toggle
- Smart UI: If a valid token is already stored in cookies, user remains logged in with a smooth and beautiful UI experience

## Backend Setup (Laravel)

### Requirements

- XAMPP version 3.3.0 installed
- Composer installed

### Steps

1. Open XAMPP Control Panel.
2. Start both **Apache** and **MySQL** services.
3. Navigate to the backend project directory using your terminal.
4. Run the following command to install dependencies:

   ```bash
   composer install
   ```

5. Open phpMyAdmin from XAMPP (http://localhost/phpmyadmin).

6. Create a new database named:
next_auth

> Note: If you choose a different name, make sure to update the DB_DATABASE value inside the .env file in your backend directory accordingly.

7. In the backend directory, run the following command to create and seed the database tables:

```bash
php artisan migrate --seed
```

8. To start the Laravel API server, run:

```bash
php artisan serve
```

> Important: Always keep this terminal window running while the project is in use. XAMPP should also remain running with Apache and MySQL services started.

---

Frontend Setup (Next.js)

1. Navigate to the frontend project directory using your terminal.

2. Install the required Node modules by running:

```bash
npm install
```
---

