import MeetupDetail from "../../components/meetups/MeetupDetail";

function MeetupDetails() {
  return (
    <MeetupDetail
      image="../../images/SmolShield.png"
      title="First Meetup"
      address="Some Street 5, Some City"
      description="This is a first meetup"
    />
  );
}

//  If u have getStaticProps() and a dynamic url "[]", u need this:
export async function getStaticPaths() {
  return {
    //  Having a fallback of "false" means any meetupId besides "m1" or "m2" would return the 404 page.
    //  "true" would try to create/add the page somehow, I'm confused.
    fallback: false,
    //  "paths" is a pre-coded property:
    //  Need 1 object per version of a dynamic page.
    paths: [
      {
        params: {
          meetupId: "m1",
        },
        params: {
          meetupId: "m2",
        },
      },
    ],
  };
}

export async function getStaticProps(context) {
  //  fetch data for a single meetup
  //  Can't use the useRouter() hook in here :(
  //  But can use context.

  const meetupId = context.params.meetupId;

  console.log(meetupId);

  return {
    props: {
      meetupData: {
        image: "../../images/SmolShield.png",
        id: meetupId,
        title: "First Meetup",
        address: "Some Street 5, Some City",
        description: "This is a first meetup",
      },
    },
  };
}

export default MeetupDetails;
