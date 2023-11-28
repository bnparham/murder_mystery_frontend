import React from 'react'
import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material'

// load imgs
import {imgs} from '../../CityPageTables'

export default function PassengerCard({card}) {
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
            height="100%"
            image={imgs.passengerCardImg}
            alt={`${card.person_id.name}`}
          />
          <CardContent>
            <Typography gutterBottom variant="subtitle2" component="div">
              {card.person_id.name}
            </Typography>
            <Typography gutterBottom variant="caption" component="div" color="text.secondary"> 
                شماره پرواز : {card.flight_id.id}
            </Typography>
          </CardContent>
          </>
        :
        <>
        <CardContent sx={{height:'318px', backgroundColor:'#071636'}}>
        <CardMedia
            component="img"
            height="100"
            image={imgs.passengerDark}
            alt={`${card.person_id.name}`}
          />
            <Typography sx={{margin:'10px 0'}} color={'#fff'} variant="h6">
                : جایگاه
            </Typography>
            <Typography color={'#fff'} variant="h6">
            {card.seat}
            </Typography>

          </CardContent>
        </>
        }
      </CardActionArea>
    </Card>
  )
}
