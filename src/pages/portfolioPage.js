import React from 'react';
import { Grid, Stack, useMediaQuery, useTheme } from '@mui/material'; // Import useMediaQuery and useTheme
import { StyledBox, StyledGridContainer, StyledBodyTypography, StyledTitleTypography, StyledGrid, StyledLink } from './styled';
import { projects } from '../components/projects/constant';
import { StyledChip } from '../components/projects/listing/styled';
import ImageGallery from '../components/imageGallery/imageGallery';
import TextSection from '../components/textSection/textSection';
import { useParams } from 'react-router-dom';

function PortfolioPage() {
  const { projectId } = useParams();
  const project = projects.find((project) => project.id === projectId);
  const theme = useTheme(); // Use the theme
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md')); // Check if the screen width is small
  console.log(isSmallScreen);

  return (
    <StyledBox>
        {/* Set the spacing based on the screen width */}
        <StyledGridContainer container spacing={isSmallScreen ? 0 : 5}> 
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
                        {/* Updated the breadcrumb to include a Link */}
                        <StyledBodyTypography sx={{margin:'0 10px'}}>
                            <StyledLink to="/">Home</StyledLink> / {project.title}
                        </StyledBodyTypography>
                        <StyledTitleTypography sx={{margin:'0 10px'}}>{project.title}</StyledTitleTypography>
                        <Grid container direction='row' spacing={1}>
                            {project.skills.map((skill, index) => (
                                <Grid item key={index}>
                                    <StyledChip label={skill} />
                                </Grid>
                            ))}
                        </Grid>
                    </Stack>
                    <Stack gap='20px' overflow={isSmallScreen ? 'none' : 'auto'}>
                    {project.text_sections.map((section, index) => (
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
                <ImageGallery images={project.images} /> 
            </StyledGrid>
        </StyledGridContainer>
    </StyledBox>
  );
}

export default PortfolioPage;