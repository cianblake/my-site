import { Box } from '@mui/material';
import styled from '@emotion/styled';

export const StyledBox = styled(Box)({
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
        background: 'radial-gradient(circle 100px at var(--x) var(--y), transparent 0%, rgba(0, 0, 0, 0.7) 150px)',
        pointerEvents: 'none',
    },
});
