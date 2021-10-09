import { MongoClient } from "mongodb";

//  This shouldn't have component code. Components are for the client, this is for the server.

//  /api/new-meetup     is the location of this API.

//  This function gets called when this API endpoint gets called.

//  Can get like the request header, req body, etc.
async function handler(req, res) {
  //  Now only POST   /api/new-meetup will trigger this code:
  if (req.method === "POST") {
    const data = req.body;

    //  Connects to a MongoDB database:
    //  The string comes from the "Connect to cluster" thing on MongoDB,
    //  but u need to replace <password> with your password:
    //  And replace "myFirstDatabase" with whatever u want to name your database.
    //  If it doesn't exist yet, MongoDB will create it on the fly!
    //  Never run this on the client side or put it on GitHub!!
    const client = await MongoClient.connect(
      "mongodb+srv://Lindsey_Herman:CoffeE08@cluster0.kiozs.mongodb.net/meetups?retryWrites=true&w=majority"
    );
    const db = client.db();

    //  MongoDB is a NoSQL database that works with collections of documents.
    //  Collection = table; Document = entry in table.
    //  If the collection doesn't exist yet, it will be created on the fly.
    //  This doesn't have to be the same name as the database, it just is here.
    const meetupsCollection = db.collection("meetups");

    const result = await meetupsCollection.insertOne(data);

    console.log(result);

    //  Don't forget to close the database connection!
    client.close();

    //  201 means something was inserted successfully, like how 200 means a webpage loaded successfully.
    res.status(201).json({ message: "Meetup inserted!" });
  }
}

export default handler;
