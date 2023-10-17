import { Box } from '@mui/material'
import React from 'react'

export default function MenuSelect({children,backgroundImage,onMouseEnter,onMouseLeave,id}) {
  return (
    <Box
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
    height={650}
    id={id}
    sx={{
      backgroundImage: `url(${backgroundImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      }}
  >
    {children}
  </Box>
  )
}
