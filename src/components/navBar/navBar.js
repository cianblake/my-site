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
              spy={true}
              activeClass="active-section"
              style={{ display: 'block', zIndex: 1000 }}
            >
                <StyledNavBarTitle sx={{margin:'0 10px'}}>About</StyledNavBarTitle>
            </Link>
        </Grid>
        <Grid item>
            <Link 
              to="experience-section" 
              smooth={true} 
              duration={500} 
              containerId="scrollable-section"
              spy={true}
              activeClass="active-section"
              style={{ display: 'block', zIndex: 1000 }}
            >
              <StyledNavBarTitle sx={{margin:'0 10px'}}>Experience</StyledNavBarTitle>
            </Link>
        </Grid>
        <Grid item>
            <Link 
              to="projects-section" 
              smooth={true} 
              duration={500} 
              containerId="scrollable-section"
              spy={true}
              activeClass="active-section"
              style={{ display: 'block', zIndex: 1000 }}
            >
              
                <StyledNavBarTitle sx={{margin:'0 10px'}}>Projects</StyledNavBarTitle>
            </Link>
        </Grid>
    </Grid>
  );
}

export default NavBar;