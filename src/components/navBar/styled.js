import { Typography } from '@mui/material';
import styled from '@emotion/styled';

export const StyledNavBarTitle = styled(Typography)(({ isAlternateColor }) => ({
    color: isAlternateColor ? '#E2E8F0' : '#94A3B8',
    fontFamily: 'Courier',
    fontSize: '0.75rem',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: '1rem',
    letterSpacing: '0.075rem',
    textTransform: 'uppercase',
    cursor: 'pointer',
    '&:hover': {
        color: '#E2E8F0'
    }
}));
