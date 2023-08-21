import { Grid } from '@mui/material';
import { StyledNavBarTitle } from './styled';
import { Link } from 'react-scroll';

function NavBar() {
  return (
    <Grid container direction='column'>
        <Grid item>
            <Link 
              to="about-section" 
              smooth={true} 
              duration={500} 
              containerId="scrollable-section"
              style={{ display: 'block', zIndex: 1000 }}
            >
                <StyledNavBarTitle isAlternateColor>About</StyledNavBarTitle>
            </Link>
        </Grid>
        <Grid item>
            <Link 
              to="experience-section" 
              smooth={true} 
              duration={500} 
              containerId="scrollable-section"
              style={{ display: 'block', zIndex: 1000 }}
            >
                <StyledNavBarTitle>Experience</StyledNavBarTitle>
            </Link>
        </Grid>
        <Grid item>
            <Link 
              to="projects-section" 
              smooth={true} 
              duration={500} 
              containerId="scrollable-section"
              style={{ display: 'block', zIndex: 1000 }}
            >
                <StyledNavBarTitle>Projects</StyledNavBarTitle>
            </Link>
        </Grid>
    </Grid>
  );
}

export default NavBar;