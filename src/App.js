import LandingPage from './pages/landingPage';
import { StyledBox } from './styled';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme();

function App() {
  return (
    <ThemeProvider theme={theme}>
      <StyledBox>
        <LandingPage />
      </StyledBox>
    </ThemeProvider>
  );
}

export default App;
