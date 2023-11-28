import React from 'react'
import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material'


// load imgs
import {imgs} from '../../CityPageTables'

export default function AirportCard({card}) {

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
            height='100%'
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
        </>
        :
        <>
        <CardMedia
            component="img"
            height='100%'
            image={imgs.AirportDark}
            alt={`${card.full_name}`}
          />
        <CardContent sx={{height:'100%'}}>
          </CardContent>
        </>
      }
      </CardActionArea>
    </Card>
  )
}
