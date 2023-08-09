'use client';
import React from "react";
import ContactHeader from "../../components/contact/contactHeader/contactHeader";
import ContactSlider from "../../components/contact/contactSlider/contactSlider";
import ContactForm from "../../components/contact/contactForm/contactForm";
import ContactMap from "../../components/contact/contactMap/contactMap";
function ContactUs() {
  return (
    <div>
      <ContactHeader/>
      <ContactForm/>
      <ContactSlider/>
      <ContactMap/>
    </div>
  );
}

export default ContactUs;
