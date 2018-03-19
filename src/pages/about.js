import React from 'react';
import selfImage from '../../static/me.jpg';
import {Box, Image, Text} from "rebass";

const About = () => (
  <Box className={"aboutContainer"}>
    <Box className={"imageAndTaglineContainer"}>
      <Box className={"imageContainer"}>
        <Image src={selfImage} alt={"a picture of Evan Frawley"}/>
      </Box>
      <Box className={"taglineContainer"}>
        <Text className={"motto"}>Personal Motto</Text>
        <Text className={"taglineQuote"}>"Don't go to sleep unless you're a better version of yourself than when you woke up."</Text>
      </Box>
    </Box>
    <Box>
      <Text>Hiya! I'm Evan. I'm currently a senior at the University of Washington,
        studying Informatics focusing in Software Engineering. Coming from internships
        at two Seattle startups and project-focused courses at UW, my strong suit is
        working with a fast moving team that ships code quickly and efficiently.
        On the tech stack side, I am comfortable on both the front and back end,
        having built out UIs and REST API services during my internships. In my spare time,
        I enjoy being a teaching assistant for coding courses or tinkering with an
        array of programming side projects.</Text>
    </Box>
  </Box>
);

export default About
