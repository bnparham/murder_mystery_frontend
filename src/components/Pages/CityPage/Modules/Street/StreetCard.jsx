import React from 'react'
import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material'
import cameraBlackWhite from '../../../../../img/cameraBlackWhite.png'
import TodayIcon from '@mui/icons-material/Today';
import AccessTimeIcon from '@mui/icons-material/AccessTime';


// load imgs
import {imgs} from '../../CityPageTables'

export default function StreetCard({card}) {

  return (
    <Card sx={{ maxWidth: 395}}>
      <CardActionArea>
      <CardMedia
            component="img"
            height="270"
            image={imgs.streetCardImg}
            alt={`${card.name}-${card.location_id.name}`}
          />
          <CardContent>
            <Typography gutterBottom variant="caption" component="div" color='text.secondary'> 
            : شهر  
            </Typography>
            <Typography gutterBottom variant="subtitle2" component="div"> 
              {card.name}
            </Typography>
            <Typography gutterBottom variant="caption" component="div" color='text.secondary'> 
            : لوکیشن  
            </Typography>
            <Typography gutterBottom variant="subtitle2" component="div">
              {card.location_id.name}
            </Typography>
          </CardContent>
      </CardActionArea>
    </Card>
  )
}
