import React from 'react';
import { Grid, Stack } from '@mui/material';
import { StyledBodyTypography } from '../../../pages/styled';
import { DottedDivider } from './styled';

function Listing({ duration, title, subtitle, tasks }) {
  return (
    <Grid container direction='row' spacing={1}>
        <Grid item xs={4} sm={4} md={4} lg={4} xl={4}>
            <StyledBodyTypography>{duration}</StyledBodyTypography>
        </Grid>
        <Grid item xs={8} sm={8} md={8} lg={8} xl={8}>
            <Stack gap='4px'>
                <StyledBodyTypography isAlternateColor>{title}</StyledBodyTypography>
                <StyledBodyTypography>{subtitle}</StyledBodyTypography>
                <DottedDivider />
                {tasks.map((task, index) => (
                    <Stack key={index}>
                        <StyledBodyTypography>{task}</StyledBodyTypography>
                        <DottedDivider />
                    </Stack>
                ))}
            </Stack>
        </Grid>
    </Grid>
  );
}

export default Listing;