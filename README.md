# 🗂️ TaskFlow Backend

A lightweight, developer-friendly **Task flow API** built with **Node.js, Express, JWT**, and **Prisma/PostgreSQL**.

> 🔐 Auth with demo login (email + name only)  
> ✅ Create, assign, and manage tasks and subtasks  
> 🚀 JWT-secured APIs, no session or OAuth required

---

## ⚙️ Tech Stack

- **Node.js + Express** – Minimal and fast API framework
- **Prisma ORM** – Type-safe PostgreSQL access
- **PostgreSQL** – Relational DB for tasks and users
- **JWT Auth** – Stateless token-based login
- **Docker** – Local Postgres setup

---

## 🛠️ Setup

### 1. Clone & Install

```bash
git clone https://github.com/Jishnubaburaj17/taskflow-backend.git
cd taskflow-backend
npm install
docker-compose up -d
npm run dev