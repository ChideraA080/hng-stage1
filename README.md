# Hng-Stage 1 – Personal API Deployment 

## Project Overview

This project is a simple REST API built using Node.js and Express and deployed on a Linux VPS (Ubuntu) as part of a DevOps training task.

The objective was to demonstrate practical DevOps skills by building a backend service, testing it locally, and deploying it to a production-like environment. This included configuring Nginx as a reverse proxy, managing the application process with PM2, and ensuring the service remains reliably available.

Through this project, I implemented a complete deployment workflow from development to live deployment while ensuring proper API structure, performance, and system reliability.

## Architecture Diagram

![ Architecture Diagram](https://github.com/ChideraA080/hng-stage1/blob/main/Hng%20_Stage1%20Screenshots/Stage1%20Architceture%20Diagram.png)

This architecture diagram illustrates how the REST API request flows from the user to the backend server in the deployed environment.
This architecture diagram illustrates how the REST API request flows from the user to the backend server in the deployed environment.

When a user accesses the application using the public IP address (http://18.234.50.53), the request first reaches the server via HTTP on port 80. This request is handled by Nginx, which acts as a reverse proxy and entry point to the system.

Nginx is responsible for receiving all incoming traffic and forwarding it to the Node.js application running internally on port 3000. This ensures that the backend service is not directly exposed to the internet, improving both security and control over traffic flow.

Once the request is forwarded, the Node.js and Express application processes it by matching the appropriate endpoint (/, /health, /me) and returning a structured JSON response.

The application process is managed by PM2, which ensures the service remains running continuously, restarts automatically if it crashes, and maintains high availability even after server reboots.

Finally, the response travels back through the same path - from Node.js → Nginx → user - completing the request-response cycle.

Flow Summary

User → Public IP (HTTP :80) → Nginx Reverse Proxy → Node.js App (Port 3000) → Response returned to user

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
- HTTP Status: 200 (when authorized)
- Response time under 500ms

### GET /
```json id="root1"
{
  "message": "API is running"
}
```
### Confirmation API Running GET /
![ API Running](https://github.com/ChideraA080/hng-stage1/blob/main/Hng%20_Stage1%20Screenshots/API%20Running.png)

GET /health
```
{
  "message": "healthy",
  "cpu": "10%",
  "memory": "64MB"
}
```
### API Running GET/health
![API Running/health](https://github.com/ChideraA080/hng-stage1/blob/main/Hng%20_Stage1%20Screenshots/API%20Running%20Health.png)

### GET /me

```
{
  "name": "Chidera Pamela Alaeto",
  "email": "chideraalaeto92@gmail.com",
  "github": "https://github.com/ChideraA080//hng-stage1"
}
```
### Confirmation API Running GET/Me
![API Running/me](https://github.com/ChideraA080/hng-stage1/blob/main/Hng%20_Stage1%20Screenshots/API%20Running%20Me.png)


### Live Deployment

Base URL:
```
http://18.234.50.53
```

### Project Execution (Step-by-Step)

1. Local Development

- I initialized a Node.js project to set up the foundation of the API  
- I installed Express to handle routing and build the endpoints  
- I created the required API endpoints and ensured each returned the correct JSON response with a 200 status code  
- I tested the API locally using the browser and curl to confirm everything was working as expected before deployment  

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

- Cloned repository from GitHub
- Installed dependencies
- Verified application runs on port 3000

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

## Cost Management & Resource Cleanup

To avoid unnecessary cloud charges, the AWS EC2 Ubuntu Linux server used for this project was terminated after successful implementation and validation of all requirements.

This was done after confirming that:

- The REST API was correctly built using Node.js and Express
- All required API endpoints were working as expected
- Nginx was properly configured as a reverse proxy and serving requests on port 80
- The application was successfully deployed and accessible on the Ubuntu VPS
- PM2 was correctly managing the application process and ensuring uptime
- The system was stable and met all deployment requirements

The instance was intentionally shut down to prevent ongoing AWS billing, as this project does not require continuous uptime.

Note: The live environment is no longer active. If the API endpoint or server URL is accessed, it may not resolve because the EC2 instance has been terminated after successful testing and submission readiness.

## Screenshots

### PM2 Status
![PM2 Status](https://github.com/ChideraA080/hng-stage1/blob/main/Hng%20_Stage1%20Screenshots/PM2%20status.jpg)

### PM2 Process
![PM2 Process](https://github.com/ChideraA080/hng-stage1/blob/main/Hng%20_Stage1%20Screenshots/IMG-20260418-WA0027.jpeg)

### Nginx Config Success 
![Nginx Config Running](https://github.com/ChideraA080/hng-stage1/blob/main/Hng%20_Stage1%20Screenshots/IMG-20260418-WA0032.jpg)

## Status

API fully functional

Nginx configured

PM2 running

Deployment complete

Production ready

## Author

Name: Chidera Pamela Alaeto

Email: chideraalaeto92@gmail.com

GitHub: https://github.com/ChideraA080/hng-stage1


