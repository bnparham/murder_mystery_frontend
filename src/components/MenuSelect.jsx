import { Box } from '@mui/material'
import React from 'react'

export default function MenuSelect({children,backgroundImage,onMouseEnter,onMouseLeave,id,isHover}) {
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
      filter: isHover ? 'blur(3px)' : 'none',
      transition: 'filter 0.3s ease',
      alignItems: 'flex-end',
      display: 'flex',
      }}
  >
    {children}
  </Box>
  )
}
