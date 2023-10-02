import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { StyledBodyTypography } from '../../pages/styled.js';
import { projects } from './constant.js';
import Listing from './listing/listing.js';
import { StyledStack, StyledOuterStack } from './styled.js';

function Projects() {
  const navigate = useNavigate(); // Initialize useNavigate

  // Handler for click event
  const handleProjectClick = (projectId) => {
    console.log('hi');
    navigate(`/portfolio/${projectId}`); // Navigate to the PortfolioPage for the clicked project
  };

  return (
    <StyledOuterStack>
      <StyledBodyTypography isAlternateColor sx={{ margin: '0 10px' }}>Projects</StyledBodyTypography>
      <StyledStack>
        {projects.map((data, index) => (
          // Pass the handleProjectClick function as a prop to the Listing component
          <Listing key={index} {...data} onProjectClick={() => handleProjectClick(data.id)} />
        ))}
      </StyledStack>
    </StyledOuterStack>
  );
}

export default Projects;
