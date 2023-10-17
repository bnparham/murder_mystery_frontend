import React from 'react'
import { createTheme, ThemeProvider } from '@mui/material/styles';

const defaultTheme = createTheme(
    {
      direction: 'rtl',
      typography:{
        fontFamily: [
          'Vazirmatn',
          'B Nazanin',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          'sans-serif',
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
        ].join(','),
      },
    }
  );

export default function AppLayout({children}) {
  return (
    <ThemeProvider theme={defaultTheme}>
        {children}
    </ThemeProvider>
  )
}
