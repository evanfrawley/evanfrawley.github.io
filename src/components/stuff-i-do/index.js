import React from 'react';
import {Box, Heading, Text} from "rebass";

const MarginBox = ({children}) => (
  <Box mt={3} mb={3}>
    {children}
  </Box>
);

export const FreeTime = () => (
  <MarginBox>
    <Heading f={4} is="h2">Free Time</Heading>
    <Text>Here is the cool shit that I do in my free time</Text>
  </MarginBox>
);

export const School = () => (
  <MarginBox>
    <Heading f={4} is="h2">School</Heading>
    <Text>Here is the cool shit that I worked on in school:</Text>
  </MarginBox>
);

export const Teaching = () => (
  <MarginBox>
    <Heading f={4} is="h2">Teaching</Heading>
    <Text>Here is the stuff that I work on when I do teaching</Text>
  </MarginBox>
);

export const Work = () => (
  <MarginBox>
    <Heading f={4} is="h2">Work</Heading>
    <Text>Here is the cool shit that I do at work</Text>
  </MarginBox>
);
