## Find My Bank
This is a full stack web application to analyze and process data from the [Indian banks](https://github.com/snarayanank2/indian_banks) database with features like Dynamic filtering, Drop-down, Pagination, API Caching and State persistence.
The Postgres DB is hosted on [clever-cloud](clever-sloud.com). You can check the complete app [here](https://bank-search-appui.herokuapp.com/)

### Built With
* [PostgreSQL](https://www.postgresql.org/docs/current/)
* [Node](https://nodejs.org/en/docs/)
* [React](https://reactjs.org/docs/getting-started.html)
* [React-Table](https://react-table.tanstack.com/)
* [React-Select](https://react-select.com/home)

### Installation
1. Clone this repository
```sh
git clone https://github.com/yksolanki9/Bank-UI
```
2. Install server dependencies using:
 ```sh
 npm install
 ```
    Install client dependencies using:
 ```sh
 cd client && npm install
 ```

3. Create a `.env` file with database auth details as provided in `.sample.env`
4. Start the server on one terminal using:
  ```sh
  node app.js
  ```
    and the client on another terminal using:
  ```sh
  cd client
  npm start
  ```
5. The server is running on `http://localhost:3002` and client on `http://localhost:3000`


## Contact

Yash Solanki - [yashsolanki1709@gmail.com]()


