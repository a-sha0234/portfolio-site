//imports
import React from "react";
import contactData from "./ContactDetails";

export default function Contact() {
  //-----------------------------------------------------------------------------------------
  // return Jsx
  //-----------------------------------------------------------------------------------------

  return (
    <main className="contact">
      <h1>Get in touch</h1>
      <div className="verticalLine"></div>
      {/* get data from contactData */}
      <p>Full name: {contactData[0].FullName} </p>
      <p>Mobile number: {contactData[0].MobileNum} </p>
      <p>Email address: {contactData[0].EmailAddress}</p>
    </main>
  );
}
