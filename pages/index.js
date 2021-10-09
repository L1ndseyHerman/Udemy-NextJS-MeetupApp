//  This gets the head from the HTML to add like the website's title n stuff.
import Head from "next/head";
//  Something abt since this is only used in getStaticProps() on the server, the
//  client won't see this.
import { MongoClient } from "mongodb";

import MeetupList from "../components/meetups/MeetupList";
import { Fragment } from "react";

//  Could this be an ES6 function, maybe?
function HomePage(props) {
  return (
    <Fragment>
      <Head>
        <title>React Meetups</title>
        <meta
          name="description"
          content="Browse a huge list of highly active React meetups!"
        />
      </Head>
      <MeetupList meetups={props.meetups} />
    </Fragment>
  );
}

//  This will always run on the server after deployment.
//  Good for wesites where you have data that just updates all day long every second.
//  This will always get the current data.
/*export async function getServerSideProps(context) {
  const req = context.req;
  const res = context.res;
  //  fetch data from an API/database
  return {
    props: {
      meetups: DUMMY_MEETUPS,
    },
  };
}*/

//  A special pre-coded function for Static Generation.
//  Waits to load the webpage until the data fetches somehow bec this function is async, idk.
//  Something abt the code in here won't show up for search engine optimization? I'm confused.
export async function getStaticProps() {
  const client = await MongoClient.connect(
    "mongodb+srv://Lindsey_Herman:CoffeE08@cluster0.kiozs.mongodb.net/meetups?retryWrites=true&w=majority"
  );
  const db = client.db();

  const meetupsCollection = db.collection("meetups");

  //  Finds all the documents in a collection:
  //  Anything w await returns a promise!
  //  Returns an array of documents:
  const meetups = await meetupsCollection.find().toArray();

  client.close();

  return {
    props: {
      meetups: meetups.map((meetup) => ({
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        id: meetup._id.toString(),
      })),
    },
    //  The number of seconds React JS will wait before it regenerates the page,
    //  so will check the database/API once every 10 seconds to see if the data updated,
    //  and if it did, show it on the webpage.
    revalidate: 1,
  };
}

export default HomePage;
