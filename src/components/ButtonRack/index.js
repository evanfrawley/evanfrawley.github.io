import React from 'react';
import {Box} from "rebass";
import ContactButton from "../ContactButton";

const ButtonRack = (props) => (
  <Box {...props}>
    <ContactButton>
      <i className="fas fa-file-alt"/>
    </ContactButton>
    <ContactButton>
      <i className="fas fa-envelope"/>
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

export default ButtonRack