import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

import securityCamera from '../../../../img/securityCamera.jpg'
import securityCameraCard from '../../../../img/securityCameraCard.png'

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
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="caption" component="div">
              خیابان : {card.street_id.name}
            </Typography>
            <Typography variant="subtitle2" color="text.secondary">
              فعالیت : {card.activity === 'exit' ? 'خروج' : 'ورود'}
            </Typography>
          </CardContent>
          </>
        :
        <>
        <CardContent sx={{height:'202px', border:'3px solid #000'}}>
            <Typography gutterBottom variant="h5" component="div">
              : شماره پلاک 
            </Typography>
            <Typography gutterBottom variant="h5" component="div">
              {card.license_plate.license_plate}
            </Typography>
            <Typography variant="subtitle2" color="text.secondary">
              تاریخ  : {card.date} | زمان :  {card.time}
            </Typography>
          </CardContent>
        </>
        }
      </CardActionArea>
    </Card>
  );
}