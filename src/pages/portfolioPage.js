import React from 'react';
import { Grid, Stack } from '@mui/material'; // <-- Import Hidden here
import { StyledBox, StyledGridContainer, StyledBodyTypography, StyledTitleTypography, StyledGrid } from './styled';
import About from '../components/about/about';
import { projects } from '../components/projects/constant';
import { StyledChip } from '../components/projects/listing/styled';
import ImageGallery from '../components/imageGallery/imageGallery';

function PortfolioPage() {
  return (
    <StyledBox>
        <StyledGridContainer container spacing={2}>
            <Grid alignSelf="flex-start" item xs={12} sm={12} md={6} lg={6} xl={6} alignItems={'flex-start'} direction={'column'} display={'flex'} gap="100px">
                <Stack gap="20px" >
                    <Stack gap="20px">
                        <StyledBodyTypography sx={{margin:'0 10px'}}>Home / Organiser App</StyledBodyTypography>
                        <StyledTitleTypography sx={{margin:'0 10px'}}>Organiser App</StyledTitleTypography>
                        <Grid container direction='row' spacing={1}>
                            {projects[0].skills.map((skill, index) => (
                                <Grid item key={index}>
                                    <StyledChip label={skill} />
                                </Grid>
                            ))}
                        </Grid>
                    </Stack>
                    <About />
                </Stack>
            </Grid>
            <StyledGrid container spacing={2} xs={12} sm={12} md={6} lg={6} xl={6} id="scrollable-section">
                <ImageGallery images={projects[0].images} /> 
            </StyledGrid>
        </StyledGridContainer>
    </StyledBox>
  );
}

export default PortfolioPage;