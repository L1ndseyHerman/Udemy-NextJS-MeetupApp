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
function HomePage() {
  return <MeetupList meetups={DUMMY_MEETUPS} />;
}

export default HomePage;
