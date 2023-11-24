import React from 'react'
import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material'
import cameraBlackWhite from '../../../../../img/cameraBlackWhite.png'
import TodayIcon from '@mui/icons-material/Today';


// load imgs
import {imgs} from '../../CityPageTables'

export default function AtmCard({card}) {

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
            image={imgs.ATMCardImg}
            alt={`${card.atm_location.name}`}
          />
          <CardContent>
            <Typography gutterBottom variant="subtitle2" component="div">
              خیابان : {card.atm_location.name}
            </Typography>
            <Typography gutterBottom variant="caption" component="div" color="text.secondary"> 
                عملیات : {card.transaction_type}
            </Typography>
          </CardContent>
          </>
        :
        <>
        <CardContent sx={{height:'318px', backgroundColor:'#071636'}}>
        <CardMedia
            component="img"
            height="100"
            image={cameraBlackWhite}
            alt={`${card.atm_location.name}`}
          />

            <Typography sx={{margin:'5px 0'}} color={'#fff'} variant="h6">
                : شماره حساب
            </Typography>
            <Typography color={'#fff'} variant="h6">
            {card.account_number.account_number}
            </Typography>

            <Typography sx={{margin:'5px 0'}} color={'#fff'} variant="h6">
                : مبلغ
            </Typography>
            <Typography color={'#fff'} variant="h6">
              {card.amount}
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
  )
}