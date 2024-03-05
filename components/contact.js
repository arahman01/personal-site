import { Fragment } from "react";
import Head from "next/head";
import ContactForm from "./contact/contact-form";
import ContactDetails from "./contact/contact-details";
import classes from "./contact.module.css";

function ContactPage() {
  return (
    <Fragment>
      <Head>
        <meta name="description" content="send me your messages" />
      </Head>
      <div className={classes.homePage}>
        <h2>Reach Out to Me!</h2>
      </div>
      <div className={classes.contactContainer}>
        <ContactDetails />
        <ContactForm />
      </div>
    </Fragment>
  );
}

export default ContactPage;
