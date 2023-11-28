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
    <Card onClick={() => (setIsOpen(e => !e))} sx={{ maxWidth: 395, boxShadow:'1px solid #000', height:'50vh', backgroundColor:isOpen ? '' : '#071636', cursor:'pointer'}}>
      <CardActionArea sx={{p:0}}>
        {
          isOpen === true
          ?
          <>
          <CardMedia
            component="img"
            height="100%"
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
        <CardMedia
            component="img"
            sx={{height:'150px',width:'150px', display:'inline'}}
            image={imgs.personDark}
            alt={`${card.name}`}
          />
        <CardContent sx={{height:'100%'}}>
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