const mongoose = require("mongoose");
const User = require("../backend/models/User");
const Post = require("../backend/models/Post");

const seedDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("Database connected for seeding.");

    // Clear existing data
    await User.deleteMany({});
    await Post.deleteMany({});

    console.log("Old data cleared.");

    // Add seed data
    const user = await User.create({
      username: "seeduser",
      password: "password123",
    });

    const post = await Post.create({
      content: "This is a seeded post.",
      author: user._id,
    });

    console.log("Seed data added:", { user, post });

    mongoose.connection.close();
    console.log("Database connection closed.");
  } catch (err) {
    console.error("Error during seeding:", err);
    process.exit(1);
  }
};

seedDatabase();
