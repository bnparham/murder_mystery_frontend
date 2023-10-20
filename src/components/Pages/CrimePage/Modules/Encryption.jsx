import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import { TextField, Typography } from '@mui/material';
import CipherKeyInput from './CipherKeyInput';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: 'transparent',
  ...theme.typography.body2,
  padding: 2,
  textAlign: 'center',
  color: theme.palette.text.secondary,
  height:240,
  border: 'none',
  boxShadow: 'none'

}));


function caesarCipher(text, key) {
    let result = '';
  
    for (let i = 0; i < text.length; i++) {
      const char = text[i];
  
      if (char.match(/[a-z]/i)) {
        const isUpperCase = char === char.toUpperCase();
        const charCode = char.charCodeAt(0);
        const offset = isUpperCase ? 65 : 97;
  
        const shiftedCharCode = ((charCode - offset + key) % 26) + offset;
  
        result += String.fromCharCode(shiftedCharCode);
      } else {
        // If the character is not a letter, keep it unchanged.
        result += char;
      }
    }
  
    return result;
  }
  
  // Example usage:
//   const plaintext = "Hello, World!";
//   const key = 3;
//   const encryptedText = caesarCipher(plaintext, key);
//   console.log(encryptedText); // Outputs: "Khoor, Zruog!"
  


export default function Encryption() {
    const [text, setText] = React.useState('')
    const [keyValue, setKeyValue] = React.useState(0)
  return (
    <Box sx={{ flexGrow: 1}}>
      <Grid container spacing={2}>
        <Grid xs={12} sx={{border:'none'}}>
          <Item sx={{border:'none'}}>
            <Box sx={{backgroundColor:'#22c99480',borderRadius:'32px 32px 0 0', p:2}}>
                <Typography color={'#fff'} fontSize={20}>
                : متن رمز گشایی شده
                </Typography>
            </Box>
            <TextField 
                fullWidth = {true}
                disabled = {false}
                multiline={true}
                rows={4}
                sx = {{backgroundColor:"#22c99480"}}
                spellCheck={false}
                value = {`${caesarCipher(text, Number(keyValue))}`}
                inputProps={{
                    style:{fontSize:22, lineHeight:1.6, padding:4, color:'#fff'}
                }}
                variant="standard"
                InputProps={{
                    disableUnderline: true, // <== added this
                }}
            />
          </Item>
        </Grid>
        <Grid xs={12}>
          <Item>
                <Box sx={{backgroundColor:'#c9a82280',borderRadius:'32px 32px 0 0', p:2}}>
                <Typography color={'#fff'} fontSize={20}>
                : متن را در قسمت زیر وارد کنید
                </Typography>
                </Box>
          <TextField 
                fullWidth = {true}
                multiline={true}
                rows={4}
                value={text}
                spellCheck={false}
                sx = {{backgroundColor:"#c9a82280"}}
                onChange={(e)=>{setText(e.target.value)}}
                inputProps={{
                    style:{fontSize:22, lineHeight:1.6, padding:4, color:'#fff'}
                }}
                variant="standard"
                InputProps={{
                    disableUnderline: true, // <== added this
                }}
            />
            <CipherKeyInput keyValue={keyValue} setKeyValue={setKeyValue}/>
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}