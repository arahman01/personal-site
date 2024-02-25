import { resumeDriveLink } from "../../utility/texts";
import classes from "./resume.button.module.css";

function ResumeButton() {
  const handleClick = () => {
    window.open(resumeDriveLink, "_blank");
  };
  return (
    <button className={classes.button} onClick={handleClick}>
      Resume
    </button>
  );
}

export default ResumeButton;
