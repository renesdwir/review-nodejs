const MongoClient = require("mongodb").MongoClient;
const connection = "mongodb://localhost:27017/db_latihan";

const db = new MongoClient(connection, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
(async () => {
  try {
    await db.connect();
  } catch (error) {
    console.log(error);
  }
})();

module.exports = db;
