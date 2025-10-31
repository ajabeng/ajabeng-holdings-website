import React from 'react';

function Contact() {
  return (
    <section className="page">
      <h2>Contact Us</h2>
      <p>We’d love to hear from you. Reach out to us anytime.</p>
      <p>Email: <a href="mailto:info@ajabengholdings.com">info@ajabengholdings.com</a></p>
      <p>Phone: +1 (240) 555-0199</p>
      <p>Location: Laurel, Maryland, USA</p>

      <a href="mailto:info@ajabengholdings.com" className="cta-button">Send an Email</a>
    </section>
  );
}

export default Contact;
