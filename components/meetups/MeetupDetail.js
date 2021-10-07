import classes from "./MeetupDetail.module.css";

function MeetupDetail(props) {
  //  Address is an HTML tag intended for address data.
  return (
    <section className={classes.detail}>
      <img src={props.image} alt={props.title} />
      <h1>{props.title}</h1>
      <address>{props.address}</address>
      <p>{props.description}</p>
    </section>
  );
}

export default MeetupDetail;
