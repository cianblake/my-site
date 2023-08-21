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
          <StyledIconButton href='https://www.linkedin.com/in/cian-blake/' target='_blank'>
            <LinkedInIcon />
          </StyledIconButton>
        </Grid>
        <Grid item>
          <StyledIconButton href='https://github.com/cianblake' target='_blank'>
            <GitHubIcon />
          </StyledIconButton>
        </Grid>
        <Grid item>
            <StyledIconButton href='mailto:dev@cianblake.com' target='_blank'>
                <EmailIcon />
            </StyledIconButton> 
        </Grid>
        <Grid item>
          <StyledIconButton href='https://www.youtube.com/@cian_and_doggy_adventures/' target='_blank'>
            <YouTubeIcon />
          </StyledIconButton>  
        </Grid>
    </Grid>
  );
}

export default Socials;
