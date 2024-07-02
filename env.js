/*Using environment variables allows you to
 configure your application for different
  environments without changing the code.
   You can have different sets of environment 
   variables for development, testing, and 
   production, and your application will behave
    accordingly based on the environment it's 
    running in.

Example Setup for Different Environments
1. Development Environment
.env.development:

plaintext
Copy code
PORT=3000
DB_HOST=localhost
DB_PORT=27017
DB_NAME=mydatabase_dev
DB_USER=devuser
DB_PASS=devpassword
API_KEY=devapikey
API_SECRET=devapisecret
DEBUG=true
LOG_LEVEL=debug
2. Testing Environment
.env.test:

plaintext
Copy code
PORT=4000
DB_HOST=localhost
DB_PORT=27017
DB_NAME=mydatabase_test
DB_USER=testuser
DB_PASS=testpassword
API_KEY=testapikey
API_SECRET=testapisecret
DEBUG=false
LOG_LEVEL=warn
3. Production Environment
.env.production:

plaintext
Copy code
PORT=8000
DB_HOST=prod-db-host
DB_PORT=27017
DB_NAME=mydatabase_prod
DB_USER=produser
DB_PASS=prodpassword
API_KEY=prodapikey
API_SECRET=prodapisecret
DEBUG=false
LOG_LEVEL=error
Loading the Appropriate Environment File
You can use the dotenv package to load the appropriate environment file based on the environment. Here's how you can modify your index.js file to load different .env files:

javascript
Copy code
const dotenv = require('dotenv');
const express = require('express');

const app = express();

// Determine the environment and load the corresponding .env file
const env = process.env.NODE_ENV || 'development';
dotenv.config({ path: `.env.${env}` });

const port = process.env.PORT || 3000;

// Define routes
app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/twitter', (req, res) => {
  res.send('Aasthadotcom');
});

app.get('/login', (req, res) => {
  res.send('<h1>please login</h1>');
});

app.get('/youtube', (req, res) => {
  res.send('<h2>Chai aur code</h2>');
});

// Start the server and listen on the specified port
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
Setting the Environment
When running your application, you need to set the NODE_ENV variable to specify which environment you're targeting. For example:

Development:


NODE_ENV=development node index.js


Testing:
NODE_ENV=test node index.js


Production:
NODE_ENV=production node index.js

By using environment variables and loading different .env files based on the environment,
 you can seamlessly switch configurations without
  modifying your code, making your application more
   flexible and easier to manage.*/








