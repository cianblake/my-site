import React from 'react';
import { Stack } from '@mui/material';
import { StyledBodyTypography } from '../../pages/styled.js';
import { experience } from './constant';
import Listing from './listing/listing';
import { StyledStack, StyledButton } from './styled';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

function Experience() {
  return (
    <Stack display='flex' alignItems={'flex-start'} gap={'10px'}>
        <StyledBodyTypography isAlternateColor sx={{margin:'0 10px'}}>Experience</StyledBodyTypography>
        <StyledStack>
          {experience.map((data, index) => (
              <Listing key={index} {...data} />
          ))}
        </StyledStack>
        <Stack sx={{margin:'0 10px'}}>
          <a href="/assets/cian-blake-cv.pdf" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
            <StyledButton endIcon={<ArrowForwardIcon />}>See Full Resume</StyledButton>
          </a>
        </Stack>
    </Stack>

  );
}

export default Experience;