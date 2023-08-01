import React from "react";
import Hero from "../components/Hero";
import ContactComp from "../components/Contact";
import contactType1 from "../assets/contactType1.png";

const Contact = () => {
  return (
    <div>
      {/* Hero && Navigation */}
      <Hero
        title="CONTACT CRUISERIMS"
        subtitle="LET’S CONNECT AND ELEVATE YOUR DRIVING EXPERIENCE"
        imageLabel="bg-bgContact"
      />

      {/* Contact types */}
      <ContactComp
        image={contactType1}
        title="GENERAL INQUIRIES"
        subtitle="For general questions about our products, services, or any other
                  information, please email us at info@cruiserims.com. We aim to 
                  respond promptly and provide you with all the details you need.
                  "
      />

      <ContactComp
        image={contactType1}
        title="GENERAL INQUIRIES"
        subtitle="For general questions about our products, services, or any other
                  information, please email us at info@cruiserims.com. We aim to 
                  respond promptly and provide you with all the details you need.
                  "
      />

      <ContactComp
        image={contactType1}
        title="GENERAL INQUIRIES"
        subtitle="For general questions about our products, services, or any other
                  information, please email us at info@cruiserims.com. We aim to 
                  respond promptly and provide you with all the details you need.
                  "
      />

      <ContactComp
        image={contactType1}
        title="GENERAL INQUIRIES"
        subtitle="For general questions about our products, services, or any other
                  information, please email us at info@cruiserims.com. We aim to 
                  respond promptly and provide you with all the details you need.
                  "
      />
    </div>
  );
};

export default Contact;
