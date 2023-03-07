import { useContext, useRef } from "react";

import NotificationContext from "@/store/notification-context";

import classes from "./newsletter-registration.module.css";

function NewsletterRegistration() {
  const emailRef = useRef();
  const { showNotification } = useContext(NotificationContext);

  function registrationHandler(event) {
    event.preventDefault();

    showNotification({
      message: "Registering for newsletter",
      status: "pending",
      title: "Signing up...",
    });

    fetch("/api/newsletter", {
      body: JSON.stringify({ email: emailRef.current.value }),
      headers: { "Content-Type": "application/json" },
      method: "POST",
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }

        return response.json().then((data) => {
          throw new Error(data.message || "Something went wrong!");
        });
      })
      .then((data) =>
        showNotification({
          message: "Successfully registered for newsletter!",
          status: "success",
          title: "Success!",
        })
      )
      .catch((err) =>
        showNotification({
          message: err.message || "Something went wrong!",
          status: "error",
          title: "Error!",
        })
      );
  }

  return (
    <section className={classes.newsletter}>
      <h2>Sign up to stay updated!</h2>
      <form onSubmit={registrationHandler}>
        <div className={classes.control}>
          <input
            type="email"
            id="email"
            placeholder="Your email"
            aria-label="Your email"
            ref={emailRef}
          />
          <button>Register</button>
        </div>
      </form>
    </section>
  );
}

export default NewsletterRegistration;
