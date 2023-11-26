import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';



// icons
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import TodayIcon from '@mui/icons-material/Today';

// load imgs
import {imgs} from '../../CityPageTables'

export default function PhoneCards({card}) {

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
            image={imgs.phoneCallsCardImg}
            alt={`${card.caller.phone_number}`}
          />
          <CardContent>
            <Typography gutterBottom variant="subtitle2" component="div">
             تماس از: {card.caller.phone_number}
            </Typography>
            <Typography gutterBottom variant="caption" component="div" color="text.secondary">
              مدت زمان مکالمه : {card.duration} ثانیه
            </Typography>
          </CardContent>
          </>
        :
        <>
        <CardContent sx={{height:'315px', backgroundColor:'#071636'}}>
        <CardMedia
            component="img"
            height="100"
            image={imgs.phoneDark}
            alt={`${card.caller.phone_number}`}
          />
            <Typography sx={{margin:'10px 0'}} color={'#fff'} variant="h6">
                : دریافت کننده
            </Typography>
            <Typography color={'#fff'} variant="h6">
            {card.reciver.phone_number}
            </Typography>
            <div style={{display:'flex', justifyContent:'flex-end', alignItems:'center', margin: '5px 0'}}>
              <Typography color={'#fff'} variant="subtitle2">
                {card.date.split("-").join('/')}
              <TodayIcon color={'#fff'} fontSize='small' sx={{padding:'0 5px'}}/>
              </Typography>
            </div>
          </CardContent>
        </>
        }
      </CardActionArea>
    </Card>
  );
}