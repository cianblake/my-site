import React from 'react';
import { Stack } from '@mui/material';
import { StyledBodyTypography } from '../../pages/styled.js';

function TextSection(title, body) {
  return (
    <Stack>
        <StyledBodyTypography isAlternateColor sx={{margin:'0 10px'}}>{title}</StyledBodyTypography>
        {body.split('\n').map((line, index) => (
            <React.Fragment key={index}>
                <StyledBodyTypography sx={{margin:'0 10px'}}>
                    {line}
                </StyledBodyTypography>
                {index !== 4 ?  <br /> : null}
            </React.Fragment>
        ))}
    </Stack>
  );
}

export default TextSection;
