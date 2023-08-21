import React from 'react';
import { Grid, Stack } from '@mui/material';
import { StyledBodyTypography } from '../../../pages/styled';
import { StyledChip, StyledImage } from './styled';

function Listing({ title, description, skills, images }) {

    console.log(images[0]);

  return (
    <Grid container direction='row' spacing={1}>
        <Grid item xs={4} sm={4} md={4} lg={4} xl={4}>
            <StyledImage alt='first' src={images[0]} />
        </Grid>
        <Grid item xs={8} sm={8} md={8} lg={8} xl={8}>
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
    </Grid>
  );
}

export default Listing;