import ContactForm from "./contact/contact-form";
import Head from "next/head";
import { Fragment } from "react";
import classes from "../styles/utility.module.css";
function ContactPage() {
  return (
    <Fragment>
      <Head>
        <title>Contact Me</title>
        <meta name="description" content="send me your messages" />
      </Head>
      <div className={classes.homePage}>
        <h2>Reach Out to Me!</h2>
      </div>
      <ContactForm></ContactForm>
    </Fragment>
  );
}

export default ContactPage;
