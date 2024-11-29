# Installation Instructions

# Clone the Repository:
git clone https://github.com/<your-username>/nestjs-user-document-management.git
cd nestjs-user-document-management

Install Dependencies:
#
# npm install
Setup the Environment Variables: Create a .env file in the root directory and add:

plaintext
# Copy code
DB_HOST=localhost
DB_PORT=5432
DB_USER=postgres
DB_PASSWORD=yourpassword
DB_NAME=user_docs
JWT_SECRET=your_secret_key
JWT_EXPIRES_IN=3600s
Run the Application: Start the development server:


# npm run start:dev

# API Endpoints
# Authentication
POST /auth/login: Login and retrieve a JWT token.
# User Management
POST /users/create: Create a new user (Admin only).
# Document Management
POST /documents/create: Create a new document.
POST /documents/upload: Upload a file.
# Ingestion Management
POST /ingestion/trigger: Trigger an ingestion process.
GET /ingestion/status/:processId: Check the status of an ingestion process.

# Testing
npm run test
