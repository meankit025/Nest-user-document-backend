Installation Instructions
Clone the Repository:

bash
Copy code
git clone https://github.com/<your-username>/nestjs-user-document-management.git
cd nestjs-user-document-management
Install Dependencies:

bash
Copy code
npm install
Setup the Environment Variables: Create a .env file in the root directory and add:

plaintext
Copy code
DB_HOST=localhost
DB_PORT=5432
DB_USER=postgres
DB_PASSWORD=yourpassword
DB_NAME=user_docs
JWT_SECRET=your_secret_key
JWT_EXPIRES_IN=3600s
Run the Application: Start the development server:

bash
Copy code
npm run start:dev
Access Swagger Documentation: Open http://localhost:3000/api-docs in your browser to test the APIs.

API Endpoints
Authentication
POST /auth/login: Login and retrieve a JWT token.
User Management
POST /users/create: Create a new user (Admin only).
Document Management
POST /documents/create: Create a new document.
POST /documents/upload: Upload a file.
Ingestion Management
POST /ingestion/trigger: Trigger an ingestion process.
GET /ingestion/status/:processId: Check the status of an ingestion process.
Project Structure
arduino
Copy code
src/
├── auth/                # Authentication module
├── users/               # User management module
├── documents/           # Document management module
├── ingestion/           # Ingestion integration module
├── app.module.ts        # Root module
├── main.ts              # Application entry point
Testing
Run the following command to execute all tests:

bash
Copy code
npm run test
