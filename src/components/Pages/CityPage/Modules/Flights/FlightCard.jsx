import React from 'react'
import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material'
import TodayIcon from '@mui/icons-material/Today';
import AccessTimeIcon from '@mui/icons-material/AccessTime';


// load imgs
import {imgs} from '../../CityPageTables'


export default function FlightCard({card}) {

  const [isOpen, setIsOpen] = React.useState(true)


  return (
    <Card onClick={() => (setIsOpen(e => !e))} sx={{ maxWidth: 395, boxShadow:'1px solid #000', height:'53vh', backgroundColor:isOpen ? '' : '#071636', cursor:'pointer'}}>
      <CardActionArea sx={{p:0}}>
        {
          isOpen === true
          ?
          <>
          <CardMedia
            component="img"
            height="100%"
            image={imgs.flightCardImg}
            alt={`${card.origin_airport_id.full_name}-${card.destination_airport_id.full_name}`}
          />
          <CardContent>
            <Typography gutterBottom variant="caption" component="div" color='text.secondary'> 
            : مبدا  
            </Typography>
            <Typography gutterBottom variant="subtitle2" component="div"> 
              {card.origin_airport_id.full_name}
            </Typography>
            <Typography gutterBottom variant="caption" component="div" color='text.secondary'> 
            : مقصد  
            </Typography>
            <Typography gutterBottom variant="subtitle2" component="div">
              {card.destination_airport_id.full_name}
            </Typography>
          </CardContent>
          </>
        :
        <>
        <CardMedia
            component="img"
            sx={{height:'150px',width:'150px', display:'inline'}}
            image={imgs.flightDark}
            alt={`${card.account_number}`}
          />
        <CardContent sx={{height:'100%'}}>
            <Typography sx={{margin:'10px 0'}} color={'#fff'} variant="h6">
                : نوع پرواز
            </Typography>
            <Typography color={'#fff'} variant="h6">
              {card.type === 'local' ? 'داخلی' : 'خارجی'}
            </Typography>

            <Typography sx={{margin:'10px 0'}} color={'#fff'} variant="h6">
                : شماره پرواز
            </Typography>
            <Typography color={'#fff'} variant="h6">
              {card.id}
            </Typography>

            <div style={{display:'flex', justifyContent:'flex-end', alignItems:'center', margin: '5px 0'}}>
              <Typography color={'#fff'} variant="subtitle2">
                {card.date.split("-").join('/')}
              <TodayIcon color={'#fff'} fontSize='small' sx={{padding:'0 5px'}}/>
              </Typography>
            </div>

            <div style={{display:'flex', justifyContent:'flex-end', alignItems:'center'}}>
              <Typography color={'#fff'} variant="subtitle2">
                {card.time.split(':').slice(0,2).join(':')}
              </Typography>
              <AccessTimeIcon fontSize='small' sx={{padding:'0 5px', color:'#fff'}}/>
            </div>
          </CardContent>
        </>
        }
      </CardActionArea>
    </Card>
  )
}
