import { Grid } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { StyledIconButton } from './styled';

function Socials() {
  return (
    <Grid container direction='row' >
        <Grid item>
          <StyledIconButton>
            <LinkedInIcon />
          </StyledIconButton>
        </Grid>
        <Grid item>
          <StyledIconButton>
            <GitHubIcon />
          </StyledIconButton>
        </Grid>
        <Grid item>
          <StyledIconButton>
            <EmailIcon />
          </StyledIconButton> 
        </Grid>
        <Grid item>
          <StyledIconButton>
            <YouTubeIcon />
          </StyledIconButton>  
        </Grid>
    </Grid>
  );
}

export default Socials;
