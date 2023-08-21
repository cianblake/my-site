import { Box, Grid, Typography } from '@mui/material';
import styled from '@emotion/styled';

export const StyledBox = styled(Box)(({ theme }) => ({
  height: '100%',
  overflow: 'hidden',
  width: '100%',
  maxWidth: '1200px',
  backgroundColor: '#000000',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'flex-start',
  [theme.breakpoints.down('md')]: {
    overflow: 'auto',
  },
}));

export const StyledGrid = styled(Grid)(({ theme }) => ({
  alignItems: 'flex-start',
  overflowY: 'auto',
  margin: '20px 0 20px 0',
  height: '100vh',
  [theme.breakpoints.down('md')]: {
    overflowY: 'hidden',
  },
}));

export const StyledGridContainer = styled(Grid)({
    width: '100%',
    direction: 'row',
});

export const StyledTitleTypography = styled(Typography)({
    color: '#E2E8F0',
    fontFamily: 'Courier',
    fontSize: '3rem',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: '3rem',
    letterSpacing: '0.075rem',
});

export const StyledSubTitleTypography = styled(Typography)({
    color: '#E2E8F0',
    fontFamily: 'Courier',
    fontSize: '1.1875rem',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: '1.75rem',
    letterSpacing: '0.03125rem',
});

export const StyledBodyTypography = styled(Typography)(({ isAlternateColor }) => ({
    color: isAlternateColor ? '#E2E8F0' : '#94A3B8',
    fontFamily: 'Courier',
    fontSize: '1rem',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: '1.5rem',
}));

