import { Box } from '@mui/material'
import React from 'react'

export default function MenuSelect({children,bg,bgBlur,onMouseEnter,onMouseLeave,id,isHover}) {
  return (
    <Box
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
    height='100vh'
    id={id}
    sx={{
      backgroundImage: isHover ? `url(${bgBlur})` : `url(${bg})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      transition: '0.3s ease',
      display: 'flex',
      flexDirection: 'column',
      // justifyContent: isHover ? 'center' : 'end',
      // alignItems : isHover ? 'center' : 'end',
      justifyContent: 'end',
      cursor:'pointer',
      }}
  >
    {children}
  </Box>
  )
}
