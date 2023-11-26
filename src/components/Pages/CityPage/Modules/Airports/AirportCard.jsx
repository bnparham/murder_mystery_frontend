import React from 'react'
import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material'


// load imgs
import {imgs} from '../../CityPageTables'

export default function AirportCard({card}) {

  return (
    <Card sx={{ maxWidth: 395}}>
      <CardActionArea sx={{p:0}}>
      <CardMedia
            component="img"
            height="270"
            image={imgs.AirportImg}
            alt={`${card.full_name}-${card.city}`}
          />
          <CardContent>
            <Typography gutterBottom variant="subtitle2" component="div"> 
              {card.full_name}
            </Typography>
            <Typography gutterBottom variant="subtitle2" component="div" color="text.secondary">
              شهر : {card.city}
            </Typography>
          </CardContent>
      </CardActionArea>
    </Card>
  )
}
