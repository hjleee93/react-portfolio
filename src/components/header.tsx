import React from 'react'
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';

function header() {
  const preventDefault = (event: React.SyntheticEvent) => event.preventDefault();
  return (
    <Box
      sx={{
        typography: 'body1',
        '& > :not(style) + :not(style)': {
          ml: 2,
        },
      }}
      onClick={preventDefault}
    >
      <Link href="#">Home</Link>
      <Link href="#" color="inherit">
        Project 1
      </Link>
      <Link href="#" variant="body2">
        Project 2
      </Link>
    </Box>
  )
}
export default header