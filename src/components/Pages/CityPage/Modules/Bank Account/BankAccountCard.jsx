import React from 'react'
import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material'
import TodayIcon from '@mui/icons-material/Today';


// load imgs
import {imgs} from '../../CityPageTables'


export default function BankAccountCard({card}) {

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
            image={imgs.BankAccountImg}
            alt={`${card.account_number}`}
          />
          <CardContent>
            <Typography gutterBottom variant="subtitle2" component="div"> 
                شماره حساب : {card.account_number}
            </Typography>
            <Typography gutterBottom variant="caption" component="div" color="text.secondary">
              نام : {card.person_id.name}
            </Typography>
          </CardContent>
          </>
        :
        <>
        <CardMedia
            component="img"
            sx={{height:'150px',width:'150px', display:'inline'}}
            image={imgs.BankAccountDark}
            alt={`${card.account_number}`}
          />
        <CardContent sx={{height:'100%'}}>
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