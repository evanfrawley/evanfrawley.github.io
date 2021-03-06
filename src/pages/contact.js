import React from 'react';
import {Box, Heading} from "rebass";
import ContactButton from "../components/ContactButton";

const Contact = () => (
  <Box>
    <Heading is="h1">Contact me!</Heading>
    <ContactButton>
      <i className="fas fa-envelope"/>
    </ContactButton>
    <ContactButton>
      <i className="fas fa-file-alt"/>
    </ContactButton>
    <ContactButton>
      <i className="fab fa-github"/>
    </ContactButton>
    <ContactButton>
      <i className="fab fa-linkedin"/>
    </ContactButton>
    <ContactButton>
      <i className="fab fa-twitter"/>
    </ContactButton>
  </Box>
);

export default Contact