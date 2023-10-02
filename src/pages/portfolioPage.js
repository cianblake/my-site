import React from 'react';
import { Grid, Stack } from '@mui/material';
import { StyledBox, StyledGridContainer, StyledBodyTypography, StyledTitleTypography, StyledGrid } from './styled';
import { projects } from '../components/projects/constant';
import { StyledChip } from '../components/projects/listing/styled';
import ImageGallery from '../components/imageGallery/imageGallery';
import TextSection from '../components/textSection/textSection';

function PortfolioPage() {
  return (
    <StyledBox>
        <StyledGridContainer container spacing={5}> {/* Updated the spacing here */}
            <Grid 
              item 
              xs={12} 
              sm={12} 
              md={6} 
              lg={6} 
              xl={6} 
              sx={{
                order: { xs: 2, sm: 2, md: 1 }, // Change order for different screen sizes
              }}
              height='100%'
            >
                <Stack gap="20px" height='100%'>
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
                    <Stack gap='20px' overflow={'auto'}>
                    {projects[0].text_sections.map((section, index) => (
                        <TextSection key={index} title={section.title} body={section.body} isCode={section?.isCode || false} />
                    ))}
                    </Stack>
                </Stack>
            </Grid>
            <StyledGrid 
              item 
              spacing={2} 
              xs={12} 
              sm={12} 
              md={6} 
              lg={6} 
              xl={6} 
              id="scrollable-section"
              sx={{
                order: { xs: 1, sm: 1, md: 2 }, // Change order for different screen sizes
              }}
            >
                <ImageGallery images={projects[0].images} /> 
            </StyledGrid>
        </StyledGridContainer>
    </StyledBox>
  );
}

export default PortfolioPage;
