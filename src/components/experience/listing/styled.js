import { Divider, Chip, Grid } from '@material-ui/core';
import styled from '@emotion/styled';

export const DottedDivider = styled(Divider)({
    borderTop: '1px dotted #94A3B8'
});

export const StyledChip = styled(Chip)({
    backgroundColor: 'rgba(45, 212, 191, 0.10)',
    color: '#5EEAD4',
    fontFamily: 'Courier',
    fontSize: '0.75rem',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: '1.25rem',
});

export const StyledGrid = styled(Grid)({
    padding: '6px 10px',
    borderRadius: '4px',
    '&:hover': {
        backgroundColor: 'rgba(45, 212, 191, 0.1)'
    }
});