import React from 'react';
import { Box } from '@mui/material';
import styled from '@emotion/styled';

export const StyledBox = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  alignContent: 'center',
  padding: '100px 0',
  maxHeight: 'calc(100vh - 200px)',
  height: '100vh',
});