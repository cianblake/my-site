import React from 'react';
import { Grid, Stack } from '@mui/material';
import { StyledBodyTypography } from '../../../pages/styled';
import { DottedDivider, StyledChip, StyledGrid } from './styled';

function Listing({ duration, title, subtitle, tasks, skills }) {

  return (
    <StyledGrid container direction='row' spacing={1}>
        <Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
            <StyledBodyTypography>{duration}</StyledBodyTypography>
        </Grid>
        <Grid item xs={12} sm={8} md={8} lg={8} xl={8}>
            <Stack gap='4px'>
                <StyledBodyTypography isAlternateColor>{title}</StyledBodyTypography>
                <StyledBodyTypography>{subtitle}</StyledBodyTypography>
                <DottedDivider />
                {tasks.map((task, index) => (
                    <Stack key={index} gap='4px'>
                        <StyledBodyTypography>{task}</StyledBodyTypography>
                        <DottedDivider />
                    </Stack>
                ))}
                <Grid container direction='row' spacing={1}>
                    {skills.map((skill, index) => (
                        <Grid item key={index}>
                            <StyledChip label={skill} />
                        </Grid>
                    ))}
                </Grid>
            </Stack>
        </Grid>
    </StyledGrid>
  );
}

export default Listing;