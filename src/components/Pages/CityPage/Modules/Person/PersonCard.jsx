import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';



// load imgs
import {imgs} from '../../CityPageTables'

import phoneDark from '../../../../../img/phoneDark.png'


export default function PersonCard({card}) {

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
            image={imgs.personCardImg}
            alt={`${card.name}`}
          />
          <CardContent>
            <Typography gutterBottom variant="subtitle2" component="div">
             نام : {card.name}
            </Typography>
          </CardContent>
          </>
        :
        <>
        <CardContent sx={{height:'305px', backgroundColor:'#071636'}}>
        <CardMedia
            component="img"
            height="100"
            image={phoneDark}
            alt={`${card.name}`}
          />
            <Typography sx={{margin:'10px 0'}} color={'#fff'} variant="subtitle2">
                : پاسپورت
            </Typography>
            <Typography color={'#fff'} variant="subtitle2">
            {card.passport_number}
            </Typography>
            <Typography sx={{margin:'10px 0'}} color={'#fff'} variant="subtitle2">
                : شماره تلفن
            </Typography>
            <Typography color={'#fff'} variant="subtitle2">
            {card.phone_number}
            </Typography>
            <Typography sx={{margin:'10px 0'}} color={'#fff'} variant="subtitle2">
                : شماره پلاک
            </Typography>
            <Typography color={'#fff'} variant="subtitle2">
            {card.license_plate}
            </Typography>
          </CardContent>
        </>
        }
      </CardActionArea>
    </Card>
  );
}