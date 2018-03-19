import React from 'react';
import {Box, Heading} from "rebass";
import {FreeTime, School, Teaching, Work} from "../../components/stuff-i-do/index";

class StuffIDo extends React.Component {
  render() {
    return(
      <Box>
        <Heading is="h1">Stuff I Do</Heading>
        <FreeTime />
        <Teaching />
        <Work />
        <School />
      </Box>
    )
  }
}

export default StuffIDo
