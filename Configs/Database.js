const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://${
        process.env.DB_USER
      }:${encodeURIComponent(
        process.env.DB_PASS
      )}@knight-cluster.bypaq.mongodb.net/${
        process.env.DB_NAME
      }?retryWrites=true&w=majority&appName=knight-cluster`
    );

    console.log("MongoDB Connected Successfully");
  } catch (error) {
    console.error(
      "MongoDB Connection Failed:",
      error.message
    );
    process.exit(1);
  }
};

module.exports = connectDB;
