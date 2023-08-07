'use client';
import React from "react";
import ContactHeader from "../../components/contact/contactHeader/contactHeader";
import ContactSlider from "../../components/contact/contactSlider/contactSlider";
import ContactForm from "../../components/contact/contactForm/contactForm";
function ContactUs() {
  return (
    <div>
      <ContactHeader/>
      <ContactForm/>
      <ContactSlider/>
    </div>
  );
}

export default ContactUs;
