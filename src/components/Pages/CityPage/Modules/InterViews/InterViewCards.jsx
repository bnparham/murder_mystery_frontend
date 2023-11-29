import React from 'react'
// import interviewCardImg from '../../../../../img/interviewCardImg.png'
import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material'
import TodayIcon from '@mui/icons-material/Today';

// load imgs
import {imgs} from '../../CityPageTables'

export default function InterViewCards({card}) {

  const [isOpen, setIsOpen] = React.useState(true)

  return (
    <Card onClick={() => (setIsOpen(e => !e))} sx={{ maxWidth: 395, boxShadow:'1px solid #000', height:'50vh', backgroundColor:isOpen ? '' : '#071636', cursor:'pointer'}}>
      <CardActionArea sx={{p:0}}>
        {
          isOpen === true
          ?
          <>
          <CardMedia
            component="img"
            height="100%"
            image={imgs.interviewCardImg}
            alt={`${card.name}-${card.date}`}
          />
          <CardContent>
            <Typography gutterBottom variant="subtitle2" component="div">
              نام : {card.name}
            </Typography>
            <Typography gutterBottom variant="subtitle2" component="div">
              خیابان : {card.street_id.name}
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
        <CardMedia
            component="img"
            sx={{height:'150px',width:'150px', display:'inline'}}
            image={imgs.interviewDark}
            alt={`${card.name}-${card.date}`}
          />
        <CardContent sx={{height:'100%'}}>
            <div style={{display:'flex', justifyContent:'flex-end', alignItems:'center', margin: '20px 0'}}>
              <Typography variant="subtitle2" color="#ffff">
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