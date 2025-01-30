# UniGo: Ride-Sharing for University Students

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

UniGo is a ride-sharing application designed specifically for university students, built using the MERN stack (MongoDB, Express.js, React, Node.js) with Vite for the frontend. It aims to connect students going in the same direction, making commuting easier, more affordable, and eco-friendly.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Introduction

UniGo simplifies transportation for university students by providing a platform to connect with others heading to the same destination. Whether it's going to campus, a social event, or back home, UniGo helps students find rides, share costs, and build a stronger community. This project leverages the power of the MERN stack and the speed of Vite to deliver a seamless and responsive user experience.

## Features

- **User Authentication:** Secure signup and login for students.
- **Ride Creation:** Students can post their ride details, including origin, destination, date, time, and available seats.
- **Ride Search:** Students can search for available rides based on their destination and schedule.
- **Ride Request:** Students can request to join a ride.
- **Real-time Chat:** Integrated chat system for riders and drivers to communicate.
- **Cost Sharing:** Automatic calculation of shared costs based on distance and number of passengers.
- **Profile Management:** Students can manage their profiles, including personal information and ride history.
- **Notifications:** Real-time notifications for ride requests, confirmations, and updates. (Future Implementation)
- **Map Integration:** Interactive map to visualize ride routes and locations. (Future Implementation)

## Technologies Used

- **Frontend:** React, Vite, HTML, CSS, JavaScript
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Other:** (Mention any other technologies used, e.g., specific UI libraries, mapping APIs, etc.)

## Installation

1. **Clone the repository:**

```bash
git clone [https://github.com/YOUR_USERNAME/UniGo.git](https://github.com/YOUR_USERNAME/UniGo.git)  # Replace with your repository URL
```

2.  **Navigate to the project directory:**

<!-- end list -->

```bash
cd UniGo
```

3.  **Install server-side dependencies:**

<!-- end list -->

```bash
cd server  # Assuming your backend is in a folder named "server"
npm install
```

4.  **Install client-side dependencies:**

<!-- end list -->

```bash
cd client # Assuming your frontend is in a folder named "client"
npm install
```

5.  **Configure environment variables:**

<!-- end list -->

- Create a `.env` file in the `server` directory and add your MongoDB connection string and other necessary environment variables (e.g., JWT secret). Example:

<!-- end list -->

```
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

6.  **Run the application:**

<!-- end list -->

- **Server:**

<!-- end list -->

```bash
cd server
npm start  # Or nodemon server.js if you are using nodemon
```

- **Client:**

<!-- end list -->

```bash
cd client
npm run dev # Uses vite for development
```

## Usage

(Provide a brief guide on how to use the application. Include screenshots if possible.)

1.  Open your web browser and navigate to `http://localhost:5173` (or the port where your client is running).
2.  Sign up or log in to your account.
3.  Explore the available rides or create your own.
4.  Connect with other students and enjoy your ride\!

## Contributing

Contributions are welcome\! Please open an issue or submit a pull request.

1.  Fork the repository.
2.  Create a new branch for your feature.
3.  Make your changes.
4.  Submit a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](https://www.google.com/url?sa=E&source=gmail&q=LICENSE) file for details.

## Contact

Your Name / Team Name
Your Email / Contact Information

## How to Fork and Clone

**Forking (Creating a copy on your GitHub account):**

1. Go to the original repository on GitHub (e.g., `https://github.com/YOUR_USERNAME/UniGo.git`).
2. Click the "Fork" button in the top right corner. This will create a copy of the repository in your GitHub account.

**Cloning (Downloading the repository to your local machine):**

1. **After forking (or if you're cloning the original repository directly):** Go to the repository's page on GitHub (either your fork or the original).
2. Click the "Code" button (green button).
3. Copy the URL provided (you can choose HTTPS or SSH).
4. Open your terminal or command prompt.
5. Navigate to the directory where you want to clone the repository.
6. Run the `git clone` command followed by the copied URL:

```bash
git clone https://github.com/YOUR_USERNAME/UniGo.git  # Example using HTTPS
# OR
git clone git@github.com:YOUR_USERNAME/UniGo.git # Example using SSH
```

This will download the repository to your local machine. You can then navigate into the project directory and start working on it. Remember to replace `YOUR_USERNAME/UniGo.git` with the actual URL of the repository.
