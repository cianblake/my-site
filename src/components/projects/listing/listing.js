import React from 'react';
import { Grid, Stack } from '@mui/material';
import { StyledBodyTypography } from '../../../pages/styled';
import { StyledChip, StyledImage, StyledGrid } from './styled';

function Listing({ title, description, skills, images, onProjectClick }) {

  return (
    <StyledGrid container direction='row' spacing={1} onClick={onProjectClick}>
        <Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
            <StyledImage alt='first' src={images[0]} />
        </Grid>
        <Grid item xs={12} sm={8} md={8} lg={8} xl={8}>
            <Stack gap='4px'>
                <StyledBodyTypography isAlternateColor>{title}</StyledBodyTypography>
                <StyledBodyTypography>{description}</StyledBodyTypography>
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