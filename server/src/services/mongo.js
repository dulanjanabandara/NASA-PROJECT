const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config({ path: "./config.env" });

const MONGO_URL = process.env.DATABASE.replace(
  "<PASSWORD>",
  process.env.DATABASE_PASSWORD
);

mongoose.connection.once("open", () => {
  console.log("MongoDB connection ready!");
});

mongoose.connection.on("error", (err) => {
  console.error("DB Connecting Error: ", err);
});

async function mongoConnect() {
  await mongoose.connect(
    MONGO_URL
    // {
    // useNewUrlParser: true,
    // useCreateIndex: true, // no longer needed
    // useFindAndModify: false, // no longer needed
    // useUnifiedTopology: true,
    // }
  );
}

async function mongoDisconnect() {
  await mongoose.disconnect();
}

module.exports = {
  mongoConnect,
  mongoDisconnect,
};
