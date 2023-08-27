import React from 'react';
import { Grid, Stack, Hidden } from '@mui/material'; // <-- Import Hidden here
import { StyledBox, StyledGridContainer, StyledBodyTypography, StyledTitleTypography, StyledSubTitleTypography, StyledGrid } from './styled';
import NavBar from '../components/navBar/navBar';
import Socials from '../components/socials/socials'
import About from '../components/about/about';
import Experience from '../components/experience/experience';
import Projects from '../components/projects/projects';
import { Element } from 'react-scroll';

function LandingPage() {
  return (
    <StyledBox>
        <StyledGridContainer container spacing={2}>
            <Grid alignSelf="flex-start" item xs={12} sm={12} md={6} lg={6} xl={6} alignItems={'flex-start'} direction={'column'} display={'flex'} gap="100px">
                <Stack gap="100px" justifyContent={'space-between'}>
                    <Stack gap="20px">
                        <StyledTitleTypography sx={{margin:'0 10px'}}>Cian Blake</StyledTitleTypography>
                        <StyledSubTitleTypography sx={{margin:'0 10px'}}>Software Engineer</StyledSubTitleTypography>
                        <StyledBodyTypography sx={{margin:'0 10px'}}>I design, architect and develop software solutions with real world impact.</StyledBodyTypography>
                    </Stack>
                    <Hidden xsDown smDown mdDown>
                        <Stack>
                            <NavBar />
                        </Stack>
                    </Hidden>
                </Stack>
                <Stack>
                    <Socials />
                </Stack>
            </Grid>
            <StyledGrid container spacing={2} xs={12} sm={12} md={6} lg={6} xl={6} id="scrollable-section">
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12} id="about-section">
                    <Element name="about-section">
                        <About />
                    </Element>
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12} id="experience-section">
                    <Element>
                        <Experience name="experience-section"/>
                    </Element>
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12} id="projects-section">
                    <Element name="projects-section">
                        <Projects /> 
                    </Element>
                </Grid>
            </StyledGrid>
        </StyledGridContainer>
    </StyledBox>
  );
}

export default LandingPage;