import React from 'react'
import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material'
import cameraBlackWhite from '../../../../../img/cameraBlackWhite.png'
import TodayIcon from '@mui/icons-material/Today';


// load imgs
import {imgs} from '../../CityPageTables'


export default function BankAccountCard({card}) {

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
            image={imgs.BankAccountImg}
            alt={`${card.account_number}`}
          />
          <CardContent>
            <Typography gutterBottom variant="subtitle2" component="div"> 
                شماره حساب : {card.account_number}
            </Typography>
            <Typography gutterBottom variant="caption" component="div" color="text.secondary">
              نام صاحب حساب : {card.person_id.name}
            </Typography>
          </CardContent>
          </>
        :
        <>
        <CardContent sx={{height:'345px', backgroundColor:'#071636'}}>
        <CardMedia
            component="img"
            height="100"
            image={cameraBlackWhite}
            alt={`${card.account_number}`}
          />
            <div style={{display:'flex', justifyContent:'flex-end', alignItems:'center', margin: '35px 0'}}>
              <Typography color={'#fff'} variant="subtitle2">
                تاریخ ساخت حساب : {card.created.split("-").join('/')}
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

{/* <div>
{card.account_number} - {card.created} - {card.person_id.name}
</div> */}