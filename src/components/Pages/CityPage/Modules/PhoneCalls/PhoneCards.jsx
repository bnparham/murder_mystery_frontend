import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';



// icons
import TodayIcon from '@mui/icons-material/Today';

// load imgs
import {imgs} from '../../CityPageTables'

export default function PhoneCards({card}) {

  const [isOpen, setIsOpen] = React.useState(true)

  return (
    <Card onClick={() => (setIsOpen(e => !e))} sx={{ maxWidth: 395, boxShadow:'1px solid #000', height:'50vh', backgroundColor:isOpen ? '' : '#071636', cursor:'pointer'}}>
      <CardActionArea onClick={() => (setIsOpen(e => !e))} sx={{p:0}}>
        {
          isOpen === true
          ?
          <>
          <CardMedia
            component="img"
            height="100%"
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
        <CardMedia
            component="img"
            sx={{height:'150px',width:'150px', display:'inline'}}
            image={imgs.phoneDark}
            alt={`${card.caller.phone_number}`}
          />
        <CardContent sx={{height:'100%'}}>
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