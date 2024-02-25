import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import { linkedinLink, githubLink, emailLink } from "../../utility/texts";
import classes from "./social-links.module.css";

function SocialLinks() {
  return (
    <div className={classes.socials}>
      <a href={linkedinLink} target="_blank" rel="noopener noreferrer">
        <LinkedInIcon />
      </a>
      <a href={githubLink} target="_blank" rel="noopener noreferrer">
        <GitHubIcon />
      </a>
      <a href={emailLink} target="_blank" rel="noopener noreferrer">
        <EmailIcon />
      </a>
    </div>
  );
}

export default SocialLinks;
