import { MongoClient, ObjectId } from "mongodb";
import { Fragment } from "react";

import MeetupDetail from "../../components/meetups/MeetupDetail";
import Head from "next/head";

function MeetupDetails(props) {
  return (
    <Fragment>
      <Head>
        <title>{props.meetupData.title}</title>
        <meta name="description" content={props.meetupData.description} />
      </Head>
      <MeetupDetail
        image={props.meetupData.image}
        title={props.meetupData.title}
        address={props.meetupData.address}
        description={props.meetupData.description}
      />
    </Fragment>
  );
}

//  If u have getStaticProps() and a dynamic url "[]", u need this:
export async function getStaticPaths() {
  const client = await MongoClient.connect(
    "mongodb+srv://Lindsey_Herman:CoffeE08@cluster0.kiozs.mongodb.net/meetups?retryWrites=true&w=majority"
  );
  const db = client.db();

  const meetupsCollection = db.collection("meetups");

  //  Could .filter() this or something, but not.
  //  This means only get the id, no other fields.
  const meetups = await meetupsCollection.find({}, { _id: 1 }).toArray();

  client.close();

  return {
    //  Having a fallback of "false" means any meetupId besides "m1" or "m2" would return the 404 page.
    //  "true" would try to create/add the page somehow, I'm confused.
    fallback: false,
    //  "paths" is a pre-coded property:
    //  Need 1 object per version of a dynamic page.
    //  New! This is being generated dynamically based on the MongoDB data.
    paths: meetups.map((meetup) => ({
      params: { meetupId: meetup._id.toString() },
    })),
  };
}

export async function getStaticProps(context) {
  //  fetch data for a single meetup
  //  Can't use the useRouter() hook in here :(
  //  But can use context.

  const meetupId = context.params.meetupId;

  const client = await MongoClient.connect(
    "mongodb+srv://Lindsey_Herman:CoffeE08@cluster0.kiozs.mongodb.net/meetups?retryWrites=true&w=majority"
  );
  const db = client.db();

  const meetupsCollection = db.collection("meetups");

  //  Finds that meetupId in the database:
  //  Wrapping ObjectID around meetupId converts it to MongoDB's weird keys that are objects, not numbers.
  const selectedMeetup = await meetupsCollection.findOne({
    _id: ObjectId(meetupId),
  });

  client.close();

  return {
    props: {
      meetupData: {
        id: selectedMeetup._id.toString(),
        title: selectedMeetup.title,
        address: selectedMeetup.address,
        image: selectedMeetup.image,
        description: selectedMeetup.description,
      },
    },
  };
}

export default MeetupDetails;
