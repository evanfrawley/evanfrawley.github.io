import styled from "styled-components";
import {ButtonTransparent} from "rebass";

const ContactButton = styled(ButtonTransparent)`
  font-size: 1.5em;
  border-radius: 10px;
  padding: 10px;
  width: calc(1.5em + 20px);
  
  &:hover {
    color: #6FA59B; 
    cursor: pointer;
  }
`;

export default ContactButton;