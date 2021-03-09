## Getting Started

This README will take you through the process to setup the backend folder locally.

### Prerequisites

The following technologies are required to run the server and use it locally.

- [nodejs](https://nodejs.org/en/download/)
- [monogodb](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-windows/)
- [git](https://git-scm.com/downloads)
- [postman](https://www.postman.com/downloads/)

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/ayan-biswas0412/gssoc2021-HotelOnTouch.git
   ```
2. Move to the backend folder
   ```sh
   cd backend
   ```
3. Install NPM packages
   ```sh
   npm install
   ```
4. You can setup your own env variables for PORT and mongodb connection string, by creating a .env file in /backend and defining below variables

   ```bash
   PORT = CUSTOM_PORT
   DB_STRING = CUSTOM_DB_STRING
   ```

   By default PORT is 3030 and DB_STRING is mongodb://localhost/hotelontouchdb, so you may skip this step.

5. Startup local mongodb server in a new terminal window
   ```sh
   mongod
   ```
6. Now to startup the nodejs server run
   ```sh
   npm start
   ```
   The Server is now running on http://localhost:3030

Now you can use Postman to connect with the server and make requests.
