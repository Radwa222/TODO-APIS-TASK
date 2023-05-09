const app = require('./src/app');
require('dotenv').config();

const connectToDb = require('./src/configs/database.config');

function bootstrap(port, db_uri) {
  connectToDb(db_uri)
    .then(() => {
      console.log('connected to database');
      app.listen(port, () =>
        console.log(`server is up and running on port ${port}`)
      );
    })
    .catch((e) => {
      console.log(e);
      process.exit(1);
    });
}

const port = process.env.PORT || 3000;
const db = process.env.MONGO_DB_URI;
bootstrap(port, db);
