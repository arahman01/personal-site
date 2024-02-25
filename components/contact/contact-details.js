import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import PlaceIcon from "@mui/icons-material/Place";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import classes from "./contact-details.module.css";
import { phoneNumber, email, location, tagline } from "../../utility/texts";
import SocialLinks from "../social-links/social-links";

function ContactDetails() {
  return (
    <section className={classes.detailSection}>
      <p className={classes.tagline}>{tagline}</p>
      <ul>
        <li>
          <CallIcon /> {phoneNumber}
        </li>
        <li>
          <EmailIcon /> {email}
        </li>
        <li>
          <PlaceIcon /> {location}
        </li>
        <li>
          <WorkOutlineIcon /> Open for opportunities: Yes
        </li>
      </ul>
      <SocialLinks />
    </section>
  );
}

export default ContactDetails;
