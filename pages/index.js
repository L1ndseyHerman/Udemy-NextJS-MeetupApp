import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "A First Meetup",
    //  Having trouble getting the image he listed, so here's a shield, lol :)
    image: "../images/SmolShield.png",
    address: "Some address 5, 12345 Some City",
    description: "This is a first meetup!",
  },
  {
    id: "m2",
    title: "A Second Meetup",
    image: "../images/SmolShield.png",
    address: "Some address 10, 12345 Some City",
    description: "This is a second meetup!",
  },
];

//  Could this be an ES6 function, maybe?
function HomePage(props) {
  return <MeetupList meetups={props.meetups} />;
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
  //  fetch data from an API/database
  return {
    props: {
      meetups: DUMMY_MEETUPS,
    },
    //  The number of seconds React JS will wait before it regenerates the page,
    //  so will check the database/API once every 10 seconds to see if the data updated,
    //  and if it did, show it on the webpage.
    revalidate: 1,
  };
}

export default HomePage;
