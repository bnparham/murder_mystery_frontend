import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

import securityCamera from '../../../../img/securityCamera.jpg'
import securityCameraCard from '../../../../img/securityCameraCard.png'

import cameraBlackWhite from '../../../../img/cameraBlackWhite.png'

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
            height="270"
            image={securityCameraCard}
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
        <CardContent sx={{height:'312px', backgroundColor:'#071636'}}>
        <CardMedia
            component="img"
            height="100"
            image={cameraBlackWhite}
            alt={`${card.license_plate.license_plate}`}
          />
            <Typography sx={{margin:'10px 0'}} color={'#fff'} gutterBottom variant="h5" component="div">
              : شماره پلاک 
            </Typography>
            <Typography color={'#fff'} gutterBottom variant="h5" component="div">
              {card.license_plate.license_plate}
            </Typography>
            <Typography color={'#fff'} variant="subtitle2">
              تاریخ  : {card.date}
            </Typography>
            <Typography color={'#fff'} variant="subtitle2">
              زمان :  {card.time.split(':').slice(0,2).join(':')}
            </Typography>
          </CardContent>
        </>
        }
      </CardActionArea>
    </Card>
  );
}