import React from 'react';
import { Grid, Stack } from '@mui/material';
import { StyledBox, StyledGridContainer, StyledBodyTypography, StyledTitleTypography, StyledSubTitleTypography, StyledGrid } from './styled';
import NavBar from '../components/navBar/navBar';
import Socials from '../components/socials/socials'
import About from '../components/about/about';
import Experience from '../components/experience/experience';


function LandingPage() {
  return (
    <StyledBox>
        <StyledGridContainer container spacing={2}>
            <Grid alignSelf="flex-start" item xs={12} sm={12} md={6} lg={6} xl={6} alignItems={'flex-start'} direction={'column'} display={'flex'} gap="100px">
                <Stack gap="100px" justifyContent={'space-between'}>
                    <Stack gap="20px">
                        <StyledTitleTypography>Cian Blake</StyledTitleTypography>
                        <StyledSubTitleTypography>Software Engineer</StyledSubTitleTypography>
                        <StyledBodyTypography>I design, architect and develop software solutions with real world impact.</StyledBodyTypography>
                    </Stack>
                    <Stack>
                        <NavBar />
                    </Stack>
                </Stack>
                <Stack>
                    <Socials />
                </Stack>
            </Grid>
            <StyledGrid container spacing={2} xs={12} sm={12} md={6} lg={6} xl={6}>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                    <About />
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                    <Experience /> 
                </Grid>
            </StyledGrid>
        </StyledGridContainer>
    </StyledBox>
  );
}

export default LandingPage;
