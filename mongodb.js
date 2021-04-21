const mongodb = require("mongodb");
const { MongoClient, ObjectID } = mongodb;

const connectionUrl = "mongodb://127.0.0.1:27017";
const database = "my-blog";
const id = new ObjectID();
const postID = new ObjectID();

MongoClient.connect(
  connectionUrl,
  { useUnifiedTopology: true },
  async (error, client) => {
    if (error) {
      return console.log("Unable to connect to db");
    }
    console.log("Connected correctly");
    const db = client.db(database);

    const user = await db
      .collection("users")
      .findOne({ _id: new ObjectID("607ebaab09aaaf394c1b68bd") });
    const postToFind = await db
      .collection("posts")
      .findOne({ _id: new ObjectID("607fc4ea7d28b40548338f59") });

    console.log(user);
    // const post = await db.collection("posts").insertOne({
    //   _id: id,
    //   title: "Best comment",
    //   text: "Lets go coding!",
    //   user: user._id,
    //   comments: [],
    // });
    const comments = await db.collection("comments").insertOne({
      _id: id,

      text: "Very good idea",
      user: user._id,
      postId: postToFind._id,
    });
    console.log(post.ops);
  }
);
