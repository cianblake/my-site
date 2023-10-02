import {Stack , Divider} from '@mui/material';
import styled from '@emotion/styled';

export const DottedDivider = styled(Divider)({
    borderTop: '1px dotted #94A3B8'
});

export const StyledStack = styled(Stack)({
    height: '345px',
});

export const StyledOuterStack = styled(Stack)({
    maxHeight: 'calc(100vh - 100px)',
    width: '100%',
});

export const StyledMainImage = styled('img')({
    height: 'auto',
    width: '100%',
    borderRadius: '4px',
});

export const StyledThumbImage = styled('img')({
    height: 'auto',
    width: '186px',
    borderRadius: '4px',
});

export const OverflowStack = styled(Stack)({
    overflow: 'auto',
    paddingBottom: '40px',
});
