# Next.js Project Setup

This repository contains a Next.js project built with React. Follow the steps below to set up and run the project on your local machine.

## Requirements

- **Node.js**: `v18.18.2` or higher
- **npm**: Comes with Node.js

Make sure Node.js and npm are installed. You can check their versions by running:

```bash
node -v
npm -v

Project Overview
Next.js: ^14.2.3
React: ^18
Core Technologies Used
Next.js: A React framework for building server-side rendered web applications.
Tailwind CSS: A utility-first CSS framework for styling.
Radix UI & Shadcn UI: A set of accessible, high-quality UI components.
Getting Started
Follow the instructions below to get this project up and running on your local machine.

1. Clone the Repository
Use the following command to clone the repository to your local machine:

bash

git clone https://github.com/your-username/your-repo-name.git
Replace your-username and your-repo-name with the actual GitHub repository details.

2. Navigate to the Project Directory
Change to the project directory:

bash

cd your-repo-name
3. Install Dependencies
Install the required Node.js dependencies by running:

bash

npm install
This will install all dependencies listed in the package.json file.

4. Start the Development Server
After installing the dependencies, you can start the development server:

bash

npm run dev
This will run the project in development mode. Open your browser and go to:

arduino

http://localhost:3000
The app will automatically reload if you make edits.

5. Build for Production
To create an optimized production build, use the following command:

bash

npm run build
Once the build is complete, you can start the production server:

bash

npm start
The application will be accessible at:

arduino

http://localhost:3000
Folder Structure
The following is an overview of the folder structure:

bash

/src                # Next.js page routes
/components         # Reusable UI components
/styles             # Global styles (including Tailwind CSS)
/public             # Static assets (images, etc.)
/api                # API routes
Available Scripts
In the project directory, you can run the following scripts:

npm run dev: Starts the development server.
npm run build: Builds the app for production.
npm start: Runs the app in production mode.
npm run lint: Runs ESLint for code linting.
Using Environment Variables
To configure environment variables, create a .env.local file at the root of your project. This is where you can store sensitive variables like database URLs, API keys, etc.

For example:

makefile

NEXT_PUBLIC_API_URL=https://api.example.com
DATABASE_URL=your-database-url
Node.js Version
Make sure you are using Node.js version v18.18.2. You can use nvm (Node Version Manager) to manage multiple versions of Node.js. If you don't have nvm installed, follow the instructions on nvm's GitHub page.

To install and use the correct Node.js version:

bash

nvm install 18.18.2
nvm use 18.18.2