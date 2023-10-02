import {Stack} from '@mui/material';
import styled from '@emotion/styled';

export const StyledStack = styled(Stack)(({ isCodeColor }) => ({
    backgroundColor: isCodeColor ? 'rgba(45, 212, 191, 0.20);' : '#000' ,
    borderRadius: '4px',
}));

