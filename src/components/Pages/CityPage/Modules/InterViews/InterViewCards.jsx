import React from 'react'
import interviewCardImg from '../../../../../img/interviewCardImg.png'
import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material'
import cameraBlackWhite from '../../../../../img/cameraBlackWhite.png'
import TodayIcon from '@mui/icons-material/Today';


export default function InterViewCards({card}) {

  const [isOpen, setIsOpen] = React.useState(true)

  return (
    <Card sx={{ maxWidth: 395}}>
      <CardActionArea onClick={() => (setIsOpen(e => !e))} sx={{p:0}}>
        {
          isOpen === true
          ?
          <>
          <CardMedia
            component="img"
            height="270"
            image={interviewCardImg}
            alt={`${card.name}-${card.date}}`}
          />
          <CardContent>
            <Typography gutterBottom variant="subtitle2" component="div">
              نام : {card.name}
            </Typography>

            <div style={{display:'flex', justifyContent:'flex-end', alignItems:'center', margin: '5px 0'}}>
              <Typography color={'#000'} variant="subtitle2">
                {card.date.split("-").join('/')}
              <TodayIcon color={'#000'} fontSize='small' sx={{padding:'0 5px'}}/>
              </Typography>
            </div>
            
          </CardContent>
          </>
        :
        <>
        <CardContent sx={{height:'315px', backgroundColor:'#071636'}}>
        <CardMedia
            component="img"
            height="100"
            image={cameraBlackWhite}
            alt={`${card.name}-${card.date}`}
          />
            <div style={{display:'flex', justifyContent:'flex-end', alignItems:'center', margin: '20px 0'}}>
              <Typography variant="caption" color="#ffff">
                شرح : {card.transcript}
              </Typography>
            </div>
          </CardContent>
        </>
        }
      </CardActionArea>
    </Card>
  )
}

{/* <div >
{card.name} - {card.transcript} - {card.date}
</div> */}