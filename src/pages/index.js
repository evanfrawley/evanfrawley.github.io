import React from 'react'
import ButtonRack from "../components/ButtonRack";
import FlexFullHeight from "../components/FlexFullHeight";
import {Box, Heading} from "rebass";

const IndexPage = () => (
  <FlexFullHeight w={1} direction="column" align="center" justify="center">
    <Box>
      <Heading f={6} is="h1">Developer</Heading>
    </Box>
    <ButtonRack mt={2} />
  </FlexFullHeight>
);

export default IndexPage
