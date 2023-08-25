import {Stack , Divider} from '@mui/material';
import styled from '@emotion/styled';

export const DottedDivider = styled(Divider)({
    borderTop: '1px dotted #94A3B8'
});

export const StyledStack = styled(Stack)({
    gap: '20px',
});

export const StyledOuterStack = styled(Stack)(({ theme }) => ({
    gap: '20px',
    marginBottom: '220px',
    [theme.breakpoints.down('md')]: {
        marginBottom: '0px',
    }
}));