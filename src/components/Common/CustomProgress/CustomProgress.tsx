import Box from '@material-ui/core/Box';
import CircularProgress from '@material-ui/core/CircularProgress';
import React from 'react';

const CustomProgress = () => (
  <Box position="absolute" top="45%" left="45%">
    <CircularProgress color="secondary" size={100} thickness={1} />
  </Box>
)

export default CustomProgress;