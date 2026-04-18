# Stage 1 – Personal API Deployment (DevOps Track)

## Project Overview

This project is a simple REST API built using Node.js and Express and deployed on a Linux VPS (Ubuntu).

The objective of this task is to demonstrate practical DevOps skills, including building a backend service, deploying it to a server, configuring a reverse proxy, and ensuring the service runs reliably in a production-like environment.

## What I Implemented

- Built a REST API with three required endpoints
- Tested the API locally before deployment
- Deployed the application to a Linux VPS
- Configured Nginx as a reverse proxy
- Used PM2 to manage and persist the application process
- Ensured the API is publicly accessible via port 80
- Structured responses to meet JSON and performance requirements

## Tech Stack

- Node.js
- Express.js
- Ubuntu Linux VPS (Cloud Server)
- Nginx (Reverse Proxy)
- PM2 (Process Manager)
- Git & GitHub

## API Endpoints

All endpoints return:
- Content-Type: application/json
- HTTP Status: 200
- Response time under 500ms

### GET /

```json
{
  "message": "API is running"
}
```
GET /health

```
{
  "message": "healthy"
}
```
### GET /me

```
{
  "name": "Chidera Pamela Alaeto",
  "email": "chideraalaeto92@gmail.com",
  "github": "https://github.com/ChideraA080"
}
```
### Live Deployment

Base URL:
```
http://YOUR-SERVER-IP
```

### Project Execution (Step-by-Step)

1. Local Development
- Initialized Node.js project
- Installed Express
- Created API endpoints
- Tested locally

Commands:
```
npm init -y
npm install express
node index.js
```
2. Version Control (GitHub)
Initialized Git repository
Pushed code to GitHub

Commands:
```
git init
git add .
git commit -m "Initial API setup"
git remote add origin https://github.com/ChideraA080/hng-stage1.git
git push -u origin main
```
3. Server Provisioning
Connected via SSH
Installed Node.js

Commands:
```
sudo apt update
sudo apt install nodejs npm -y
```
4. Application Deployment
Cloned repository
Installed dependencies
Tested app

Commands:
```
git clone https://github.com/ChideraA080/hng-stage1.git
cd stage1-api
npm install
node index.js
```
5. Process Management (PM2)
- Installed PM2
- Started app
- Enabled auto-start

Commands:
```
sudo npm install -g pm2
pm2 start index.js --name hng-stage1
pm2 save
pm2 startup
```
6. Nginx Reverse Proxy
- Installed Nginx
- Configured reverse proxy
- Restarted service

Commands:
```
sudo apt install nginx -y
sudo nginx -t
sudo systemctl restart nginx
```
Architecture

Client Request → Nginx (Port 80) → Node.js App (Port 3000)

Challenges Faced & Solutions
1. PM2 not restarting after reboot

Solution:
The issue was resolved by properly running the PM2 startup command and saving the process using pm2 save.

```
pm2 startup
pm2 save
```
2. Nginx 502 Bad Gateway

Solution:
- I ensured the Node.js application was running on port 3000
- I verified correct proxy_pass configuration to http://localhost:3000
- I validated Nginx configuration using nginx -t
```
sudo nginx -t
```
3. JSON response issues

Solution:
 I ensured all endpoints explicitly used:
```
res.status(200).json({...})
```
4. Port exposure issue

Solution:

- App runs internally on port 3000
- Only Nginx exposes port 80

## Key Learnings

- Gained hands-on experience deploying a Node.js application on a Linux (Ubuntu) server and understanding how backend services run in a real environment  
- Learned how to configure Nginx as a reverse proxy to securely route public traffic to an internal application  
- Understood how to use PM2 to keep applications running persistently and handle automatic restarts after failures or server reboots  
- Improved my ability to structure API endpoints correctly and ensure consistent JSON responses with proper HTTP status codes  
- Developed a better understanding of production deployment workflows, including testing, debugging, and ensuring reliability of a live service  

## Author

Name: Chidera Pamela Alaeto

Email: chideraalaeto92@gmail.com

GitHub: https://github.com/ChideraA080

## Status

API fully functional

Nginx configured

PM2 running

Deployment complete

Production ready


