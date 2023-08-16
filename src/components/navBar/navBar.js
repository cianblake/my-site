import { Grid } from '@mui/material';
import { StyledNavBarTitle } from './styled';

function NavBar() {
  return (
    <Grid container direction='column' >
        <Grid item>
            <StyledNavBarTitle isAlternateColor >About</StyledNavBarTitle>
        </Grid>
        <Grid item>
            <StyledNavBarTitle>Experience</StyledNavBarTitle>
        </Grid>
        <Grid item>
            <StyledNavBarTitle>Projects</StyledNavBarTitle>
        </Grid>
    </Grid>
  );
}

export default NavBar;
