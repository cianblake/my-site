import React from 'react';
import { Stack } from '@mui/material';
import { StyledBodyTypography } from '../../pages/styled.js';
import { aboutUsContent } from './constant';

function About() {
  return (
    <Stack>
        <StyledBodyTypography isAlternateColor>About</StyledBodyTypography>
        {aboutUsContent.split('\n').map((line, index) => (
            <React.Fragment key={index}>
                <StyledBodyTypography>
                    {line}
                </StyledBodyTypography>
                {index !== 4 ?  <br /> : null}
            </React.Fragment>
        ))}
    </Stack>
  );
}

export default About;
