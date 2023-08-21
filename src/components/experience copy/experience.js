import React from 'react';
import { Stack } from '@mui/material';
import { StyledBodyTypography } from '../../pages/styled.js';
import { experience } from './constant.js';
import Listing from './listing/listing.js';
import { StyledStack } from './styled.js';

function Experience() {
  return (
    <Stack>
        <StyledBodyTypography isAlternateColor>Experience</StyledBodyTypography>
        <StyledStack>
          {experience.map((data, index) => (
              <Listing key={index} {...data} />
          ))}
        </StyledStack>
    </Stack>

  );
}

export default Experience;