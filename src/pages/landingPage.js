import React from 'react';
import { Grid, Stack } from '@mui/material';
import { StyledBox, StyledGridContainer, StyledBodyTypography, StyledTitleTypography, StyledSubTitleTypography } from './styled';
import NavBar from '../components/navBar/navBar';
import Socials from '../components/socials/socials'


function LandingPage() {

    const aboutUs = "In 2019, I won a scholarship to study BSc physics in Abu Dhabi, United Arab Emirates. \n Seeking opportunity and adventure, I move half way around the world at the age of 19. \n Alongside my studies, I founded an auto tech startup , called Dismantly, that ignited my passion for software. \n Following this passion allowed me to self-learn the software engineering process (ReactJs, Python, AWS...). \n Now it has led me to one last scholarship and adventure to study MSc computer science in Saudi Arabia.";

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
            <Grid item xs={12} sm={12} md={6} lg={6} xl={6} alignItems={'flex-start'}>
                <Stack>
                    <StyledBodyTypography isAlternateColor>About</StyledBodyTypography>
                    {aboutUs.split('\n').map((line, index) => (
                        <React.Fragment key={index}>
                            <StyledBodyTypography>
                                {line}
                            </StyledBodyTypography>
                            {index !== 4 ?  <br /> : null}
                        </React.Fragment>
                    ))}
                </Stack>
            </Grid>
        </StyledGridContainer>
    </StyledBox>
  );
}

export default LandingPage;
