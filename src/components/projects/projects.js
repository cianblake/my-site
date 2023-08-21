import React from 'react';
import { Stack } from '@mui/material';
import { StyledBodyTypography } from '../../pages/styled.js';
import { projects } from './constant.js';
import Listing from './listing/listing.js';
import { StyledStack } from './styled.js';

function Projects() {
  return (
    <Stack marginBottom={'220px'}>
        <StyledBodyTypography isAlternateColor>Projects</StyledBodyTypography>
        <StyledStack>
          {projects.map((data, index) => (
              <Listing key={index} {...data} />
          ))}
        </StyledStack>
    </Stack>

  );
}

export default Projects;