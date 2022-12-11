import React from "react";
import { ContactHeadlines, ContactParagraphs } from "../styles/Contact.styled";

export default function Contact() {
  return (
    <div>
      <ContactHeadlines>Contact Me</ContactHeadlines>
      <ContactParagraphs>
        Email:{" "}
        <a href="mailto:shanarussell00@gmail.com">shanarussell00@gmail.com</a>
      </ContactParagraphs>
      <ContactParagraphs>
        LinkedIn:{" "}
        <a href="https://linkedin.com/in/shanarussell" target="_blank">
          linkedin.com/in/shanarussell
        </a>
      </ContactParagraphs>
      <ContactParagraphs>
        GitHub:{" "}
        <a href="https://github.com/shanarussell" target="_blank">
          github.com/shanarussell
        </a>
      </ContactParagraphs>
    </div>
  );
}
