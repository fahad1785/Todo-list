To-Do List Application
A simple and enhanced To-Do List Application built with Node.js and Express.js, featuring a RESTful API backend and a user-friendly HTML/CSS frontend. This application allows users to add, mark tasks as complete, and delete tasks seamlessly.

Features
Add new tasks with optional descriptions.
Mark tasks as complete or incomplete.
Delete tasks.
Simple web interface for easy task management.
RESTful API for backend operations.
Requirements
Before running the application, ensure you have the following installed:

Node.js (v14 or higher)
Install Node.js: https://nodejs.org/
NPM (Node Package Manager, bundled with Node.js)
Ubuntu Environment (or any compatible operating system)
For cloud deployment, you can use an AWS EC2 Instance.
Browser to access the frontend (e.g., Chrome, Firefox).
Optional: Git for version control.
Installation
Follow these steps to set up and run the application locally or on a server.

1. Clone the Repository
bash
Copy
Edit
git clone https://github.com/<your-username>/todo-app.git
cd todo-app
2. Install Dependencies
Run the following command to install all required dependencies:

bash
Copy
Edit
npm install
3. Start the Application
Launch the application with:

bash
Copy
Edit
node app.js
The server will start and listen on port 3000.

4. Access the Application
Open your browser and navigate to:

arduino
Copy
Edit
http://<YOUR_SERVER_IP>:3000
Replace <YOUR_SERVER_IP> with:

localhost if running locally.
Your EC2 public IP if deployed on AWS.
File Structure
csharp
Copy
Edit
todo-app/
├── app.js         # Main server file
├── public/
│   ├── index.html # Frontend HTML
│   └── styles.css # Optional styling
├── package.json   # Project dependencies
└── README.md      # Documentation
API Endpoints
The backend provides the following RESTful API endpoints:

Get All Tasks
GET /tasks
Returns a list of all tasks.

Add a New Task
POST /tasks
Request Body (JSON):

json
Copy
Edit
{
  "title": "Task Title",
  "description": "Task Description (Optional)"
}
Update Task (Mark as complete/incomplete)
PUT /tasks/:id
Request Body (JSON):

json
Copy
Edit
{
  "completed": true
}
Delete Task
DELETE /tasks/:id

Deployment on AWS EC2
Launch an EC2 instance with Ubuntu.
SSH into the instance:
bash
Copy
Edit
ssh -i <your-key.pem> ubuntu@<your-ec2-public-ip>
Install Node.js and Git:
bash
Copy
Edit
sudo apt update
sudo apt install -y nodejs npm git
Clone the repository and navigate to the project directory:
bash
Copy
Edit
git clone https://github.com/<your-username>/todo-app.git
cd todo-app
Install dependencies and start the application:
bash
Copy
Edit
npm install
node app.js
Ensure port 3000 is open in your EC2 security group.
Screenshots
1. Task List View

2. Adding a New Task

Contributing
Contributions are welcome! Please follow these steps:

Fork this repository.
Create a new branch (feature/my-feature).
Commit your changes (git commit -m "Add my feature").
Push to the branch (git push origin feature/my-feature).
Open a Pull Request.
License
This project is licensed under the MIT License. See the LICENSE file for details.
