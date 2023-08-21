import {Stack , Divider, Button} from '@mui/material';
import styled from '@emotion/styled';

export const DottedDivider = styled(Divider)({
    borderTop: '1px dotted #94A3B8'
});

export const StyledStack = styled(Stack)({
    gap: '10px',
});

export const StyledButton = styled(Button)({
    padding: '0 !important',
    color: '#E2E8F0',
    fontFamily: 'Courier',
    fontSize: '0.75rem',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: '1.25rem',
});