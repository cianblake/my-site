import React from 'react';
import { Stack } from '@mui/material';
import { StyledBodyTypography } from '../../pages/styled.js';
import { projects } from './constant.js';
import Listing from './listing/listing.js';
import { StyledStack, StyledOuterStack } from './styled.js';

function Projects() {
  return (
    <StyledOuterStack >
        <StyledBodyTypography isAlternateColor sx={{margin:'0 10px'}}>Projects</StyledBodyTypography>
        <StyledStack>
          {projects.map((data, index) => (
              <Listing key={index} {...data} />
          ))}
        </StyledStack>
    </StyledOuterStack>

  );
}

export default Projects;