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

export default function SecurityCards({card}) {

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
            image={imgs.securityCameraCardImg}
            alt={`${card.license_plate.license_plate}`}
          />
          <CardContent>
            <Typography gutterBottom variant="subtitle2" component="div">
              خیابان : {card.street_id.name}
            </Typography>
            <Typography variant="caption" color="text.secondary">
              فعالیت : {card.activity === 'exit' ? 'خروج' : 'ورود'}
            </Typography>
          </CardContent>
          </>
        :
        <>
        <CardContent sx={{height:'382px', backgroundColor:'#071636'}}>
        <CardMedia
            component="img"
            height="100"
            image={imgs.cameraDark}
            alt={`${card.license_plate.license_plate}`}
          />
            <Typography sx={{margin:'10px 0'}} color={'#fff'} gutterBottom variant="h5" component="div">
              : شماره پلاک 
            </Typography>
            <Typography color={'#fff'} gutterBottom variant="h5" component="div">
              {card.license_plate.license_plate}
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
  );
}