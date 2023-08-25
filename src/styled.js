import { Box } from '@mui/material';
import styled from '@emotion/styled';

export const StyledBox = styled(Box)(({ theme }) => ({
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
    padding: '100px 40px 0 40px',
    maxHeight: 'calc(100vh - 100px)',
    height: '100vh',
    backgroundColor: '#000000',
    overflow: 'hidden',
    '&::before': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'radial-gradient(circle 1000px at var(--x) var(--y), rgba(255, 255, 255, 0.12), transparent 1000px)',
        pointerEvents: 'none',
    },
    [theme.breakpoints.down('md')]: {
        overflow: 'scroll',
        '&::before': {
            background: 'none',
        },
    },
}));